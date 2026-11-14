function e(e, t = document) {
	if (`skReady` in e.dataset) return;
	e.dataset.skReady = ``;
	let n = e.querySelector(`[data-sk-menu-toggle]`), r = n ? t.getElementById(n.getAttribute(`aria-controls`) ?? ``) : null, i = t.defaultView, a = i?.matchMedia?.(`(min-width: 64rem)`), o = (t, i = !1) => {
		if (!n || !r) return;
		n.setAttribute(`aria-expanded`, String(t));
		let a = t ? n.dataset.close : n.dataset.open;
		a && n.setAttribute(`aria-label`, a), e.toggleAttribute(`data-open`, t), i && n.focus();
	}, s = (t) => {
		for (let n of e.querySelectorAll(`details[open]`)) n !== t && !n.contains(t ?? null) && (n.open = !1);
	};
	n?.addEventListener(`click`, () => o(n.getAttribute(`aria-expanded`) !== `true`)), a?.addEventListener(`change`, (e) => {
		e.matches && o(!1);
	}), e.addEventListener(`toggle`, (e) => {
		let t = e.target;
		t instanceof HTMLDetailsElement && t.open && s(t);
	}, !0), t.addEventListener(`keydown`, (t) => {
		if (t.key !== `Escape`) return;
		let r = [...e.querySelectorAll(`details[open]`)].pop();
		r ? (r.open = !1, r.querySelector(`summary`)?.focus()) : n?.getAttribute(`aria-expanded`) === `true` && o(!1, !0);
	}), t.addEventListener(`click`, (t) => {
		let n = t.target;
		if (n instanceof Node) for (let t of e.querySelectorAll(`details[open]`)) t.contains(n) || (t.open = !1);
	});
	let c = () => e.toggleAttribute(`data-scrolled`, (i?.scrollY ?? 0) > 8);
	i?.addEventListener(`scroll`, c, { passive: !0 }), c();
}
var t = document.querySelector(`[data-sk-header]`);
t && e(t);
