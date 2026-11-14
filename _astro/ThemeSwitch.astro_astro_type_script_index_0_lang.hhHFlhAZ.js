import { a as e, i as t, n, r, t as i } from "./cookie.Ltd5ABer.js";
import { r as a } from "./motion.BJZ2ChkW.js";
var o = `sk-theme`, s = `sk-theme-change`, c = [
	`light`,
	`dark`,
	`contrast`,
	`system`
];
function l(e) {
	return typeof e == `string` && c.includes(e);
}
function u(e, t) {
	let i = n(e, o);
	if (l(i)) return i;
	let a = r(t, o);
	return l(a) ? a : `system`;
}
function d(e, t) {
	t === `system` ? e.removeAttribute(`data-theme`) : e.setAttribute(`data-theme`, t), e.dataset.themeChoice = t;
}
function f(n, r = document, a = i(r.defaultView ?? void 0)) {
	t(r, o, n), e(a, o, n);
}
function p(e) {
	let t = e.defaultView?.getComputedStyle(e.documentElement).getPropertyValue(`background-color`);
	if (t) for (let n of e.querySelectorAll(`meta[name="theme-color"]`)) n.content = t;
}
function m(e, t) {
	for (let n of e.querySelectorAll(`[data-sk-theme-switch] input[type="radio"]`)) n.checked = n.value === t;
}
function h(e, t) {
	d(e.documentElement, t), f(t, e), m(e, t), p(e), e.dispatchEvent(new CustomEvent(s, { detail: t }));
}
function g(e, t, n) {
	let r = e.defaultView;
	if (!r || !n || typeof e.startViewTransition != `function` || !a(r)) {
		h(e, t);
		return;
	}
	let i = n.getBoundingClientRect(), o = i.left + i.width / 2, s = i.top + i.height / 2, c = Math.hypot(Math.max(o, r.innerWidth - o), Math.max(s, r.innerHeight - s));
	e.documentElement.classList.add(`sk-theme-switching`);
	let l = e.startViewTransition(() => h(e, t));
	l.ready.then(() => e.documentElement.animate({ clipPath: [`circle(0px at ${o}px ${s}px)`, `circle(${c}px at ${o}px ${s}px)`] }, {
		duration: 480,
		easing: `cubic-bezier(0.2, 0, 0, 1)`,
		pseudoElement: `::view-transition-new(root)`
	})).catch(() => void 0), l.finished.finally(() => e.documentElement.classList.remove(`sk-theme-switching`)).catch(() => void 0);
}
function _(e = document) {
	let t = u(e.cookie, i(e.defaultView ?? void 0));
	d(e.documentElement, t), m(e, t), p(e);
	for (let t of e.querySelectorAll(`[data-sk-theme-switch]:not([data-sk-ready])`)) t.dataset.skReady = ``, t.addEventListener(`change`, (t) => {
		let n = t.target;
		n instanceof HTMLInputElement && l(n.value) && g(e, n.value, n.closest(`label`));
	});
	if (`skThemeBound` in e.documentElement.dataset) return;
	e.documentElement.dataset.skThemeBound = ``;
	let n = () => {
		let t = u(e.cookie, i(e.defaultView ?? void 0));
		t !== e.documentElement.dataset.themeChoice && (d(e.documentElement, t), m(e, t), p(e));
	};
	e.defaultView?.addEventListener(`pageshow`, n), e.addEventListener(`visibilitychange`, () => {
		e.visibilityState === `visible` && n();
	});
}
_();
