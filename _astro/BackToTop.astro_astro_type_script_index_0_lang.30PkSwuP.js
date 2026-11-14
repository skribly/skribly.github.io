import { r as e } from "./motion.BJZ2ChkW.js";
function t({ y: e, previous: t, height: n, visible: r }) {
	if (e <= n * 1.5) return !1;
	let i = e - t;
	return Math.abs(i) < 8 ? r : i < 0;
}
function n(e) {
	let t = e.querySelector(`.sk-skip-link`)?.getAttribute(`href`) ?? `#content`, n = t.startsWith(`#`) ? decodeURIComponent(t.slice(1)) : `content`;
	return e.getElementById(n) ?? e.getElementById(`content`);
}
function r(r, i = window) {
	if (`skReady` in r.dataset) return;
	r.dataset.skReady = ``;
	let a = i.document, o = i.scrollY, s = 0, c = () => {
		s = 0;
		let e = i.scrollY, n = t({
			y: e,
			previous: o,
			height: i.innerHeight,
			visible: `visible` in r.dataset
		});
		(Math.abs(e - o) >= 8 || e <= i.innerHeight * 1.5) && (o = e), r.toggleAttribute(`data-visible`, n);
	};
	i.addEventListener(`scroll`, () => {
		s === 0 && (s = i.requestAnimationFrame(c));
	}, { passive: !0 }), r.addEventListener(`click`, () => {
		i.scrollTo({
			top: 0,
			behavior: e(i) ? `smooth` : `instant`
		});
		let t = n(a);
		t && (t.hasAttribute(`tabindex`) || t.setAttribute(`tabindex`, `-1`), t.focus({ preventScroll: !0 }));
	}), c();
}
var i = document.querySelector(`[data-sk-back-to-top]`);
i && r(i);
