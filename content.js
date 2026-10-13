(() => {
  const api = globalThis.browser || chrome;
  let settings = { enabled: true };
  let style;
  let scheduled = false;
  function apply() {
    scheduled = false;
    if (!style) {
      style = document.createElement('style');
      style.id = 'youtube-tweaker-styles';
    }
    if (!style.isConnected && document.documentElement) document.documentElement.append(style);
    const css = settings.enabled === false ? '' : TweakerSettings
      .filter(option => settings[option.key] && option.selector)
      .map(option => `${option.selector} { display: none !important; }`).join('\n');
    if (style.textContent !== css) style.textContent = css;
    if (settings.enabled !== false && settings.disableAutoplay) {
      const toggle = document.querySelector('.ytp-autonav-toggle-button[aria-checked="true"]');
      if (toggle) toggle.click();
    }
  }
  function schedule() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(apply);
    }
  }
  api.storage.local.get(null).then(value => { settings = { enabled: true, ...value }; apply(); })
    .catch(error => console.error('YoutubeTweaker could not load settings', error));
  api.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    for (const [key, change] of Object.entries(changes)) {
      if (change.newValue === undefined) delete settings[key];
      else settings[key] = change.newValue;
    }
    apply();
  });
  new MutationObserver(schedule).observe(document, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-checked'] });
  document.addEventListener('yt-navigate-finish', schedule);
})();
