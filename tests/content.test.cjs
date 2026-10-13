const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
async function harness(initial) {
  let listener; let clicks = 0; let observer; let toggleOn = true;
  const style = { isConnected: false, textContent: '' };
  const context = { console, document: {
    createElement: () => style,
    documentElement: { append: () => { style.isConnected = true; } },
    querySelector: () => toggleOn ? { click: () => { clicks++; toggleOn = false; } } : null,
    addEventListener() {}
  }, browser: { storage: { local: { get: async () => initial }, onChanged: { addListener: fn => listener = fn } } },
    MutationObserver: class { constructor(fn) { observer = fn; } observe() {} },
    requestAnimationFrame: fn => { fn(); }
  };
  vm.createContext(context);
  for (const file of ['settings.js', 'content.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  await new Promise(resolve => setImmediate(resolve));
  return { style, change: changes => listener(changes, 'local'), mutate: () => observer(), clicks: () => clicks, options: context.TweakerSettings };
}
test('enabled rules load and respond to storage updates and master switch', async () => {
  const h = await harness({ hideComments: true });
  assert.match(h.style.textContent, /ytd-comments/);
  assert.doesNotMatch(h.style.textContent, /ytd-masthead/);
  h.change({ hideHeader: { newValue: true } });
  assert.match(h.style.textContent, /ytd-masthead/);
  h.change({ enabled: { newValue: false } });
  assert.equal(h.style.textContent, '');
  h.change({ enabled: { newValue: true }, hideComments: {} });
  assert.doesNotMatch(h.style.textContent, /ytd-comments/);
  assert.match(h.style.textContent, /ytd-masthead/);
});
test('autoplay switches off once and remains untouched when disabled', async () => {
  const h = await harness({ disableAutoplay: true });
  assert.equal(h.clicks(), 1); h.mutate(); assert.equal(h.clicks(), 1);
  const disabled = await harness({ enabled: false, disableAutoplay: true });
  assert.equal(disabled.clicks(), 0);
});
test('all 21 independent controls have unique keys', async () => {
  const h = await harness({});
  assert.equal(h.options.length, 21);
  assert.equal(new Set(h.options.map(x => x.key)).size, 21);
  assert.equal(h.style.textContent, '');
});
