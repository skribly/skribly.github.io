function e(e = window) {
	return !e.document.documentElement.classList.contains(`a11y-reduce-motion`) && !e.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;
}
var t = `sk-motion-change`;
function n(e, t, n) {
	if (!n) return;
	let r = !t.paused, i = r ? n.dataset.pause : n.dataset.play, a = n.querySelector(`[data-sk-preview-label]`);
	a && i && (a.textContent = i), e.dataset.state = r ? `playing` : `paused`;
}
function r(e) {
	e.preload = `auto`;
	let t = e.play();
	t && t.catch(() => void 0);
}
function i(i = document, a = window) {
	let o = i.querySelectorAll(`[data-sk-preview]:not([data-sk-ready])`);
	for (let i of o) {
		let o = i.querySelector(`video`);
		if (!o) continue;
		i.dataset.skReady = ``;
		let s = i.querySelector(`[data-sk-preview-toggle]`), c = {
			paused: !1,
			chosen: !1,
			visible: !1
		}, l = () => {
			c.visible && !c.paused && (c.chosen || e(a)) ? r(o) : o.pause();
		};
		o.addEventListener(`play`, () => n(i, o, s)), o.addEventListener(`pause`, () => n(i, o, s)), s?.addEventListener(`click`, () => {
			o.paused ? (c.paused = !1, c.chosen = !0, r(o)) : (c.paused = !0, c.chosen = !1, o.pause());
		}), a.addEventListener(t, () => {
			c.chosen = !1, l();
		}), n(i, o, s), typeof IntersectionObserver > `u` ? (c.visible = !0, l()) : new IntersectionObserver((e) => {
			for (let t of e) c.visible = t.isIntersecting;
			l();
		}, { threshold: .35 }).observe(o);
	}
}
export { i as n, e as r, t };
