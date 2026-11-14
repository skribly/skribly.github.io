import { r as e, t } from "./motion.BJZ2ChkW.js";
function n(n, r = window) {
	if (`skReady` in n.dataset) return;
	n.dataset.skReady = ``;
	let i = Math.min(n.querySelectorAll(`[data-sk-scene-step]`).length, 6);
	if (!i || !e(r)) return;
	let a = r.IntersectionObserver, o, s = a ? new a((e) => {
		e.some((e) => e.isIntersecting) && (s?.disconnect(), l(1));
	}) : void 0, c = () => {
		clearTimeout(o), s?.disconnect(), delete n.dataset.skAt;
	}, l = (e) => {
		e > i ? c() : (n.dataset.skAt = String(e), o = setTimeout(() => l(e + 1), 800));
	};
	n.addEventListener(`pointerenter`, c, { once: !0 }), n.addEventListener(`focusin`, c, { once: !0 }), r.addEventListener(t, () => {
		e(r) || c();
	}), s ? s.observe(n) : l(1);
}
for (let e of document.querySelectorAll(`[data-sk-scene]`)) n(e);
