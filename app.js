(() => {
  'use strict';
  const data = window.REEHAA_EXAMPLES;
  if (!data) return;
  const state = { dataset: 'original', overviewTask: 'task1', pinned: new Set(), indices: { task1: 0, task2: 0 }, suppressClickUntil: 0 };
  const inspector = document.querySelector('#inspector');
  const figureViewer = document.querySelector('#figure-viewer');
  const carousels = {};
  const assetURL = path => `${path}?v=simple-3`;
  let opener;
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function img(src, alt, className) {
    const node = el('img', className);
    Object.assign(node, { src: assetURL(src), alt, width: 768, height: 768, loading: 'lazy', draggable: false });
    return node;
  }
  function pin(button, id, enabled) {
    if (enabled) state.pinned.add(id); else state.pinned.delete(id);
    button.classList.toggle('revealed', enabled);
    button.setAttribute('aria-pressed', String(enabled));
  }
  function inspect(example, trigger) {
    opener = trigger;
    document.querySelector('#inspector-title').textContent = `${example.title} · ${example.dataset === 'original' ? 'Original Validation' : 'Cross-region Test'}`;
    document.querySelector('#inspector-query').textContent = example.query;
    document.querySelector('#inspector-query').hidden = !example.query;
    document.querySelector('#inspector-input').src = assetURL(example.paths.input);
    document.querySelector('#inspector-output').src = assetURL(example.paths.output);
    inspector.showModal();
  }
  function caption(text) {
    const p = el('p', 'prompt-panel');
    p.append(el('strong', '', 'Prompt: '), document.createTextNode(text));
    return p;
  }
  function card(example, index) {
    const article = el('article', 'example-card carousel-slide');
    article.dataset.exampleId = example.id;
    const visual = el('div', 'slide-visual');
    const button = el('button', 'card-image');
    button.type = 'button';
    button.setAttribute('aria-label', `Toggle REEHAA output: ${example.task} ${example.title}`);
    pin(button, example.id, state.pinned.has(example.id));
    button.append(img(example.paths.input, `Input ${example.title}`), img(example.paths.output, `REEHAA output ${example.title}`, 'prediction-image'), el('span', 'image-label input-label', 'Input'), el('span', 'image-label output-label', 'Segmentation'));
    button.addEventListener('click', () => {
      if (performance.now() < state.suppressClickUntil) return;
      if (state.indices[example.task] !== index) { setIndex(example.task, index); return; }
      pin(button, example.id, !state.pinned.has(example.id));
    });
    const zoom = el('button', 'inspect-button', '⤢');
    zoom.type = 'button';
    zoom.setAttribute('aria-label', `Enlarge ${example.task} ${example.title}`);
    zoom.addEventListener('click', () => inspect(example, zoom));
    visual.append(button, zoom);
    article.append(visual, caption(example.query || data.overview.prompts.task1));
    return article;
  }
  function setIndex(task, requested, focus = false) {
    const carousel = carousels[task];
    if (!carousel) return;
    const index = Math.max(0, Math.min(carousel.slides.length - 1, requested));
    state.indices[task] = index;
    const active = carousel.slides[index];
    carousel.viewport.parentElement.style.setProperty('--carousel-image-size', `${active.offsetWidth}px`);
    const offset = carousel.viewport.clientWidth / 2 - active.offsetWidth / 2 - active.offsetLeft;
    carousel.track.style.transform = `translateX(${offset}px)`;
    carousel.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.setAttribute('aria-current', String(i === index));
      slide.querySelectorAll('button').forEach(button => { button.tabIndex = i === index ? 0 : -1; });
    });
    carousel.prev.disabled = index === 0;
    carousel.next.disabled = index === carousel.slides.length - 1;
    carousel.status.textContent = `Example ${index + 1} of ${carousel.slides.length}`;
    if (focus) active.querySelector('.card-image').focus({ preventScroll: true });
  }
  function render(task) {
    const container = document.querySelector(`#grid-${task}`);
    const examples = data.examples.filter(e => e.task === task && e.dataset === state.dataset).sort((a, b) => a.row - b.row);
    const name = task === 'task1' ? 'instance segmentation' : 'risk reasoning';
    if (carousels[task]?.observer) carousels[task].observer.disconnect();
    container.setAttribute('role', 'region');
    container.setAttribute('aria-roledescription', 'carousel');
    container.setAttribute('aria-label', `${name} examples`);
    const viewport = el('div', 'carousel-viewport');
    const track = el('div', 'carousel-track');
    const slides = examples.map(card);
    track.append(...slides);
    viewport.append(track);
    const prev = el('button', 'carousel-nav previous', '‹');
    const next = el('button', 'carousel-nav next', '›');
    prev.type = next.type = 'button';
    prev.setAttribute('aria-label', `Previous ${name} example`);
    next.setAttribute('aria-label', `Next ${name} example`);
    const status = el('span', 'sr-only');
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    container.replaceChildren(prev, viewport, next, status);
    carousels[task] = { viewport, track, slides, prev, next, status };
    prev.addEventListener('click', () => setIndex(task, state.indices[task] - 1));
    next.addEventListener('click', () => setIndex(task, state.indices[task] + 1));
    container.onkeydown = event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      setIndex(task, state.indices[task] + (event.key === 'ArrowRight' ? 1 : -1), true);
    };
    let start = null;
    viewport.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') start = { x: event.clientX, y: event.clientY };
    });
    viewport.addEventListener('pointercancel', () => { start = null; });
    viewport.addEventListener('pointerup', event => {
      if (!start) return;
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      start = null;
      if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
      state.suppressClickUntil = performance.now() + 400;
      setIndex(task, state.indices[task] + (dx < 0 ? 1 : -1));
      event.preventDefault();
    });
    const observer = new ResizeObserver(() => setIndex(task, state.indices[task]));
    observer.observe(viewport);
    carousels[task].observer = observer;
    setIndex(task, state.indices[task]);
  }
  document.querySelectorAll('[data-dataset]').forEach(button => button.addEventListener('click', () => {
    state.dataset = button.dataset.dataset;
    state.indices.task1 = state.indices.task2 = 0;
    document.querySelectorAll('[data-dataset]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    ['task1', 'task2'].forEach(render);
  }));
  ['task1', 'task2'].forEach(render);
  data.categories.forEach(category => {
    const item = el('span'), dot = el('i', 'category-dot');
    dot.style.backgroundColor = category.color;
    item.append(dot, document.createTextNode(category.name));
    document.querySelector('#category-legend').append(item);
  });
  const overviewButton = document.querySelector('#overview-image');
  const overviewOutput = document.querySelector('#overview-output');
  document.querySelector('#overview-input').src = assetURL(data.overview.input);
  // Preload both saved outputs, so selecting a prompt does not show a stale mask.
  [data.overview.task1, data.overview.task2].forEach(path => { const image = new Image(); image.src = assetURL(path); });
  function setOverview(task) {
    state.overviewTask = task;
    overviewOutput.src = assetURL(data.overview[task]);
    overviewOutput.alt = `REEHAA ${task === 'task1' ? 'instance segmentation' : 'risk reasoning'} from the overview`;
    document.querySelector('#overview-prompt-text').textContent = data.overview.prompts[task];
    document.querySelectorAll('[data-overview-task]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.overviewTask === task)));
  }
  document.querySelectorAll('[data-overview-task]').forEach(button => button.addEventListener('click', () => setOverview(button.dataset.overviewTask)));
  overviewButton.addEventListener('click', () => {
    const show = overviewButton.getAttribute('aria-pressed') !== 'true';
    overviewButton.classList.toggle('revealed', show);
    overviewButton.setAttribute('aria-pressed', String(show));
  });
  setOverview('task1');
  document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => {
    opener = button;
    document.querySelector('#figure-viewer-title').textContent = button.dataset.caption;
    document.querySelector('#figure-large').src = button.dataset.figure;
    document.querySelector('#figure-large').alt = button.dataset.caption;
    figureViewer.showModal();
  }));
  [inspector, figureViewer].forEach(dialog => {
    dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus(); });
  });
})();
