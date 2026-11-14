function e(e, t) {
	let n = e % 100, r = e % 10;
	return e === 1 ? `${e} ${t.searchOne}` : r >= 2 && r <= 4 && (n < 12 || n > 14) ? `${e} ${t.searchFew}` : `${e} ${t.searchMany}`;
}
function t(e) {
	if (!e || typeof e.closest != `function`) return !1;
	let t = e;
	return t.isContentEditable ? !0 : !!t.closest(`input, textarea, select, [contenteditable=""], [contenteditable="true"]`);
}
function n(e) {
	if (e.isComposing || e.altKey) return !1;
	let n = e.key.toLowerCase();
	return n === `k` && (e.ctrlKey || e.metaKey) && !e.shiftKey ? !0 : n === `/` && !e.ctrlKey && !e.metaKey && !t(e.target);
}
function r(e, t = document) {
	let n = new DOMParser().parseFromString(`<body>${e}</body>`, `text/html`), r = t.createDocumentFragment();
	for (let e of n.body.childNodes) if (e.nodeType === Node.ELEMENT_NODE && e.tagName === `MARK`) {
		let n = t.createElement(`mark`);
		n.textContent = e.textContent, r.append(n);
	} else r.append(t.createTextNode(e.textContent ?? ``));
	return r;
}
async function i(e) {
	let t = await import(e);
	return await t.options?.({ excerptLength: 24 }), await t.init?.(), t;
}
async function a(e, t, n = 8) {
	let r = e.debouncedSearch ? await e.debouncedSearch(t, {}, 160) : await e.search(t);
	return r ? (await Promise.all(r.results.slice(0, n).map((e) => e.data()))).map((e) => ({
		url: e.url,
		title: e.meta?.title ?? e.url,
		excerpt: e.excerpt
	})) : null;
}
function o(t, { load: o = i, doc: s = document } = {}) {
	if (`skReady` in t.dataset) return;
	t.dataset.skReady = ``;
	let c = t.querySelector(`[data-sk-search-input]`), l = t.querySelector(`[data-sk-search-results]`), u = t.querySelector(`[data-sk-search-status]`);
	if (!c || !l || !u) return;
	let d = t.dataset, f = t.dataset.pagefind ?? `/pagefind/pagefind.js`, p = null, m = null, h = 0, g = () => [...l.querySelectorAll(`a`)], _ = (t) => {
		l.replaceChildren(...t.map((e) => {
			let t = s.createElement(`li`), n = s.createElement(`a`);
			n.href = e.url, n.className = `sk-search__hit`;
			let i = s.createElement(`span`);
			i.className = `sk-search__title`, i.textContent = e.title;
			let a = s.createElement(`span`);
			return a.className = `sk-search__excerpt`, a.append(r(e.excerpt, s)), n.append(i, a), t.append(n), t;
		})), u.textContent = t.length ? e(t.length, d) : d.searchEmpty;
	}, v = async () => {
		let e = c.value.trim(), t = ++h;
		if (!e) l.replaceChildren(), u.textContent = ``;
		else {
			u.textContent = d.searchLoading;
			try {
				p ??= o(f);
				let n = await a(await p, e);
				n && t === h && _(n);
			} catch {
				p = null, t === h && (u.textContent = d.searchOffline);
			}
		}
	}, y = () => {
		t.open || (m = s.activeElement, t.showModal(), c.focus(), c.select());
	};
	c.addEventListener(`input`, () => void v()), t.addEventListener(`keydown`, (e) => {
		if (e.key === `Escape`) {
			e.preventDefault(), t.close();
			return;
		}
		let n = g(), r = n.indexOf(s.activeElement);
		e.key === `ArrowDown` && n.length ? (e.preventDefault(), n[Math.min(r + 1, n.length - 1)]?.focus()) : e.key === `ArrowUp` && r !== -1 && (e.preventDefault(), r === 0 ? c.focus() : n[r - 1]?.focus());
	}), t.addEventListener(`close`, () => {
		m instanceof HTMLElement && m !== s.body ? m.focus() : s.activeElement instanceof HTMLElement && t.contains(s.activeElement) && s.activeElement.blur();
	}), t.addEventListener(`click`, (e) => {
		e.target === t && t.close();
	}), t.querySelector(`[data-sk-search-close]`)?.addEventListener(`click`, () => t.close());
	for (let e of s.querySelectorAll(`[data-sk-search-open]`)) e.addEventListener(`click`, y);
	s.addEventListener(`keydown`, (e) => {
		n(e) && (e.preventDefault(), t.open ? c.focus() : y());
	});
}
var s = document.querySelector(`[data-sk-search]`);
s && o(s);
