(async () => {
  const api = globalThis.browser || chrome;
  const status = document.querySelector('#status');
  let values;
  try { values = { enabled: true, ...await api.storage.local.get(null) }; }
  catch { status.textContent = 'Unable to load settings'; return; }
  const inputs = new Map();
  const master = document.querySelector('#enabled');
  master.checked = values.enabled !== false;
  for (const group of new Set(TweakerSettings.map(option => option.group))) {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    title.textContent = group;
    const card = document.createElement('div');
    card.className = 'card';
    section.append(title, card);
    for (const option of TweakerSettings.filter(option => option.group === group)) {
      const row = document.createElement('label');
      row.className = 'setting';
      row.dataset.search = `${option.label} ${option.description}`.toLowerCase();
      const copy = document.createElement('span');
      copy.className = 'copy';
      const label = document.createElement('span');
      label.className = 'label'; label.textContent = option.label;
      const description = document.createElement('span');
      description.className = 'description'; description.textContent = option.description;
      const input = document.createElement('input');
      input.type = 'checkbox'; input.setAttribute('role', 'switch');
      input.checked = Boolean(values[option.key]);
      input.addEventListener('change', () => save(option.key, input.checked));
      inputs.set(option.key, input);
      copy.append(label, description); row.append(copy, input); card.append(row);
    }
    document.querySelector('#settings').append(section);
  }
  function updateDisabled() {
    for (const [key, input] of inputs) input.disabled = !master.checked ||
      (['hideRecommended', 'hideChat', 'hidePlaylist'].includes(key) && values.hideSidebar);
  }
  async function save(key, value) {
    const previous = values[key];
    values[key] = value;
    updateDisabled();
    try { await api.storage.local.set({ [key]: value }); status.textContent = 'Saved · applied on YouTube'; }
    catch {
      values[key] = previous;
      (key === 'enabled' ? master : inputs.get(key)).checked = previous !== undefined ? previous : false;
      updateDisabled(); status.textContent = 'Could not save. Please retry.';
    }
  }
  master.addEventListener('change', () => save('enabled', master.checked));
  document.querySelector('#search').addEventListener('input', event => {
    let count = 0;
    for (const section of document.querySelectorAll('section')) {
      let visible = 0;
      for (const row of section.querySelectorAll('.setting')) {
        row.hidden = !row.dataset.search.includes(event.target.value.trim().toLowerCase());
        if (!row.hidden) visible++;
      }
      section.hidden = visible === 0; count += visible;
    }
    document.querySelector('#empty').hidden = count > 0;
  });
  document.querySelector('#reset').addEventListener('click', async () => {
    const defaults = Object.fromEntries(TweakerSettings.map(option => [option.key, false]));
    defaults.enabled = true;
    try {
      await api.storage.local.set(defaults); values = defaults; master.checked = true;
      for (const input of inputs.values()) input.checked = false;
      updateDisabled(); status.textContent = 'Settings reset';
    } catch { status.textContent = 'Could not reset settings'; }
  });
  updateDisabled();
})();
