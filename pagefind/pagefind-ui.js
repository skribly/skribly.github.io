(() => {
	var qs = Object.defineProperty;
	var x = (l, e) => {
		for (var t in e) qs(l, t, {
			get: e[t],
			enumerable: !0
		});
	};
	function R() {}
	function Ut(l) {
		return l();
	}
	function Ct() {
		return Object.create(null);
	}
	function v(l) {
		l.forEach(Ut);
	}
	function It(l) {
		return typeof l == "function";
	}
	function j(l, e) {
		return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
	}
	var ut;
	function oe(l, e) {
		return l === e ? !0 : (ut || (ut = document.createElement("a")), ut.href = e, l === ut.href);
	}
	function Tl(l) {
		return Object.keys(l).length === 0;
	}
	var xt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
	var dt = class l {
		_listeners = "WeakMap" in xt ? new WeakMap() : void 0;
		_observer = void 0;
		options;
		constructor(e) {
			this.options = e;
		}
		observe(e, t) {
			return this._listeners.set(e, t), this._getObserver().observe(e, this.options), () => {
				this._listeners.delete(e), this._observer.unobserve(e);
			};
		}
		_getObserver() {
			return this._observer ?? (this._observer = new ResizeObserver((e) => {
				for (let t of e) l.entries.set(t.target, t), this._listeners.get(t.target)?.(t);
			}));
		}
	};
	dt.entries = "WeakMap" in xt ? new WeakMap() : void 0;
	var vl = !1;
	function Hl() {
		vl = !0;
	}
	function Ml() {
		vl = !1;
	}
	function b(l, e) {
		l.appendChild(e);
	}
	function h(l, e, t) {
		l.insertBefore(e, t || null);
	}
	function B(l) {
		l.parentNode && l.parentNode.removeChild(l);
	}
	function $(l, e) {
		for (let t = 0; t < l.length; t += 1) l[t] && l[t].d(e);
	}
	function p(l) {
		return document.createElement(l);
	}
	function ta(l) {
		return document.createElementNS("http://www.w3.org/2000/svg", l);
	}
	function G(l) {
		return document.createTextNode(l);
	}
	function Z() {
		return G(" ");
	}
	function ee() {
		return G("");
	}
	function z(l, e, t, s) {
		return l.addEventListener(e, t, s), () => l.removeEventListener(e, t, s);
	}
	function _(l, e, t) {
		t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
	}
	function Yl(l) {
		return Array.from(l.childNodes);
	}
	function W(l, e) {
		e = "" + e, l.data !== e && (l.data = e);
	}
	function ge(l, e) {
		l.value = e ?? "";
	}
	function J(l, e, t) {
		l.classList.toggle(e, !!t);
	}
	var At = class {
		is_svg = !1;
		e = void 0;
		n = void 0;
		t = void 0;
		a = void 0;
		constructor(e = !1) {
			this.is_svg = e, this.e = this.n = null;
		}
		c(e) {
			this.h(e);
		}
		m(e, t, s = null) {
			this.e || (this.is_svg ? this.e = ta(t.nodeName) : this.e = p(t.nodeType === 11 ? "TEMPLATE" : t.nodeName), this.t = t.tagName !== "TEMPLATE" ? t : t.content, this.c(e)), this.i(s);
		}
		h(e) {
			this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
		}
		i(e) {
			for (let t = 0; t < this.n.length; t += 1) h(this.t, this.n[t], e);
		}
		p(e) {
			this.d(), this.h(e), this.i(this.a);
		}
		d() {
			this.n.forEach(B);
		}
	};
	function wl(l) {
		let e = {};
		return l.childNodes.forEach((t) => {
			e[t.slot || "default"] = !0;
		}), e;
	}
	var te;
	function K(l) {
		te = l;
	}
	function yt() {
		if (!te) throw new Error("Function called outside component initialization");
		return te;
	}
	function Zt(l) {
		yt().$$.on_mount.push(l);
	}
	function Gt(l) {
		yt().$$.on_destroy.push(l);
	}
	var le = [];
	var Ce = [], ue = [], Et = [], na = Promise.resolve(), Xt = !1;
	function Jl() {
		Xt || (Xt = !0, na.then(_t));
	}
	function Ae(l) {
		ue.push(l);
	}
	function Ol(l) {
		Et.push(l);
	}
	var Nt = new Set(), ce = 0;
	function _t() {
		if (ce !== 0) return;
		let l = te;
		do {
			try {
				for (; ce < le.length;) {
					let e = le[ce];
					ce++, K(e), oa(e.$$);
				}
			} catch (e) {
				throw le.length = 0, ce = 0, e;
			}
			for (K(null), le.length = 0, ce = 0; Ce.length;) Ce.pop()();
			for (let e = 0; e < ue.length; e += 1) {
				let t = ue[e];
				Nt.has(t) || (Nt.add(t), t());
			}
			ue.length = 0;
		} while (le.length);
		for (; Et.length;) Et.pop()();
		Xt = !1, Nt.clear(), K(l);
	}
	function oa(l) {
		if (l.fragment !== null) {
			l.update(), v(l.before_update);
			let e = l.dirty;
			l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(Ae);
		}
	}
	function jl(l) {
		let e = [], t = [];
		ue.forEach((s) => l.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), ue = e;
	}
	var Qt = new Set(), se;
	function ae() {
		se = {
			r: 0,
			c: [],
			p: se
		};
	}
	function re() {
		se.r || v(se.c), se = se.p;
	}
	function k(l, e) {
		l && l.i && (Qt.delete(l), l.i(e));
	}
	function D(l, e, t, s) {
		if (l && l.o) {
			if (Qt.has(l)) return;
			Qt.add(l), se.c.push(() => {
				Qt.delete(l), s && (t && l.d(1), s());
			}), l.o(e);
		} else s && s();
	}
	function V(l) {
		return l?.length !== void 0 ? l : Array.from(l);
	}
	function Kl(l, e) {
		D(l, 1, 1, () => {
			e.delete(l.key);
		});
	}
	function Pl(l, e, t, s, a, i, r, o, n, g, c, A) {
		let C = l.length, d = i.length, u = C, I = {};
		for (; u--;) I[l[u].key] = u;
		let m = [], f = new Map(), F = new Map(), U = [];
		for (u = d; u--;) {
			let N = A(a, i, u), S = t(N), X = r.get(S);
			X ? s && U.push(() => X.p(N, e)) : (X = g(S, N), X.c()), f.set(S, m[u] = X), S in I && F.set(S, Math.abs(u - I[S]));
		}
		let y = new Set(), q = new Set();
		function O(N) {
			k(N, 1), N.m(o, c), r.set(N.key, N), c = N.first, d--;
		}
		for (; C && d;) {
			let N = m[d - 1], S = l[C - 1], X = N.key, T = S.key;
			N === S ? (c = N.first, C--, d--) : f.has(T) ? !r.has(X) || y.has(X) ? O(N) : q.has(T) ? C-- : F.get(X) > F.get(T) ? (q.add(X), O(N)) : (y.add(T), C--) : (n(S, r), C--);
		}
		for (; C--;) {
			let N = l[C];
			f.has(N.key) || n(N, r);
		}
		for (; d;) O(m[d - 1]);
		return v(U), m;
	}
	var ga = [
		"allowfullscreen",
		"allowpaymentrequest",
		"async",
		"autofocus",
		"autoplay",
		"checked",
		"controls",
		"default",
		"defer",
		"disabled",
		"formnovalidate",
		"hidden",
		"inert",
		"ismap",
		"loop",
		"multiple",
		"muted",
		"nomodule",
		"novalidate",
		"open",
		"playsinline",
		"readonly",
		"required",
		"reversed",
		"selected"
	], ca = new Set([...ga]);
	function ql(l, e, t) {
		let s = l.$$.props[e];
		s !== void 0 && (l.$$.bound[s] = t, t(l.$$.ctx[s]));
	}
	function mt(l) {
		l && l.c();
	}
	function _e(l, e, t) {
		let { fragment: s, after_update: a } = l.$$;
		s && s.m(e, t), Ae(() => {
			let i = l.$$.on_mount.map(Ut).filter(It);
			l.$$.on_destroy ? l.$$.on_destroy.push(...i) : v(i), l.$$.on_mount = [];
		}), a.forEach(Ae);
	}
	function Qe(l, e) {
		let t = l.$$;
		t.fragment !== null && (jl(t.after_update), v(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
	}
	function Ca(l, e) {
		l.$$.dirty[0] === -1 && (le.push(l), Jl(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
	}
	function P(l, e, t, s, a, i, r = null, o = [-1]) {
		let n = te;
		K(l);
		let g = l.$$ = {
			fragment: null,
			ctx: [],
			props: i,
			update: R,
			not_equal: a,
			bound: Ct(),
			on_mount: [],
			on_destroy: [],
			on_disconnect: [],
			before_update: [],
			after_update: [],
			context: new Map(e.context || (n ? n.$$.context : [])),
			callbacks: Ct(),
			dirty: o,
			skip_bound: !1,
			root: e.target || n.$$.root
		};
		r && r(g.root);
		let c = !1;
		if (g.ctx = t ? t(l, e.props || {}, (A, C, ...d) => {
			let u = d.length ? d[0] : C;
			return g.ctx && a(g.ctx[A], g.ctx[A] = u) && (!g.skip_bound && g.bound[A] && g.bound[A](u), c && Ca(l, A)), C;
		}) : [], g.update(), c = !0, v(g.before_update), g.fragment = s ? s(g.ctx) : !1, e.target) {
			if (e.hydrate) {
				Hl();
				let A = Yl(e.target);
				g.fragment && g.fragment.l(A), A.forEach(B);
			} else g.fragment && g.fragment.c();
			e.intro && k(l.$$.fragment), _e(l, e.target, e.anchor), Ml(), _t();
		}
		K(n);
	}
	var Ia;
	typeof HTMLElement == "function" && (Ia = class extends HTMLElement {
		$$ctor;
		$$s;
		$$c;
		$$cn = !1;
		$$d = {};
		$$r = !1;
		$$p_d = {};
		$$l = {};
		$$l_u = new Map();
		constructor(l, e, t) {
			super(), this.$$ctor = l, this.$$s = e, t && this.attachShadow({ mode: "open" });
		}
		addEventListener(l, e, t) {
			if (this.$$l[l] = this.$$l[l] || [], this.$$l[l].push(e), this.$$c) {
				let s = this.$$c.$on(l, e);
				this.$$l_u.set(e, s);
			}
			super.addEventListener(l, e, t);
		}
		removeEventListener(l, e, t) {
			if (super.removeEventListener(l, e, t), this.$$c) {
				let s = this.$$l_u.get(e);
				s && (s(), this.$$l_u.delete(e));
			}
			if (this.$$l[l]) {
				let s = this.$$l[l].indexOf(e);
				s >= 0 && this.$$l[l].splice(s, 1);
			}
		}
		async connectedCallback() {
			if (this.$$cn = !0, !this.$$c) {
				let l = function(a) {
					return () => {
						let i;
						return {
							c: function() {
								i = p("slot"), a !== "default" && _(i, "name", a);
							},
							m: function(n, g) {
								h(n, i, g);
							},
							d: function(n) {
								n && B(i);
							}
						};
					};
				};
				if (await Promise.resolve(), !this.$$cn || this.$$c) return;
				let e = {}, t = wl(this);
				for (let a of this.$$s) a in t && (e[a] = [l(a)]);
				for (let a of this.attributes) {
					let i = this.$$g_p(a.name);
					i in this.$$d || (this.$$d[i] = kt(i, a.value, this.$$p_d, "toProp"));
				}
				for (let a in this.$$p_d) !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
				this.$$c = new this.$$ctor({
					target: this.shadowRoot || this,
					props: {
						...this.$$d,
						$$slots: e,
						$$scope: { ctx: [] }
					}
				});
				let s = () => {
					this.$$r = !0;
					for (let a in this.$$p_d) if (this.$$d[a] = this.$$c.$$.ctx[this.$$c.$$.props[a]], this.$$p_d[a].reflect) {
						let i = kt(a, this.$$d[a], this.$$p_d, "toAttribute");
						i == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, i);
					}
					this.$$r = !1;
				};
				this.$$c.$$.after_update.push(s), s();
				for (let a in this.$$l) for (let i of this.$$l[a]) {
					let r = this.$$c.$on(a, i);
					this.$$l_u.set(i, r);
				}
				this.$$l = {};
			}
		}
		attributeChangedCallback(l, e, t) {
			this.$$r || (l = this.$$g_p(l), this.$$d[l] = kt(l, t, this.$$p_d, "toProp"), this.$$c?.$set({ [l]: this.$$d[l] }));
		}
		disconnectedCallback() {
			this.$$cn = !1, Promise.resolve().then(() => {
				!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
			});
		}
		$$g_p(l) {
			return Object.keys(this.$$p_d).find((e) => this.$$p_d[e].attribute === l || !this.$$p_d[e].attribute && e.toLowerCase() === l) || l;
		}
	});
	function kt(l, e, t, s) {
		let a = t[l]?.type;
		if (e = a === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[l]) return e;
		if (s === "toAttribute") switch (a) {
			case "Object":
			case "Array": return e == null ? null : JSON.stringify(e);
			case "Boolean": return e ? "" : null;
			case "Number": return e ?? null;
			default: return e;
		}
		else switch (a) {
			case "Object":
			case "Array": return e && JSON.parse(e);
			case "Boolean": return e;
			case "Number": return e != null ? +e : e;
			default: return e;
		}
	}
	var Y = class {
		$$ = void 0;
		$$set = void 0;
		$destroy() {
			Qe(this, 1), this.$destroy = R;
		}
		$on(e, t) {
			if (!It(t)) return R;
			let s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
			return s.push(t), () => {
				let a = s.indexOf(t);
				a !== -1 && s.splice(a, 1);
			};
		}
		$set(e) {
			this.$$set && !Tl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
		}
	};
	typeof window < "u" && (window.__svelte || (window.__svelte = { v: new Set() })).v.add("4");
	function H(l) {
		let e = typeof l == "string" ? l.charCodeAt(0) : l;
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function ie(l) {
		let e = typeof l == "string" ? l.charCodeAt(0) : l;
		return e >= 48 && e <= 57;
	}
	function M(l) {
		return H(l) || ie(l);
	}
	var $l = [
		"art-lojban",
		"cel-gaulish",
		"no-bok",
		"no-nyn",
		"zh-guoyu",
		"zh-hakka",
		"zh-min",
		"zh-min-nan",
		"zh-xiang"
	];
	var Lt = {
		"en-gb-oed": "en-GB-oxendict",
		"i-ami": "ami",
		"i-bnn": "bnn",
		"i-default": null,
		"i-enochian": null,
		"i-hak": "hak",
		"i-klingon": "tlh",
		"i-lux": "lb",
		"i-mingo": null,
		"i-navajo": "nv",
		"i-pwn": "pwn",
		"i-tao": "tao",
		"i-tay": "tay",
		"i-tsu": "tsu",
		"sgn-be-fr": "sfb",
		"sgn-be-nl": "vgt",
		"sgn-ch-de": "sgg",
		"art-lojban": "jbo",
		"cel-gaulish": null,
		"no-bok": "nb",
		"no-nyn": "nn",
		"zh-guoyu": "cmn",
		"zh-hakka": "hak",
		"zh-min": null,
		"zh-min-nan": "nan",
		"zh-xiang": "hsn"
	};
	var Aa = {}.hasOwnProperty;
	function bt(l, e) {
		if (l == null) throw new Error("Expected string, got `" + l + "`");
		let t = e || {}, s = es(), a = String(l), i = a.toLowerCase();
		if (Aa.call(Lt, i)) {
			let n = Lt[i];
			return (t.normalize === null || t.normalize === void 0 || t.normalize) && typeof n == "string" ? bt(n) : (s[$l.includes(i) ? "regular" : "irregular"] = a, s);
		}
		let r = 0;
		for (; H(i.charCodeAt(r)) && r < 9;) r++;
		if (r > 1 && r < 9) {
			if (s.language = a.slice(0, r), r < 4) {
				let n = 0;
				for (; i.charCodeAt(r) === 45 && H(i.charCodeAt(r + 1)) && H(i.charCodeAt(r + 2)) && H(i.charCodeAt(r + 3)) && !M(i.charCodeAt(r + 4));) {
					if (n > 2) return o(r, 3, "Too many extended language subtags, expected at most 3 subtags");
					s.extendedLanguageSubtags.push(a.slice(r + 1, r + 4)), r += 4, n++;
				}
			}
			for (i.charCodeAt(r) === 45 && H(i.charCodeAt(r + 1)) && H(i.charCodeAt(r + 2)) && H(i.charCodeAt(r + 3)) && H(i.charCodeAt(r + 4)) && !M(i.charCodeAt(r + 5)) && (s.script = a.slice(r + 1, r + 5), r += 5), i.charCodeAt(r) === 45 && (H(i.charCodeAt(r + 1)) && H(i.charCodeAt(r + 2)) && !M(i.charCodeAt(r + 3)) ? (s.region = a.slice(r + 1, r + 3), r += 3) : ie(i.charCodeAt(r + 1)) && ie(i.charCodeAt(r + 2)) && ie(i.charCodeAt(r + 3)) && !M(i.charCodeAt(r + 4)) && (s.region = a.slice(r + 1, r + 4), r += 4)); i.charCodeAt(r) === 45;) {
				let n = r + 1, g = n;
				for (; M(i.charCodeAt(g));) {
					if (g - n > 7) return o(g, 1, "Too long variant, expected at most 8 characters");
					g++;
				}
				if (g - n > 4 || g - n > 3 && ie(i.charCodeAt(n))) s.variants.push(a.slice(n, g)), r = g;
				else break;
			}
			for (; i.charCodeAt(r) === 45 && !(i.charCodeAt(r + 1) === 120 || !M(i.charCodeAt(r + 1)) || i.charCodeAt(r + 2) !== 45 || !M(i.charCodeAt(r + 3)));) {
				let n = r + 2, g = 0;
				for (; i.charCodeAt(n) === 45 && M(i.charCodeAt(n + 1)) && M(i.charCodeAt(n + 2));) {
					let c = n + 1;
					for (n = c + 2, g++; M(i.charCodeAt(n));) {
						if (n - c > 7) return o(n, 2, "Too long extension, expected at most 8 characters");
						n++;
					}
				}
				if (!g) return o(n, 4, "Empty extension, extensions must have at least 2 characters of content");
				s.extensions.push({
					extensions: a.slice(r + 3, n).split("-"),
					singleton: a.charAt(r + 1)
				}), r = n;
			}
		} else r = 0;
		if (r === 0 && i.charCodeAt(r) === 120 || i.charCodeAt(r) === 45 && i.charCodeAt(r + 1) === 120) {
			r = r ? r + 2 : 1;
			let n = r;
			for (; i.charCodeAt(n) === 45 && M(i.charCodeAt(n + 1));) {
				let g = r + 1;
				for (n = g; M(i.charCodeAt(n));) {
					if (n - g > 7) return o(n, 5, "Too long private-use area, expected at most 8 characters");
					n++;
				}
				s.privateuse.push(a.slice(r + 1, n)), r = n;
			}
			if (s.privateuse.length === 0) return o(r, 7, "Empty private-use area, expected at least 1 subtag");
		}
		if (r !== a.length) return o(r, 6, "Found superfluous content after tag");
		return s;
		function o(n, g, c) {
			return t.warning && t.warning(c, g, n), t.forgiving ? s : es();
		}
	}
	function es() {
		return {
			extendedLanguageSubtags: [],
			extensions: [],
			irregular: null,
			language: null,
			privateuse: [],
			region: null,
			regular: null,
			script: null,
			variants: []
		};
	}
	function ts(l, e, t) {
		let s = l.slice();
		return s[9] = e[t][0], s[10] = e[t][1], s;
	}
	function _a(l) {
		let e, t, s, a, i, r = l[0] && ls(l);
		return {
			c() {
				r && r.c(), e = Z(), t = p("div"), s = p("p"), s.textContent = `${l[3](30)}`, a = Z(), i = p("p"), i.textContent = `${l[3](40)}`, _(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30"), _(i, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30"), _(t, "class", "pagefind-ui__result-inner svelte-j9e30");
			},
			m(o, n) {
				r && r.m(o, n), h(o, e, n), h(o, t, n), b(t, s), b(t, a), b(t, i);
			},
			p(o, n) {
				o[0] ? r || (r = ls(o), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null);
			},
			d(o) {
				o && (B(e), B(t)), r && r.d(o);
			}
		};
	}
	function Qa(l) {
		let e, t, s, a, i = l[1].meta?.title + "", r, o, n, g, c = l[1].excerpt + "", A, C = l[0] && ss(l), d = l[2].length && rs(l);
		return {
			c() {
				C && C.c(), e = Z(), t = p("div"), s = p("p"), a = p("a"), r = G(i), n = Z(), g = p("p"), A = Z(), d && d.c(), _(a, "class", "pagefind-ui__result-link svelte-j9e30"), _(a, "href", o = l[1].meta?.url || l[1].url), _(s, "class", "pagefind-ui__result-title svelte-j9e30"), _(g, "class", "pagefind-ui__result-excerpt svelte-j9e30"), _(t, "class", "pagefind-ui__result-inner svelte-j9e30");
			},
			m(u, I) {
				C && C.m(u, I), h(u, e, I), h(u, t, I), b(t, s), b(s, a), b(a, r), b(t, n), b(t, g), g.innerHTML = c, b(t, A), d && d.m(t, null);
			},
			p(u, I) {
				u[0] ? C ? C.p(u, I) : (C = ss(u), C.c(), C.m(e.parentNode, e)) : C && (C.d(1), C = null), I & 2 && i !== (i = u[1].meta?.title + "") && W(r, i), I & 2 && o !== (o = u[1].meta?.url || u[1].url) && _(a, "href", o), I & 2 && c !== (c = u[1].excerpt + "") && (g.innerHTML = c), u[2].length ? d ? d.p(u, I) : (d = rs(u), d.c(), d.m(t, null)) : d && (d.d(1), d = null);
			},
			d(u) {
				u && (B(e), B(t)), C && C.d(u), d && d.d();
			}
		};
	}
	function ls(l) {
		let e;
		return {
			c() {
				e = p("div"), _(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30");
			},
			m(t, s) {
				h(t, e, s);
			},
			d(t) {
				t && B(e);
			}
		};
	}
	function ss(l) {
		let e, t = l[1].meta.image && as(l);
		return {
			c() {
				e = p("div"), t && t.c(), _(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
			},
			m(s, a) {
				h(s, e, a), t && t.m(e, null);
			},
			p(s, a) {
				s[1].meta.image ? t ? t.p(s, a) : (t = as(s), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
			},
			d(s) {
				s && B(e), t && t.d();
			}
		};
	}
	function as(l) {
		let e, t, s;
		return {
			c() {
				e = p("img"), _(e, "class", "pagefind-ui__result-image svelte-j9e30"), oe(e.src, t = l[1].meta?.image) || _(e, "src", t), _(e, "alt", s = l[1].meta?.image_alt || l[1].meta?.title);
			},
			m(a, i) {
				h(a, e, i);
			},
			p(a, i) {
				i & 2 && !oe(e.src, t = a[1].meta?.image) && _(e, "src", t), i & 2 && s !== (s = a[1].meta?.image_alt || a[1].meta?.title) && _(e, "alt", s);
			},
			d(a) {
				a && B(e);
			}
		};
	}
	function rs(l) {
		let e, t = V(l[2]), s = [];
		for (let a = 0; a < t.length; a += 1) s[a] = is(ts(l, t, a));
		return {
			c() {
				e = p("ul");
				for (let a = 0; a < s.length; a += 1) s[a].c();
				_(e, "class", "pagefind-ui__result-tags svelte-j9e30");
			},
			m(a, i) {
				h(a, e, i);
				for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
			},
			p(a, i) {
				if (i & 4) {
					t = V(a[2]);
					let r;
					for (r = 0; r < t.length; r += 1) {
						let o = ts(a, t, r);
						s[r] ? s[r].p(o, i) : (s[r] = is(o), s[r].c(), s[r].m(e, null));
					}
					for (; r < s.length; r += 1) s[r].d(1);
					s.length = t.length;
				}
			},
			d(a) {
				a && B(e), $(s, a);
			}
		};
	}
	function is(l) {
		let e, t = l[9].replace(/^(\w)/, ns) + "", s, a, i = l[10] + "", r, o, n;
		return {
			c() {
				e = p("li"), s = G(t), a = G(": "), r = G(i), o = Z(), _(e, "class", "pagefind-ui__result-tag svelte-j9e30"), _(e, "data-pagefind-ui-meta", n = l[9]);
			},
			m(g, c) {
				h(g, e, c), b(e, s), b(e, a), b(e, r), b(e, o);
			},
			p(g, c) {
				c & 4 && t !== (t = g[9].replace(/^(\w)/, ns) + "") && W(s, t), c & 4 && i !== (i = g[10] + "") && W(r, i), c & 4 && n !== (n = g[9]) && _(e, "data-pagefind-ui-meta", n);
			},
			d(g) {
				g && B(e);
			}
		};
	}
	function ma(l) {
		let e;
		function t(i, r) {
			return i[1] ? Qa : _a;
		}
		let s = t(l, -1), a = s(l);
		return {
			c() {
				e = p("li"), a.c(), _(e, "class", "pagefind-ui__result svelte-j9e30");
			},
			m(i, r) {
				h(i, e, r), a.m(e, null);
			},
			p(i, [r]) {
				s === (s = t(i, r)) && a ? a.p(i, r) : (a.d(1), a = s(i), a && (a.c(), a.m(e, null)));
			},
			i: R,
			o: R,
			d(i) {
				i && B(e), a.d();
			}
		};
	}
	var ns = (l) => l.toLocaleUpperCase();
	function ba(l, e, t) {
		let { show_images: s = !0 } = e, { process_result: a = null } = e, { result: i = { data: async () => {} } } = e, r = [
			"title",
			"image",
			"image_alt",
			"url"
		], o, n = [], g = (C, d) => {
			if (!C || /^[a-z][a-z0-9+.-]*:/i.test(C) || /^\/\//.test(C) || C.startsWith("/")) return C;
			try {
				return new URL(C, new URL(d || "/", "https://p")).pathname;
			} catch {
				return C;
			}
		}, c = async (C) => {
			t(1, o = await C.data()), t(1, o = a?.(o) ?? o), o.meta?.image && t(1, o = {
				...o,
				meta: {
					...o.meta,
					image: g(o.meta.image, o.meta.url || o.url)
				}
			}), t(2, n = Object.entries(o.meta).filter(([d]) => !r.includes(d)));
		}, A = (C = 30) => ". ".repeat(Math.floor(10 + Math.random() * C));
		return l.$$set = (C) => {
			"show_images" in C && t(0, s = C.show_images), "process_result" in C && t(4, a = C.process_result), "result" in C && t(5, i = C.result);
		}, l.$$.update = () => {
			l.$$.dirty & 32 && c(i);
		}, [
			s,
			o,
			n,
			A,
			a,
			i
		];
	}
	var Rt = class extends Y {
		constructor(e) {
			super(), P(this, e, ba, ma, j, {
				show_images: 0,
				process_result: 4,
				result: 5
			});
		}
	}, os = Rt;
	function gs(l, e, t) {
		let s = l.slice();
		return s[11] = e[t][0], s[12] = e[t][1], s;
	}
	function cs(l, e, t) {
		let s = l.slice();
		return s[15] = e[t], s;
	}
	function fa(l) {
		let e, t, s, a, i, r = l[0] && us(l);
		return {
			c() {
				r && r.c(), e = Z(), t = p("div"), s = p("p"), s.textContent = `${l[5](30)}`, a = Z(), i = p("p"), i.textContent = `${l[5](40)}`, _(s, "class", "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf"), _(i, "class", "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf"), _(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
			},
			m(o, n) {
				r && r.m(o, n), h(o, e, n), h(o, t, n), b(t, s), b(t, a), b(t, i);
			},
			p(o, n) {
				o[0] ? r || (r = us(o), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null);
			},
			d(o) {
				o && (B(e), B(t)), r && r.d(o);
			}
		};
	}
	function pa(l) {
		let e, t, s, a, i = l[1].meta?.title + "", r, o, n, g, c, A = l[0] && Cs(l), C = l[4] && ds(l), d = V(l[3]), u = [];
		for (let m = 0; m < d.length; m += 1) u[m] = As(cs(l, d, m));
		let I = l[2].length && _s(l);
		return {
			c() {
				A && A.c(), e = Z(), t = p("div"), s = p("p"), a = p("a"), r = G(i), n = Z(), C && C.c(), g = Z();
				for (let m = 0; m < u.length; m += 1) u[m].c();
				c = Z(), I && I.c(), _(a, "class", "pagefind-ui__result-link svelte-4xnkmf"), _(a, "href", o = l[1].meta?.url || l[1].url), _(s, "class", "pagefind-ui__result-title svelte-4xnkmf"), _(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
			},
			m(m, f) {
				A && A.m(m, f), h(m, e, f), h(m, t, f), b(t, s), b(s, a), b(a, r), b(t, n), C && C.m(t, null), b(t, g);
				for (let F = 0; F < u.length; F += 1) u[F] && u[F].m(t, null);
				b(t, c), I && I.m(t, null);
			},
			p(m, f) {
				if (m[0] ? A ? A.p(m, f) : (A = Cs(m), A.c(), A.m(e.parentNode, e)) : A && (A.d(1), A = null), f & 2 && i !== (i = m[1].meta?.title + "") && W(r, i), f & 2 && o !== (o = m[1].meta?.url || m[1].url) && _(a, "href", o), m[4] ? C ? C.p(m, f) : (C = ds(m), C.c(), C.m(t, g)) : C && (C.d(1), C = null), f & 8) {
					d = V(m[3]);
					let F;
					for (F = 0; F < d.length; F += 1) {
						let U = cs(m, d, F);
						u[F] ? u[F].p(U, f) : (u[F] = As(U), u[F].c(), u[F].m(t, c));
					}
					for (; F < u.length; F += 1) u[F].d(1);
					u.length = d.length;
				}
				m[2].length ? I ? I.p(m, f) : (I = _s(m), I.c(), I.m(t, null)) : I && (I.d(1), I = null);
			},
			d(m) {
				m && (B(e), B(t)), A && A.d(m), C && C.d(), $(u, m), I && I.d();
			}
		};
	}
	function us(l) {
		let e;
		return {
			c() {
				e = p("div"), _(e, "class", "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf");
			},
			m(t, s) {
				h(t, e, s);
			},
			d(t) {
				t && B(e);
			}
		};
	}
	function Cs(l) {
		let e, t = l[1].meta.image && Is(l);
		return {
			c() {
				e = p("div"), t && t.c(), _(e, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
			},
			m(s, a) {
				h(s, e, a), t && t.m(e, null);
			},
			p(s, a) {
				s[1].meta.image ? t ? t.p(s, a) : (t = Is(s), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
			},
			d(s) {
				s && B(e), t && t.d();
			}
		};
	}
	function Is(l) {
		let e, t, s;
		return {
			c() {
				e = p("img"), _(e, "class", "pagefind-ui__result-image svelte-4xnkmf"), oe(e.src, t = l[1].meta?.image) || _(e, "src", t), _(e, "alt", s = l[1].meta?.image_alt || l[1].meta?.title);
			},
			m(a, i) {
				h(a, e, i);
			},
			p(a, i) {
				i & 2 && !oe(e.src, t = a[1].meta?.image) && _(e, "src", t), i & 2 && s !== (s = a[1].meta?.image_alt || a[1].meta?.title) && _(e, "alt", s);
			},
			d(a) {
				a && B(e);
			}
		};
	}
	function ds(l) {
		let e, t = l[1].excerpt + "";
		return {
			c() {
				e = p("p"), _(e, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
			},
			m(s, a) {
				h(s, e, a), e.innerHTML = t;
			},
			p(s, a) {
				a & 2 && t !== (t = s[1].excerpt + "") && (e.innerHTML = t);
			},
			d(s) {
				s && B(e);
			}
		};
	}
	function As(l) {
		let e, t, s, a = l[15].title + "", i, r, o, n, g = l[15].excerpt + "";
		return {
			c() {
				e = p("div"), t = p("p"), s = p("a"), i = G(a), o = Z(), n = p("p"), _(s, "class", "pagefind-ui__result-link svelte-4xnkmf"), _(s, "href", r = l[15].url), _(t, "class", "pagefind-ui__result-title svelte-4xnkmf"), _(n, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"), _(e, "class", "pagefind-ui__result-nested svelte-4xnkmf");
			},
			m(c, A) {
				h(c, e, A), b(e, t), b(t, s), b(s, i), b(e, o), b(e, n), n.innerHTML = g;
			},
			p(c, A) {
				A & 8 && a !== (a = c[15].title + "") && W(i, a), A & 8 && r !== (r = c[15].url) && _(s, "href", r), A & 8 && g !== (g = c[15].excerpt + "") && (n.innerHTML = g);
			},
			d(c) {
				c && B(e);
			}
		};
	}
	function _s(l) {
		let e, t = V(l[2]), s = [];
		for (let a = 0; a < t.length; a += 1) s[a] = Qs(gs(l, t, a));
		return {
			c() {
				e = p("ul");
				for (let a = 0; a < s.length; a += 1) s[a].c();
				_(e, "class", "pagefind-ui__result-tags svelte-4xnkmf");
			},
			m(a, i) {
				h(a, e, i);
				for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
			},
			p(a, i) {
				if (i & 4) {
					t = V(a[2]);
					let r;
					for (r = 0; r < t.length; r += 1) {
						let o = gs(a, t, r);
						s[r] ? s[r].p(o, i) : (s[r] = Qs(o), s[r].c(), s[r].m(e, null));
					}
					for (; r < s.length; r += 1) s[r].d(1);
					s.length = t.length;
				}
			},
			d(a) {
				a && B(e), $(s, a);
			}
		};
	}
	function Qs(l) {
		let e, t = l[11].replace(/^(\w)/, ms) + "", s, a, i = l[12] + "", r, o, n;
		return {
			c() {
				e = p("li"), s = G(t), a = G(": "), r = G(i), o = Z(), _(e, "class", "pagefind-ui__result-tag svelte-4xnkmf"), _(e, "data-pagefind-ui-meta", n = l[11]);
			},
			m(g, c) {
				h(g, e, c), b(e, s), b(e, a), b(e, r), b(e, o);
			},
			p(g, c) {
				c & 4 && t !== (t = g[11].replace(/^(\w)/, ms) + "") && W(s, t), c & 4 && i !== (i = g[12] + "") && W(r, i), c & 4 && n !== (n = g[11]) && _(e, "data-pagefind-ui-meta", n);
			},
			d(g) {
				g && B(e);
			}
		};
	}
	function Fa(l) {
		let e;
		function t(i, r) {
			return i[1] ? pa : fa;
		}
		let s = t(l, -1), a = s(l);
		return {
			c() {
				e = p("li"), a.c(), _(e, "class", "pagefind-ui__result svelte-4xnkmf");
			},
			m(i, r) {
				h(i, e, r), a.m(e, null);
			},
			p(i, [r]) {
				s === (s = t(i, r)) && a ? a.p(i, r) : (a.d(1), a = s(i), a && (a.c(), a.m(e, null)));
			},
			i: R,
			o: R,
			d(i) {
				i && B(e), a.d();
			}
		};
	}
	var ms = (l) => l.toLocaleUpperCase();
	function Ba(l, e, t) {
		let { show_images: s = !0 } = e, { process_result: a = null } = e, { result: i = { data: async () => {} } } = e, r = [
			"title",
			"image",
			"image_alt",
			"url"
		], o, n = [], g = [], c = !1, A = (u, I) => {
			if (u.length <= I) return u;
			let m = [...u].sort((f, F) => F.locations.length - f.locations.length).slice(0, 3).map((f) => f.url);
			return u.filter((f) => m.includes(f.url));
		}, C = async (u) => {
			t(1, o = await u.data()), t(1, o = a?.(o) ?? o), t(2, n = Object.entries(o.meta).filter(([I]) => !r.includes(I))), Array.isArray(o.sub_results) && (t(4, c = o.sub_results?.[0]?.url === (o.meta?.url || o.url)), c ? t(3, g = A(o.sub_results.slice(1), 3)) : t(3, g = A([...o.sub_results], 3)));
		}, d = (u = 30) => ". ".repeat(Math.floor(10 + Math.random() * u));
		return l.$$set = (u) => {
			"show_images" in u && t(0, s = u.show_images), "process_result" in u && t(6, a = u.process_result), "result" in u && t(7, i = u.result);
		}, l.$$.update = () => {
			l.$$.dirty & 128 && C(i);
		}, [
			s,
			o,
			n,
			g,
			c,
			d,
			a,
			i
		];
	}
	var Wt = class extends Y {
		constructor(e) {
			super(), P(this, e, Ba, Fa, j, {
				show_images: 0,
				process_result: 6,
				result: 7
			});
		}
	}, bs = Wt;
	function fs(l, e, t) {
		let s = l.slice();
		return s[10] = e[t][0], s[11] = e[t][1], s[12] = e, s[13] = t, s;
	}
	function ps(l, e, t) {
		let s = l.slice();
		return s[14] = e[t][0], s[15] = e[t][1], s[16] = e, s[17] = t, s;
	}
	function Fs(l) {
		let e, t, s = l[4]("filters_label", l[5], l[6]) + "", a, i, r = V(Object.entries(l[1])), o = [];
		for (let n = 0; n < r.length; n += 1) o[n] = Us(fs(l, r, n));
		return {
			c() {
				e = p("fieldset"), t = p("legend"), a = G(s), i = Z();
				for (let n = 0; n < o.length; n += 1) o[n].c();
				_(t, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"), _(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
			},
			m(n, g) {
				h(n, e, g), b(e, t), b(t, a), b(e, i);
				for (let c = 0; c < o.length; c += 1) o[c] && o[c].m(e, null);
			},
			p(n, g) {
				if (g & 112 && s !== (s = n[4]("filters_label", n[5], n[6]) + "") && W(a, s), g & 143) {
					r = V(Object.entries(n[1]));
					let c;
					for (c = 0; c < r.length; c += 1) {
						let A = fs(n, r, c);
						o[c] ? o[c].p(A, g) : (o[c] = Us(A), o[c].c(), o[c].m(e, null));
					}
					for (; c < o.length; c += 1) o[c].d(1);
					o.length = r.length;
				}
			},
			d(n) {
				n && B(e), $(o, n);
			}
		};
	}
	function Bs(l) {
		let e, t, s, a, i, r, o, n, g = l[14] + "", c, A = l[15] + "", C, d, u, I, m, f;
		function F() {
			l[9].call(t, l[10], l[14]);
		}
		return {
			c() {
				e = p("div"), t = p("input"), r = Z(), o = p("label"), n = new At(!1), c = G(" ("), C = G(A), d = G(")"), I = Z(), _(t, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"), _(t, "type", "checkbox"), _(t, "id", s = l[10] + "-" + l[14]), _(t, "name", a = l[10]), t.__value = i = l[14], ge(t, t.__value), n.a = c, _(o, "class", "pagefind-ui__filter-label svelte-1v2r7ls"), _(o, "for", u = l[10] + "-" + l[14]), _(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"), J(e, "pagefind-ui__filter-value--checked", l[0][`${l[10]}:${l[14]}`]);
			},
			m(U, y) {
				h(U, e, y), b(e, t), t.checked = l[0][`${l[10]}:${l[14]}`], b(e, r), b(e, o), n.m(g, o), b(o, c), b(o, C), b(o, d), b(e, I), m || (f = z(t, "change", F), m = !0);
			},
			p(U, y) {
				l = U, y & 2 && s !== (s = l[10] + "-" + l[14]) && _(t, "id", s), y & 2 && a !== (a = l[10]) && _(t, "name", a), y & 2 && i !== (i = l[14]) && (t.__value = i, ge(t, t.__value)), y & 3 && (t.checked = l[0][`${l[10]}:${l[14]}`]), y & 2 && g !== (g = l[14] + "") && n.p(g), y & 2 && A !== (A = l[15] + "") && W(C, A), y & 2 && u !== (u = l[10] + "-" + l[14]) && _(o, "for", u), y & 3 && J(e, "pagefind-ui__filter-value--checked", l[0][`${l[10]}:${l[14]}`]);
			},
			d(U) {
				U && B(e), m = !1, f();
			}
		};
	}
	function hs(l) {
		let e, t = (l[2] || l[15] || l[0][`${l[10]}:${l[14]}`]) && Bs(l);
		return {
			c() {
				t && t.c(), e = ee();
			},
			m(s, a) {
				t && t.m(s, a), h(s, e, a);
			},
			p(s, a) {
				s[2] || s[15] || s[0][`${s[10]}:${s[14]}`] ? t ? t.p(s, a) : (t = Bs(s), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
			},
			d(s) {
				s && B(e), t && t.d(s);
			}
		};
	}
	function Us(l) {
		let e, t, s = l[10].replace(/^(\w)/, xs) + "", a, i, r, o = l[10] + "", n, g, c, A = V(Object.entries(l[11] || {})), C = [];
		for (let d = 0; d < A.length; d += 1) C[d] = hs(ps(l, A, d));
		return {
			c() {
				e = p("details"), t = p("summary"), a = Z(), i = p("fieldset"), r = p("legend"), n = Z();
				for (let d = 0; d < C.length; d += 1) C[d].c();
				g = Z(), _(t, "class", "pagefind-ui__filter-name svelte-1v2r7ls"), _(r, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"), _(i, "class", "pagefind-ui__filter-group svelte-1v2r7ls"), _(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"), e.open = c = l[7] || l[3].map(ys).includes(l[10].toLowerCase());
			},
			m(d, u) {
				h(d, e, u), b(e, t), t.innerHTML = s, b(e, a), b(e, i), b(i, r), r.innerHTML = o, b(i, n);
				for (let I = 0; I < C.length; I += 1) C[I] && C[I].m(i, null);
				b(e, g);
			},
			p(d, u) {
				if (u & 2 && s !== (s = d[10].replace(/^(\w)/, xs) + "") && (t.innerHTML = s), u & 2 && o !== (o = d[10] + "") && (r.innerHTML = o), u & 7) {
					A = V(Object.entries(d[11] || {}));
					let I;
					for (I = 0; I < A.length; I += 1) {
						let m = ps(d, A, I);
						C[I] ? C[I].p(m, u) : (C[I] = hs(m), C[I].c(), C[I].m(i, null));
					}
					for (; I < C.length; I += 1) C[I].d(1);
					C.length = A.length;
				}
				u & 138 && c !== (c = d[7] || d[3].map(ys).includes(d[10].toLowerCase())) && (e.open = c);
			},
			d(d) {
				d && B(e), $(C, d);
			}
		};
	}
	function ha(l) {
		let e = l[1] && Object.entries(l[1]).length, t, s = e && Fs(l);
		return {
			c() {
				s && s.c(), t = ee();
			},
			m(a, i) {
				s && s.m(a, i), h(a, t, i);
			},
			p(a, [i]) {
				i & 2 && (e = a[1] && Object.entries(a[1]).length), e ? s ? s.p(a, i) : (s = Fs(a), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
			},
			i: R,
			o: R,
			d(a) {
				a && B(t), s && s.d(a);
			}
		};
	}
	var xs = (l) => l.toLocaleUpperCase(), ys = (l) => l.toLowerCase();
	function Ua(l, e, t) {
		let { available_filters: s = null } = e, { show_empty_filters: a = !0 } = e, { open_filters: i = [] } = e, { translate: r = () => "" } = e, { automatic_translations: o = {} } = e, { translations: n = {} } = e, { selected_filters: g = {} } = e, c = !1, A = !1;
		function C(d, u) {
			g[`${d}:${u}`] = this.checked, t(0, g);
		}
		return l.$$set = (d) => {
			"available_filters" in d && t(1, s = d.available_filters), "show_empty_filters" in d && t(2, a = d.show_empty_filters), "open_filters" in d && t(3, i = d.open_filters), "translate" in d && t(4, r = d.translate), "automatic_translations" in d && t(5, o = d.automatic_translations), "translations" in d && t(6, n = d.translations), "selected_filters" in d && t(0, g = d.selected_filters);
		}, l.$$.update = () => {
			if (l.$$.dirty & 258 && s && !c) {
				t(8, c = !0);
				let d = Object.entries(s || {});
				d.length === 1 && Object.entries(d[0][1])?.length <= 6 && t(7, A = !0);
			}
		}, [
			g,
			s,
			a,
			i,
			r,
			o,
			n,
			A,
			c,
			C
		];
	}
	var St = class extends Y {
		constructor(e) {
			super(), P(this, e, Ua, ha, j, {
				available_filters: 1,
				show_empty_filters: 2,
				open_filters: 3,
				translate: 4,
				automatic_translations: 5,
				translations: 6,
				selected_filters: 0
			});
		}
	}, Zs = St;
	var Vt = {};
	x(Vt, {
		comments: () => ya,
		default: () => Na,
		direction: () => Za,
		strings: () => Ga,
		thanks_to: () => xa
	});
	var xa = "Jan Claasen <jan@cloudcannon.com>", ya = "", Za = "ltr", Ga = {
		placeholder: "Soek",
		clear_search: "Opruim",
		load_more: "Laai nog resultate",
		search_label: "Soek hierdie webwerf",
		filters_label: "Filters",
		zero_results: "Geen resultate vir [SEARCH_TERM]",
		many_results: "[COUNT] resultate vir [SEARCH_TERM]",
		one_result: "[COUNT] resultate vir [SEARCH_TERM]",
		total_zero_results: "Geen resultate",
		total_one_result: "[COUNT] resultaat",
		total_many_results: "[COUNT] resultate",
		alt_search: "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
		search_suggestion: "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
		searching: "Soek vir [SEARCH_TERM]",
		results_label: "Soekresultate",
		keyboard_navigate: "navigeer",
		keyboard_select: "kies",
		keyboard_clear: "wis",
		keyboard_close: "sluit",
		keyboard_search: "soek",
		error_search: "Soek het misluk",
		filter_selected_one: "[COUNT] gekies",
		filter_selected_many: "[COUNT] gekies",
		input_hint: "Resultate sal verskyn terwyl jy tik",
		loading: "Laai"
	}, Na = {
		thanks_to: xa,
		comments: ya,
		direction: Za,
		strings: Ga
	};
	var Dt = {};
	x(Dt, {
		comments: () => Xa,
		default: () => Ra,
		direction: () => ka,
		strings: () => La,
		thanks_to: () => Ea
	});
	var Ea = "Jermanuts", Xa = "", ka = "rtl", La = {
		placeholder: "بحث",
		clear_search: "امسح",
		load_more: "حمِّل المزيد من النتائج",
		search_label: "ابحث في هذا الموقع",
		filters_label: "تصفيات",
		zero_results: "لا توجد نتائج ل [SEARCH_TERM]",
		many_results: "[COUNT] نتائج ل [SEARCH_TERM]",
		one_result: "[COUNT] نتيجة ل [SEARCH_TERM]",
		total_zero_results: "لا توجد نتائج",
		total_one_result: "[COUNT] نتيجة",
		total_many_results: "[COUNT] نتائج",
		alt_search: "لا توجد نتائج ل [SEARCH_TERM]. يعرض النتائج ل [DIFFERENT_TERM] بدلاً من ذلك",
		search_suggestion: "لا توجد نتائج ل [SEARCH_TERM]. جرب أحد عمليات البحث التالية:",
		searching: "يبحث عن [SEARCH_TERM]...",
		results_label: "نتائج البحث",
		keyboard_navigate: "تنقل",
		keyboard_select: "اختيار",
		keyboard_clear: "امسح",
		keyboard_close: "إغلاق",
		keyboard_search: "بحث",
		error_search: "فشل البحث",
		filter_selected_one: "[COUNT] محدد",
		filter_selected_many: "[COUNT] محدد",
		input_hint: "ستظهر النتائج أثناء الكتابة",
		loading: "جارٍ التحميل"
	}, Ra = {
		thanks_to: Ea,
		comments: Xa,
		direction: ka,
		strings: La
	};
	var Tt = {};
	x(Tt, {
		comments: () => Sa,
		default: () => Ta,
		direction: () => Va,
		strings: () => Da,
		thanks_to: () => Wa
	});
	var Wa = "Salif Mehmed <mail@salif.eu>", Sa = "", Va = "ltr", Da = {
		placeholder: "Търсене",
		clear_search: "Изчистване",
		load_more: "Зареждане на още резултати",
		search_label: "Търсене в сайта",
		filters_label: "Филтри",
		zero_results: "Няма намерени резултати за [SEARCH_TERM]",
		many_results: "[COUNT] резултата за [SEARCH_TERM]",
		one_result: "[COUNT] резултат за [SEARCH_TERM]",
		total_zero_results: "Няма резултати",
		total_one_result: "[COUNT] резултат",
		total_many_results: "[COUNT] резултата",
		alt_search: "Няма намерени резултати за [SEARCH_TERM]. Показване на резултати за [DIFFERENT_TERM] вместо това",
		search_suggestion: "Няма намерени резултати за [SEARCH_TERM]. Опитайте някое от следните търсения:",
		searching: "Търсене на [SEARCH_TERM]...",
		results_label: "Резултати от търсенето",
		keyboard_navigate: "навигация",
		keyboard_select: "избор",
		keyboard_clear: "изчистване",
		keyboard_close: "затваряне",
		keyboard_search: "търсене",
		error_search: "Неуспешно търсене",
		filter_selected_one: "[COUNT] избран",
		filter_selected_many: "[COUNT] избрани",
		input_hint: "Резултатите ще се появят, докато пишете",
		loading: "Зареждане"
	}, Ta = {
		thanks_to: Wa,
		comments: Sa,
		direction: Va,
		strings: Da
	};
	var vt = {};
	x(vt, {
		comments: () => Ha,
		default: () => wa,
		direction: () => Ma,
		strings: () => Ya,
		thanks_to: () => va
	});
	var va = "Maruf Alom <mail@marufalom.com>", Ha = "", Ma = "ltr", Ya = {
		placeholder: "অনুসন্ধান করুন",
		clear_search: "মুছে ফেলুন",
		load_more: "আরো ফলাফল দেখুন",
		search_label: "এই ওয়েবসাইটে অনুসন্ধান করুন",
		filters_label: "ফিল্টার",
		zero_results: "[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি",
		many_results: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য",
		one_result: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য",
		total_zero_results: "কোন ফলাফল নেই",
		total_one_result: "[COUNT]-টি ফলাফল",
		total_many_results: "[COUNT]-টি ফলাফল",
		alt_search: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে",
		search_suggestion: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:",
		searching: "অনুসন্ধান চলছে [SEARCH_TERM]...",
		results_label: "অনুসন্ধানের ফলাফল",
		keyboard_navigate: "নেভিগেট",
		keyboard_select: "নির্বাচন",
		keyboard_clear: "মুছুন",
		keyboard_close: "বন্ধ",
		keyboard_search: "অনুসন্ধান",
		error_search: "অনুসন্ধান ব্যর্থ",
		filter_selected_one: "[COUNT]-টি নির্বাচিত",
		filter_selected_many: "[COUNT]-টি নির্বাচিত",
		input_hint: "টাইপ করার সাথে সাথে ফলাফল দেখা যাবে",
		loading: "লোড হচ্ছে"
	}, wa = {
		thanks_to: va,
		comments: Ha,
		direction: Ma,
		strings: Ya
	};
	var Ht = {};
	x(Ht, {
		comments: () => Ja,
		default: () => Ka,
		direction: () => Oa,
		strings: () => ja,
		thanks_to: () => za
	});
	var za = "Pablo Villaverde <https://github.com/pvillaverde>", Ja = "", Oa = "ltr", ja = {
		placeholder: "Cerca",
		clear_search: "Netejar",
		load_more: "Veure més resultats",
		search_label: "Cerca en aquest lloc",
		filters_label: "Filtres",
		zero_results: "No es van trobar resultats per [SEARCH_TERM]",
		many_results: "[COUNT] resultats trobats per [SEARCH_TERM]",
		one_result: "[COUNT] resultat trobat per [SEARCH_TERM]",
		total_zero_results: "Sense resultats",
		total_one_result: "[COUNT] resultat",
		total_many_results: "[COUNT] resultats",
		alt_search: "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]",
		search_suggestion: "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:",
		searching: "Cercant [SEARCH_TERM]...",
		results_label: "Resultats de la cerca",
		keyboard_navigate: "navegar",
		keyboard_select: "triar",
		keyboard_clear: "netejar",
		keyboard_close: "tancar",
		keyboard_search: "cercar",
		error_search: "Error en la cerca",
		filter_selected_one: "[COUNT] seleccionat",
		filter_selected_many: "[COUNT] seleccionats",
		input_hint: "Els resultats apareixeran mentre escriviu",
		loading: "Carregant"
	}, Ka = {
		thanks_to: za,
		comments: Ja,
		direction: Oa,
		strings: ja
	};
	var Mt = {};
	x(Mt, {
		comments: () => qa,
		default: () => tr,
		direction: () => $a,
		strings: () => er,
		thanks_to: () => Pa
	});
	var Pa = "Dalibor Hon <https://github.com/dallyh>", qa = "", $a = "ltr", er = {
		placeholder: "Hledat",
		clear_search: "Smazat",
		load_more: "Načíst další výsledky",
		search_label: "Prohledat tuto stránku",
		filters_label: "Filtry",
		zero_results: "Žádné výsledky pro [SEARCH_TERM]",
		many_results: "[COUNT] výsledků pro [SEARCH_TERM]",
		one_result: "[COUNT] výsledek pro [SEARCH_TERM]",
		total_zero_results: "Žádné výsledky",
		total_one_result: "[COUNT] výsledek",
		total_many_results: "[COUNT] výsledků",
		alt_search: "Žádné výsledky pro [SEARCH_TERM]. Zobrazují se výsledky pro [DIFFERENT_TERM]",
		search_suggestion: "Žádné výsledky pro [SEARCH_TERM]. Související výsledky hledání:",
		searching: "Hledám [SEARCH_TERM]...",
		results_label: "Výsledky hledání",
		keyboard_navigate: "navigovat",
		keyboard_select: "vybrat",
		keyboard_clear: "smazat",
		keyboard_close: "zavřít",
		keyboard_search: "hledat",
		error_search: "Hledání selhalo",
		filter_selected_one: "[COUNT] vybraný",
		filter_selected_many: "[COUNT] vybraných",
		input_hint: "Výsledky se zobrazí během psaní",
		loading: "Načítání"
	}, tr = {
		thanks_to: Pa,
		comments: qa,
		direction: $a,
		strings: er
	};
	var Yt = {};
	x(Yt, {
		comments: () => sr,
		default: () => ir,
		direction: () => ar,
		strings: () => rr,
		thanks_to: () => lr
	});
	var lr = "Jonas Smedegaard <dr@jones.dk>", sr = "", ar = "ltr", rr = {
		placeholder: "Søg",
		clear_search: "Nulstil",
		load_more: "Indlæs flere resultater",
		search_label: "Søg på dette website",
		filters_label: "Filtre",
		zero_results: "Ingen resultater for [SEARCH_TERM]",
		many_results: "[COUNT] resultater for [SEARCH_TERM]",
		one_result: "[COUNT] resultat for [SEARCH_TERM]",
		total_zero_results: "Ingen resultater",
		total_one_result: "[COUNT] resultat",
		total_many_results: "[COUNT] resultater",
		alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
		search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:",
		searching: "Søger efter [SEARCH_TERM]...",
		results_label: "Søgeresultater",
		keyboard_navigate: "naviger",
		keyboard_select: "vælg",
		keyboard_clear: "ryd",
		keyboard_close: "luk",
		keyboard_search: "søg",
		error_search: "Søgning mislykkedes",
		filter_selected_one: "[COUNT] valgt",
		filter_selected_many: "[COUNT] valgte",
		input_hint: "Resultater vises mens du skriver",
		loading: "Indlæser"
	}, ir = {
		thanks_to: lr,
		comments: sr,
		direction: ar,
		strings: rr
	};
	var wt = {};
	x(wt, {
		comments: () => or,
		default: () => ur,
		direction: () => gr,
		strings: () => cr,
		thanks_to: () => nr
	});
	var nr = "Jan Claasen <jan@cloudcannon.com>", or = "", gr = "ltr", cr = {
		placeholder: "Suchen",
		clear_search: "Löschen",
		load_more: "Weitere Ergebnisse laden",
		search_label: "Diese Seite durchsuchen",
		filters_label: "Filter",
		zero_results: "Keine Ergebnisse für [SEARCH_TERM]",
		many_results: "[COUNT] Ergebnisse für [SEARCH_TERM]",
		one_result: "Ein Ergebnis für [SEARCH_TERM]",
		total_zero_results: "Keine Ergebnisse",
		total_one_result: "Ein Ergebnis",
		total_many_results: "[COUNT] Ergebnisse",
		alt_search: "Keine Ergebnisse für [SEARCH_TERM]. Stattdessen erscheinen Ergebnisse für [DIFFERENT_TERM].",
		search_suggestion: "Keine Ergebnisse für [SEARCH_TERM]. Probier einen der folgenden Vorschläge:",
		searching: "[SEARCH_TERM] wird gesucht\xA0…",
		results_label: "Suchergebnisse",
		keyboard_navigate: "Navigieren",
		keyboard_select: "Auswählen",
		keyboard_clear: "Löschen",
		keyboard_close: "Schließen",
		keyboard_search: "Suchen",
		error_search: "Suche fehlgeschlagen",
		filter_selected_one: "[COUNT] ausgewählt",
		filter_selected_many: "[COUNT] ausgewählt",
		input_hint: "Ergebnisse erscheinen beim Tippen",
		loading: "Wird geladen\xA0…"
	}, ur = {
		thanks_to: nr,
		comments: or,
		direction: gr,
		strings: cr
	};
	var zt = {};
	x(zt, {
		comments: () => Ir,
		default: () => _r,
		direction: () => dr,
		strings: () => Ar,
		thanks_to: () => Cr
	});
	var Cr = "George Papadopoulos", Ir = "", dr = "ltr", Ar = {
		placeholder: "Αναζήτηση",
		clear_search: "Καθαρισμός",
		load_more: "Φόρτωση περισσότερων αποτελεσμάτων",
		search_label: "Αναζήτηση σε αυτόν τον ιστότοπο",
		filters_label: "Φίλτρα",
		zero_results: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]",
		many_results: "[COUNT] αποτελέσματα για [SEARCH_TERM]",
		one_result: "[COUNT] αποτέλεσμα για [SEARCH_TERM]",
		total_zero_results: "Δεν βρέθηκαν αποτελέσματα",
		total_one_result: "[COUNT] αποτέλεσμα",
		total_many_results: "[COUNT] αποτελέσματα",
		alt_search: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Εμφανίζονται αποτελέσματα για [DIFFERENT_TERM]",
		search_suggestion: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Δοκιμάστε μία από τις παρακάτω αναζητήσεις:",
		searching: "Αναζήτηση για [SEARCH_TERM]...",
		results_label: "Αποτελέσματα αναζήτησης",
		keyboard_navigate: "πλοήγηση",
		keyboard_select: "επιλογή",
		keyboard_clear: "καθαρισμός",
		keyboard_close: "κλείσιμο",
		keyboard_search: "αναζήτηση",
		error_search: "Η αναζήτηση απέτυχε",
		filter_selected_one: "[COUNT] επιλεγμένο",
		filter_selected_many: "[COUNT] επιλεγμένα",
		input_hint: "Τα αποτελέσματα θα εμφανίζονται καθώς πληκτρολογείτε",
		loading: "Φόρτωση"
	}, _r = {
		thanks_to: Cr,
		comments: Ir,
		direction: dr,
		strings: Ar
	};
	var Jt = {};
	x(Jt, {
		comments: () => mr,
		default: () => pr,
		direction: () => br,
		strings: () => fr,
		thanks_to: () => Qr
	});
	var Qr = "Liam Bigelow <liam@cloudcannon.com>", mr = "", br = "ltr", fr = {
		placeholder: "Search",
		clear_search: "Clear",
		load_more: "Load more results",
		search_label: "Search this site",
		filters_label: "Filters",
		zero_results: "No results for [SEARCH_TERM]",
		many_results: "[COUNT] results for [SEARCH_TERM]",
		one_result: "[COUNT] result for [SEARCH_TERM]",
		total_zero_results: "No results",
		total_one_result: "[COUNT] result",
		total_many_results: "[COUNT] results",
		alt_search: "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
		search_suggestion: "No results for [SEARCH_TERM]. Try one of the following searches:",
		searching: "Searching for [SEARCH_TERM]...",
		results_label: "Search results",
		keyboard_navigate: "navigate",
		keyboard_select: "select",
		keyboard_clear: "clear",
		keyboard_close: "close",
		keyboard_search: "search",
		error_search: "Search failed",
		filter_selected_one: "[COUNT] selected",
		filter_selected_many: "[COUNT] selected",
		input_hint: "Results will appear as you type",
		loading: "Loading"
	}, pr = {
		thanks_to: Qr,
		comments: mr,
		direction: br,
		strings: fr
	};
	var Ot = {};
	x(Ot, {
		comments: () => Br,
		default: () => xr,
		direction: () => hr,
		strings: () => Ur,
		thanks_to: () => Fr
	});
	var Fr = "Pablo Villaverde <https://github.com/pvillaverde>", Br = "", hr = "ltr", Ur = {
		placeholder: "Buscar",
		clear_search: "Limpiar",
		load_more: "Ver más resultados",
		search_label: "Buscar en este sitio",
		filters_label: "Filtros",
		zero_results: "No se encontraron resultados para [SEARCH_TERM]",
		many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
		one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
		total_zero_results: "Sin resultados",
		total_one_result: "[COUNT] resultado",
		total_many_results: "[COUNT] resultados",
		alt_search: "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]",
		search_suggestion: "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:",
		searching: "Buscando [SEARCH_TERM]...",
		results_label: "Resultados de búsqueda",
		keyboard_navigate: "navegar",
		keyboard_select: "elegir",
		keyboard_clear: "limpiar",
		keyboard_close: "cerrar",
		keyboard_search: "buscar",
		error_search: "Error en la búsqueda",
		filter_selected_one: "[COUNT] seleccionado",
		filter_selected_many: "[COUNT] seleccionados",
		input_hint: "Los resultados aparecerán mientras escribe",
		loading: "Cargando"
	}, xr = {
		thanks_to: Fr,
		comments: Br,
		direction: hr,
		strings: Ur
	};
	var jt = {};
	x(jt, {
		comments: () => Zr,
		default: () => Er,
		direction: () => Gr,
		strings: () => Nr,
		thanks_to: () => yr
	});
	var yr = "Mikel Larreategi <mlarreaegi@codesyntax.com>", Zr = "", Gr = "ltr", Nr = {
		placeholder: "Bilatu",
		clear_search: "Garbitu",
		load_more: "Kargatu emaitza gehiagi",
		search_label: "Bilatu",
		filters_label: "Iragazkiak",
		zero_results: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat",
		many_results: "[COUNT] emaitza [SEARCH_TERM] bilaketarentzat",
		one_result: "Emaitza bat [COUNT] [SEARCH_TERM] bilaketarentzat",
		total_zero_results: "Emaitzarik ez",
		total_one_result: "[COUNT] emaitza",
		total_many_results: "[COUNT] emaitza",
		alt_search: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. [DIFFERENT_TERM] bilaketaren emaitzak erakusten",
		search_suggestion: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. Saiatu hauetako beste bateikin:",
		searching: "[SEARCH_TERM] bilatzen...",
		results_label: "Bilaketaren emaitzak",
		keyboard_navigate: "nabigatu",
		keyboard_select: "hautatu",
		keyboard_clear: "garbitu",
		keyboard_close: "itxi",
		keyboard_search: "bilatu",
		error_search: "Bilaketak huts egin du",
		filter_selected_one: "[COUNT] hautatuta",
		filter_selected_many: "[COUNT] hautatuta",
		input_hint: "Emaitzak idatzi ahala agertuko dira",
		loading: "Kargatzen"
	}, Er = {
		thanks_to: yr,
		comments: Zr,
		direction: Gr,
		strings: Nr
	};
	var Kt = {};
	x(Kt, {
		comments: () => kr,
		default: () => Wr,
		direction: () => Lr,
		strings: () => Rr,
		thanks_to: () => Xr
	});
	var Xr = "Ali Khaleqi Yekta <https://yekta.dev>, Goudarz Jafari <https://goudarzjafari.com>", kr = "", Lr = "rtl", Rr = {
		placeholder: "جست‌و‌جو",
		clear_search: "پاکسازی",
		load_more: "نمایش نتیجه‌های بیشتر",
		search_label: "جست‌وجو در وبگاه",
		filters_label: "فیلترها",
		zero_results: "هیچ نتیجه‌ای برای [SEARCH_TERM] پیدا نشد",
		many_results: "[COUNT] نتیجه برای [SEARCH_TERM] پیدا شد",
		one_result: "[COUNT] نتیجه برای [SEARCH_TERM] پیدا شد",
		total_zero_results: "هیچ نتیجه‌ای پیدا نشد",
		total_one_result: "[COUNT] نتیجه",
		total_many_results: "[COUNT] نتیجه",
		alt_search: "نتیجه‌ای برای [SEARCH_TERM] پیدا نشد. نتیجه‌های مربوط به [DIFFERENT_TERM] نمایش داده می‌شود",
		search_suggestion: "نتیجه‌ای برای [SEARCH_TERM] پیدا نشد. یکی از جست‌و‌جوهای زیر را امتحان کنید:",
		searching: "در حال جست‌و‌جوی [SEARCH_TERM]...",
		results_label: "نتایج جستجو",
		keyboard_navigate: "پیمایش",
		keyboard_select: "انتخاب",
		keyboard_clear: "پاکسازی",
		keyboard_close: "بستن",
		keyboard_search: "جست‌و‌جو",
		error_search: "جست‌و‌جو ناموفق بود",
		filter_selected_one: "[COUNT] مورد انتخاب شد",
		filter_selected_many: "[COUNT] مورد انتخاب شد",
		input_hint: "با تایپ کردن، نتایج نمایش داده می‌شوند",
		loading: "در حال بارگذاری"
	}, Wr = {
		thanks_to: Xr,
		comments: kr,
		direction: Lr,
		strings: Rr
	};
	var Pt = {};
	x(Pt, {
		comments: () => Vr,
		default: () => vr,
		direction: () => Dr,
		strings: () => Tr,
		thanks_to: () => Sr
	});
	var Sr = "Valtteri Laitinen <dev@valtlai.fi>", Vr = "", Dr = "ltr", Tr = {
		placeholder: "Haku",
		clear_search: "Tyhjennä",
		load_more: "Lataa lisää tuloksia",
		search_label: "Hae tältä sivustolta",
		filters_label: "Suodattimet",
		zero_results: "Ei tuloksia haulle [SEARCH_TERM]",
		many_results: "[COUNT] tulosta haulle [SEARCH_TERM]",
		one_result: "[COUNT] tulos haulle [SEARCH_TERM]",
		total_zero_results: "Ei tuloksia",
		total_one_result: "[COUNT] tulos",
		total_many_results: "[COUNT] tulosta",
		alt_search: "Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]",
		search_suggestion: "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:",
		searching: "Haetaan [SEARCH_TERM]...",
		results_label: "Hakutulokset",
		keyboard_navigate: "siirry",
		keyboard_select: "valitse",
		keyboard_clear: "tyhjennä",
		keyboard_close: "sulje",
		keyboard_search: "hae",
		error_search: "Haku epäonnistui",
		filter_selected_one: "[COUNT] valittu",
		filter_selected_many: "[COUNT] valittu",
		input_hint: "Tulokset näkyvät kirjoittaessasi",
		loading: "Ladataan"
	}, vr = {
		thanks_to: Sr,
		comments: Vr,
		direction: Dr,
		strings: Tr
	};
	var qt = {};
	x(qt, {
		comments: () => Mr,
		default: () => zr,
		direction: () => Yr,
		strings: () => wr,
		thanks_to: () => Hr
	});
	var Hr = "Nicolas Friedli <nicolas@theologique.ch>", Mr = "", Yr = "ltr", wr = {
		placeholder: "Rechercher",
		clear_search: "Effacer",
		load_more: "Afficher plus de résultats",
		search_label: "Recherche sur ce site",
		filters_label: "Filtres",
		zero_results: "Aucun résultat pour [SEARCH_TERM]",
		many_results: "[COUNT] résultats pour [SEARCH_TERM]",
		one_result: "Un résultat pour [SEARCH_TERM]",
		total_zero_results: "Aucun résultat",
		total_one_result: "Un résultat",
		total_many_results: "[COUNT] résultats",
		alt_search: "Aucun résultat pour [SEARCH_TERM]. Afficher les résultats pour [DIFFERENT_TERM] à la place",
		search_suggestion: "Aucun résultat pour [SEARCH_TERM]. Essayez l'une des recherches suivantes :",
		searching: "Recherche de [SEARCH_TERM] en cours...",
		results_label: "Résultats de recherche",
		keyboard_navigate: "naviguer",
		keyboard_select: "sélectionner",
		keyboard_clear: "effacer",
		keyboard_close: "fermer",
		keyboard_search: "rechercher",
		error_search: "Échec de la recherche",
		filter_selected_one: "[COUNT] sélectionné",
		filter_selected_many: "[COUNT] sélectionnés",
		input_hint: "Les résultats apparaîtront au fur et à mesure de la saisie",
		loading: "Chargement en cours..."
	}, zr = {
		thanks_to: Hr,
		comments: Mr,
		direction: Yr,
		strings: wr
	};
	var $t = {};
	x($t, {
		comments: () => Or,
		default: () => Pr,
		direction: () => jr,
		strings: () => Kr,
		thanks_to: () => Jr
	});
	var Jr = "Pablo Villaverde <https://github.com/pvillaverde>", Or = "", jr = "ltr", Kr = {
		placeholder: "Buscar",
		clear_search: "Limpar",
		load_more: "Ver máis resultados",
		search_label: "Buscar neste sitio",
		filters_label: "Filtros",
		zero_results: "Non se atoparon resultados para [SEARCH_TERM]",
		many_results: "[COUNT] resultados atopados para [SEARCH_TERM]",
		one_result: "[COUNT] resultado atopado para [SEARCH_TERM]",
		total_zero_results: "Sen resultados",
		total_one_result: "[COUNT] resultado",
		total_many_results: "[COUNT] resultados",
		alt_search: "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]",
		search_suggestion: "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:",
		searching: "Buscando [SEARCH_TERM]...",
		results_label: "Resultados da busca",
		keyboard_navigate: "navegar",
		keyboard_select: "escoller",
		keyboard_clear: "limpar",
		keyboard_close: "pechar",
		keyboard_search: "buscar",
		error_search: "Erro na busca",
		filter_selected_one: "[COUNT] seleccionado",
		filter_selected_many: "[COUNT] seleccionados",
		input_hint: "Os resultados aparecerán mentres escribe",
		loading: "Cargando"
	}, Pr = {
		thanks_to: Jr,
		comments: Or,
		direction: jr,
		strings: Kr
	};
	var el = {};
	x(el, {
		comments: () => $r,
		default: () => li,
		direction: () => ei,
		strings: () => ti,
		thanks_to: () => qr
	});
	var qr = "Nir Tamir <nirtamir2@gmail.com>", $r = "", ei = "rtl", ti = {
		placeholder: "חיפוש",
		clear_search: "ניקוי",
		load_more: "עוד תוצאות",
		search_label: "חיפוש באתר זה",
		filters_label: "מסננים",
		zero_results: "לא נמצאו תוצאות עבור [SEARCH_TERM]",
		many_results: "נמצאו [COUNT] תוצאות עבור [SEARCH_TERM]",
		one_result: "נמצאה תוצאה אחת עבור [SEARCH_TERM]",
		total_zero_results: "לא נמצאו תוצאות",
		total_one_result: "תוצאה [COUNT]",
		total_many_results: "[COUNT] תוצאות",
		alt_search: "לא נמצאו תוצאות עבור [SEARCH_TERM]. מוצגות תוצאות עבור [DIFFERENT_TERM]",
		search_suggestion: "לא נמצאו תוצאות עבור [SEARCH_TERM]. נסו אחד מהחיפושים הבאים:",
		searching: "מחפש את [SEARCH_TERM]...",
		results_label: "תוצאות חיפוש",
		keyboard_navigate: "ניווט",
		keyboard_select: "בחירה",
		keyboard_clear: "ניקוי",
		keyboard_close: "סגירה",
		keyboard_search: "חיפוש",
		error_search: "החיפוש נכשל",
		filter_selected_one: "[COUNT] נבחר",
		filter_selected_many: "[COUNT] נבחרו",
		input_hint: "התוצאות יופיעו תוך כדי הקלדה",
		loading: "טוען"
	}, li = {
		thanks_to: qr,
		comments: $r,
		direction: ei,
		strings: ti
	};
	var tl = {};
	x(tl, {
		comments: () => ai,
		default: () => ni,
		direction: () => ri,
		strings: () => ii,
		thanks_to: () => si
	});
	var si = "Amit Yadav <amit@thetechbasket.com>", ai = "", ri = "ltr", ii = {
		placeholder: "खोजें",
		clear_search: "साफ करें",
		load_more: "और अधिक परिणाम लोड करें",
		search_label: "इस साइट में खोजें",
		filters_label: "फ़िल्टर",
		zero_results: "कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला",
		many_results: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिले",
		one_result: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिला",
		total_zero_results: "कोई परिणाम नहीं",
		total_one_result: "[COUNT] परिणाम",
		total_many_results: "[COUNT] परिणाम",
		alt_search: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है",
		search_suggestion: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:",
		searching: "[SEARCH_TERM] की खोज की जा रही है...",
		results_label: "खोज परिणाम",
		keyboard_navigate: "नेविगेट",
		keyboard_select: "चुनें",
		keyboard_clear: "साफ़ करें",
		keyboard_close: "बंद करें",
		keyboard_search: "खोजें",
		error_search: "खोज विफल",
		filter_selected_one: "[COUNT] चयनित",
		filter_selected_many: "[COUNT] चयनित",
		input_hint: "टाइप करते समय परिणाम दिखाई देंगे",
		loading: "लोड हो रहा है"
	}, ni = {
		thanks_to: si,
		comments: ai,
		direction: ri,
		strings: ii
	};
	var ll = {};
	x(ll, {
		comments: () => gi,
		default: () => Ci,
		direction: () => ci,
		strings: () => ui,
		thanks_to: () => oi
	});
	var oi = "Diomed <https://github.com/diomed>", gi = "", ci = "ltr", ui = {
		placeholder: "Traži",
		clear_search: "Očisti",
		load_more: "Učitaj više rezultata",
		search_label: "Pretraži ovu stranicu",
		filters_label: "Filteri",
		zero_results: "Nema rezultata za [SEARCH_TERM]",
		many_results: "[COUNT] rezultata za [SEARCH_TERM]",
		one_result: "[COUNT] rezultat za [SEARCH_TERM]",
		total_zero_results: "Nema rezultata",
		total_one_result: "[COUNT] rezultat",
		total_many_results: "[COUNT] rezultata",
		alt_search: "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]",
		search_suggestion: "Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:",
		searching: "Pretražujem [SEARCH_TERM]...",
		results_label: "Rezultati pretrage",
		keyboard_navigate: "navigiraj",
		keyboard_select: "odaberi",
		keyboard_clear: "očisti",
		keyboard_close: "zatvori",
		keyboard_search: "traži",
		error_search: "Pretraga nije uspjela",
		filter_selected_one: "[COUNT] odabran",
		filter_selected_many: "[COUNT] odabranih",
		input_hint: "Rezultati će se pojaviti dok tipkate",
		loading: "Učitavanje"
	}, Ci = {
		thanks_to: oi,
		comments: gi,
		direction: ci,
		strings: ui
	};
	var sl = {};
	x(sl, {
		comments: () => di,
		default: () => Qi,
		direction: () => Ai,
		strings: () => _i,
		thanks_to: () => Ii
	});
	var Ii = "Adam Laki <info@adamlaki.com>", di = "", Ai = "ltr", _i = {
		placeholder: "Keresés",
		clear_search: "Törlés",
		load_more: "További találatok betöltése",
		search_label: "Keresés az oldalon",
		filters_label: "Szűrés",
		zero_results: "Nincs találat a(z) [SEARCH_TERM] kifejezésre",
		many_results: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
		one_result: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
		total_zero_results: "Nincs találat",
		total_one_result: "[COUNT] találat",
		total_many_results: "[COUNT] találat",
		alt_search: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre",
		search_suggestion: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:",
		searching: "Keresés a(z) [SEARCH_TERM] kifejezésre...",
		results_label: "Keresési találatok",
		keyboard_navigate: "navigálás",
		keyboard_select: "kiválasztás",
		keyboard_clear: "törlés",
		keyboard_close: "bezárás",
		keyboard_search: "keresés",
		error_search: "A keresés sikertelen",
		filter_selected_one: "[COUNT] kiválasztva",
		filter_selected_many: "[COUNT] kiválasztva",
		input_hint: "A találatok gépelés közben jelennek meg",
		loading: "Betöltés"
	}, Qi = {
		thanks_to: Ii,
		comments: di,
		direction: Ai,
		strings: _i
	};
	var al = {};
	x(al, {
		comments: () => bi,
		default: () => Fi,
		direction: () => fi,
		strings: () => pi,
		thanks_to: () => mi
	});
	var mi = "Nixentric", bi = "", fi = "ltr", pi = {
		placeholder: "Cari",
		clear_search: "Bersihkan",
		load_more: "Muat lebih banyak hasil",
		search_label: "Telusuri situs ini",
		filters_label: "Filter",
		zero_results: "[SEARCH_TERM] tidak ditemukan",
		many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
		one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
		total_zero_results: "Tidak ada hasil",
		total_one_result: "[COUNT] hasil",
		total_many_results: "[COUNT] hasil",
		alt_search: "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya",
		search_suggestion: "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:",
		searching: "Mencari [SEARCH_TERM]...",
		results_label: "Hasil pencarian",
		keyboard_navigate: "navigasi",
		keyboard_select: "pilih",
		keyboard_clear: "bersihkan",
		keyboard_close: "tutup",
		keyboard_search: "cari",
		error_search: "Pencarian gagal",
		filter_selected_one: "[COUNT] dipilih",
		filter_selected_many: "[COUNT] dipilih",
		input_hint: "Hasil akan muncul saat Anda mengetik",
		loading: "Memuat"
	}, Fi = {
		thanks_to: mi,
		comments: bi,
		direction: fi,
		strings: pi
	};
	var rl = {};
	x(rl, {
		comments: () => hi,
		default: () => yi,
		direction: () => Ui,
		strings: () => xi,
		thanks_to: () => Bi
	});
	var Bi = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>", hi = "", Ui = "ltr", xi = {
		placeholder: "Cerca",
		clear_search: "Cancella la cronologia",
		load_more: "Mostra più risultati",
		search_label: "Cerca nel sito",
		filters_label: "Filtri di ricerca",
		zero_results: "Nessun risultato per [SEARCH_TERM]",
		many_results: "[COUNT] risultati per [SEARCH_TERM]",
		one_result: "[COUNT] risultato per [SEARCH_TERM]",
		total_zero_results: "Nessun risultato",
		total_one_result: "[COUNT] risultato",
		total_many_results: "[COUNT] risultati",
		alt_search: "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.",
		search_suggestion: "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:",
		searching: "Cercando [SEARCH_TERM]...",
		results_label: "Risultati della ricerca",
		keyboard_navigate: "naviga",
		keyboard_select: "seleziona",
		keyboard_clear: "cancella",
		keyboard_close: "chiudi",
		keyboard_search: "cerca",
		error_search: "Ricerca fallita",
		filter_selected_one: "[COUNT] selezionato",
		filter_selected_many: "[COUNT] selezionati",
		input_hint: "I risultati appariranno durante la digitazione",
		loading: "Caricamento"
	}, yi = {
		thanks_to: Bi,
		comments: hi,
		direction: Ui,
		strings: xi
	};
	var il = {};
	x(il, {
		comments: () => Gi,
		default: () => Xi,
		direction: () => Ni,
		strings: () => Ei,
		thanks_to: () => Zi
	});
	var Zi = "Tate", Gi = "", Ni = "ltr", Ei = {
		placeholder: "検索",
		clear_search: "クリア",
		load_more: "次を読み込む",
		search_label: "このサイトを検索",
		filters_label: "フィルタ",
		zero_results: "[SEARCH_TERM]の検索に一致する情報はありませんでした",
		many_results: "[SEARCH_TERM]の[COUNT]件の検索結果",
		one_result: "[SEARCH_TERM]の[COUNT]件の検索結果",
		total_zero_results: "結果なし",
		total_one_result: "[COUNT]件の結果",
		total_many_results: "[COUNT]件の結果",
		alt_search: "[SEARCH_TERM]の検索に一致する情報はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています",
		search_suggestion: "[SEARCH_TERM]の検索に一致する情報はありませんでした。次のいずれかの検索を試してください",
		searching: "[SEARCH_TERM]を検索しています",
		results_label: "検索結果",
		keyboard_navigate: "移動",
		keyboard_select: "選択",
		keyboard_clear: "クリア",
		keyboard_close: "閉じる",
		keyboard_search: "検索",
		error_search: "検索に失敗しました",
		filter_selected_one: "[COUNT]件選択中",
		filter_selected_many: "[COUNT]件選択中",
		input_hint: "入力中に検索結果が表示されます",
		loading: "読み込み中"
	}, Xi = {
		thanks_to: Zi,
		comments: Gi,
		direction: Ni,
		strings: Ei
	};
	var nl = {};
	x(nl, {
		comments: () => Li,
		default: () => Si,
		direction: () => Ri,
		strings: () => Wi,
		thanks_to: () => ki
	});
	var ki = "Seokho Son <https://github.com/seokho-son>", Li = "", Ri = "ltr", Wi = {
		placeholder: "검색어",
		clear_search: "비우기",
		load_more: "검색 결과 더 보기",
		search_label: "사이트 검색",
		filters_label: "필터",
		zero_results: "[SEARCH_TERM]에 대한 결과 없음",
		many_results: "[SEARCH_TERM]에 대한 결과 [COUNT]건",
		one_result: "[SEARCH_TERM]에 대한 결과 [COUNT]건",
		total_zero_results: "결과 없음",
		total_one_result: "결과 [COUNT]건",
		total_many_results: "결과 [COUNT]건",
		alt_search: "[SEARCH_TERM]에 대한 결과 없음. [DIFFERENT_TERM]에 대한 결과",
		search_suggestion: "[SEARCH_TERM]에 대한 결과 없음. 추천 검색어: ",
		searching: "[SEARCH_TERM] 검색 중...",
		results_label: "검색 결과",
		keyboard_navigate: "이동",
		keyboard_select: "선택",
		keyboard_clear: "비우기",
		keyboard_close: "닫기",
		keyboard_search: "검색",
		error_search: "검색 실패",
		filter_selected_one: "[COUNT]개 선택됨",
		filter_selected_many: "[COUNT]개 선택됨",
		input_hint: "입력하는 동안 결과가 표시됩니다",
		loading: "로딩 중"
	}, Si = {
		thanks_to: ki,
		comments: Li,
		direction: Ri,
		strings: Wi
	};
	var ol = {};
	x(ol, {
		comments: () => Di,
		default: () => Hi,
		direction: () => Ti,
		strings: () => vi,
		thanks_to: () => Vi
	});
	var Vi = "", Di = "", Ti = "ltr", vi = {
		placeholder: "Rapu",
		clear_search: "Whakakore",
		load_more: "Whakauta ētahi otinga kē",
		search_label: "Rapu",
		filters_label: "Tātari",
		zero_results: "Otinga kore ki [SEARCH_TERM]",
		many_results: "[COUNT] otinga ki [SEARCH_TERM]",
		one_result: "[COUNT] otinga ki [SEARCH_TERM]",
		total_zero_results: "Kāore he otinga",
		total_one_result: "[COUNT] otinga",
		total_many_results: "[COUNT] ngā otinga",
		alt_search: "Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]",
		search_suggestion: "Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:",
		searching: "Rapu ki [SEARCH_TERM]...",
		results_label: "Ngā otinga rapu",
		keyboard_navigate: "whakatere",
		keyboard_select: "tīpako",
		keyboard_clear: "whakakore",
		keyboard_close: "kati",
		keyboard_search: "rapu",
		error_search: "Kāore i eke te rapu",
		filter_selected_one: "[COUNT] kua tīpakohia",
		filter_selected_many: "[COUNT] kua tīpakohia",
		input_hint: "Ka puta ngā otinga i a koe e patopato ana",
		loading: "E uta ana"
	}, Hi = {
		thanks_to: Vi,
		comments: Di,
		direction: Ti,
		strings: vi
	};
	var gl = {};
	x(gl, {
		comments: () => Yi,
		default: () => Ji,
		direction: () => wi,
		strings: () => zi,
		thanks_to: () => Mi
	});
	var Mi = "I90rche", Yi = "", wi = "ltr", zi = {
		placeholder: "Пребарај",
		clear_search: "Исчисти",
		load_more: "Вчитај повеќе резултати",
		search_label: "Пребарај ја веб-локацијата",
		filters_label: "Филтри",
		zero_results: "Нема резултати за [SEARCH_TERM]",
		many_results: "[COUNT] резултати за [SEARCH_TERM]",
		one_result: "[COUNT] резултат за [SEARCH_TERM]",
		total_zero_results: "Нема резултати",
		total_one_result: "[COUNT] резултат",
		total_many_results: "[COUNT] резултати",
		alt_search: "Нема резултати за [SEARCH_TERM]. Прикажани се резултати за [DIFFERENT_TERM]",
		search_suggestion: "Нема резултати за [SEARCH_TERM]. Обидете се со некое од следниве пребарувања:",
		searching: "Се пребарува [SEARCH_TERM]...",
		results_label: "Резултати од пребарувањето",
		keyboard_navigate: "навигација",
		keyboard_select: "избор",
		keyboard_clear: "чистење",
		keyboard_close: "затворање",
		keyboard_search: "пребарување",
		error_search: "Пребарувањето не успеа",
		filter_selected_one: "[COUNT] избран",
		filter_selected_many: "[COUNT] избрани",
		input_hint: "Резултатите ќе се појават додека пишувате",
		loading: "Се вчитува"
	}, Ji = {
		thanks_to: Mi,
		comments: Yi,
		direction: wi,
		strings: zi
	};
	var cl = {};
	x(cl, {
		comments: () => ji,
		default: () => qi,
		direction: () => Ki,
		strings: () => Pi,
		thanks_to: () => Oi
	});
	var Oi = "Harry Min Khant <https://harrymkt.github.io>", ji = "", Ki = "ltr", Pi = {
		placeholder: "ရှာရန်",
		clear_search: "ရှာဖွေမှုကို ရှင်းလင်းပါ။",
		load_more: "နောက်ထပ်ရလဒ်များကို တင်ပါ။",
		search_label: "ဤဆိုက်တွင်ရှာဖွေပါ။",
		filters_label: "စစ်ထုတ်မှုများ",
		zero_results: "[SEARCH_TERM] အတွက် ရလဒ်များ မရှိပါ",
		many_results: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT] ခု",
		one_result: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT]",
		total_zero_results: "ရလဒ်များ မရှိပါ",
		total_one_result: "ရလဒ် [COUNT] ခု",
		total_many_results: "ရလဒ် [COUNT] ခု",
		alt_search: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ ၎င်းအစား [DIFFERENT_TERM] အတွက် ရလဒ်များကို ပြသသည်။",
		search_suggestion: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ အောက်ပါရှာဖွေမှုများထဲမှ တစ်ခုကို စမ်းကြည့်ပါ:",
		searching: "[SEARCH_TERM] ကို ရှာဖွေနေသည်...",
		results_label: "ရှာဖွေမှု ရလဒ်များ",
		keyboard_navigate: "လမ်းညွှန်",
		keyboard_select: "ရွေးချယ်",
		keyboard_clear: "ရှင်းလင်း",
		keyboard_close: "ပိတ်",
		keyboard_search: "ရှာရန်",
		error_search: "ရှာဖွေမှု မအောင်မြင်ပါ",
		filter_selected_one: "[COUNT] ခု ရွေးချယ်ထားသည်",
		filter_selected_many: "[COUNT] ခု ရွေးချယ်ထားသည်",
		input_hint: "ရိုက်နေစဉ် ရလဒ်များ ပေါ်လာပါမည်",
		loading: "တင်နေသည်"
	}, qi = {
		thanks_to: Oi,
		comments: ji,
		direction: Ki,
		strings: Pi
	};
	var ul = {};
	x(ul, {
		comments: () => en,
		default: () => sn,
		direction: () => tn,
		strings: () => ln,
		thanks_to: () => $i
	});
	var $i = "Eirik Mikkelsen", en = "", tn = "ltr", ln = {
		placeholder: "Søk",
		clear_search: "Fjern",
		load_more: "Last flere resultater",
		search_label: "Søk på denne siden",
		filters_label: "Filtre",
		zero_results: "Ingen resultater for [SEARCH_TERM]",
		many_results: "[COUNT] resultater for [SEARCH_TERM]",
		one_result: "[COUNT] resultat for [SEARCH_TERM]",
		total_zero_results: "Ingen resultater",
		total_one_result: "[COUNT] resultat",
		total_many_results: "[COUNT] resultater",
		alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
		search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:",
		searching: "Søker etter [SEARCH_TERM]",
		results_label: "Søkeresultater",
		keyboard_navigate: "naviger",
		keyboard_select: "velg",
		keyboard_clear: "fjern",
		keyboard_close: "lukk",
		keyboard_search: "søk",
		error_search: "Søk feilet",
		filter_selected_one: "[COUNT] valgt",
		filter_selected_many: "[COUNT] valgte",
		input_hint: "Resultater vises mens du skriver",
		loading: "Laster"
	}, sn = {
		thanks_to: $i,
		comments: en,
		direction: tn,
		strings: ln
	};
	var Cl = {};
	x(Cl, {
		comments: () => rn,
		default: () => gn,
		direction: () => nn,
		strings: () => on,
		thanks_to: () => an
	});
	var an = "Paul van Brouwershaven", rn = "", nn = "ltr", on = {
		placeholder: "Zoeken",
		clear_search: "Reset",
		load_more: "Meer resultaten laden",
		search_label: "Doorzoek deze site",
		filters_label: "Filters",
		zero_results: "Geen resultaten voor [SEARCH_TERM]",
		many_results: "[COUNT] resultaten voor [SEARCH_TERM]",
		one_result: "[COUNT] resultaat voor [SEARCH_TERM]",
		total_zero_results: "Geen resultaten",
		total_one_result: "[COUNT] resultaat",
		total_many_results: "[COUNT] resultaten",
		alt_search: "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven",
		search_suggestion: "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:",
		searching: "Zoeken naar [SEARCH_TERM]...",
		results_label: "Zoekresultaten",
		keyboard_navigate: "navigeren",
		keyboard_select: "selecteren",
		keyboard_clear: "wissen",
		keyboard_close: "sluiten",
		keyboard_search: "zoeken",
		error_search: "Zoeken mislukt",
		filter_selected_one: "[COUNT] geselecteerd",
		filter_selected_many: "[COUNT] geselecteerd",
		input_hint: "Resultaten verschijnen terwijl u typt",
		loading: "Laden"
	}, gn = {
		thanks_to: an,
		comments: rn,
		direction: nn,
		strings: on
	};
	var Il = {};
	x(Il, {
		comments: () => un,
		default: () => dn,
		direction: () => Cn,
		strings: () => In,
		thanks_to: () => cn
	});
	var cn = "Eirik Mikkelsen", un = "", Cn = "ltr", In = {
		placeholder: "Søk",
		clear_search: "Fjern",
		load_more: "Last fleire resultat",
		search_label: "Søk på denne sida",
		filters_label: "Filter",
		zero_results: "Ingen resultat for [SEARCH_TERM]",
		many_results: "[COUNT] resultat for [SEARCH_TERM]",
		one_result: "[COUNT] resultat for [SEARCH_TERM]",
		total_zero_results: "Ingen resultat",
		total_one_result: "[COUNT] resultat",
		total_many_results: "[COUNT] resultat",
		alt_search: "Ingen resultat for [SEARCH_TERM]. Viser resultat for [DIFFERENT_TERM] i staden",
		search_suggestion: "Ingen resultat for [SEARCH_TERM]. Prøv eitt av desse søkeorda i staden:",
		searching: "Søker etter [SEARCH_TERM]",
		results_label: "Søkeresultat",
		keyboard_navigate: "naviger",
		keyboard_select: "vel",
		keyboard_clear: "fjern",
		keyboard_close: "lukk",
		keyboard_search: "søk",
		error_search: "Søk feila",
		filter_selected_one: "[COUNT] vald",
		filter_selected_many: "[COUNT] valde",
		input_hint: "Resultat visast medan du skriv",
		loading: "Lastar"
	}, dn = {
		thanks_to: cn,
		comments: un,
		direction: Cn,
		strings: In
	};
	var dl = {};
	x(dl, {
		comments: () => _n,
		default: () => bn,
		direction: () => Qn,
		strings: () => mn,
		thanks_to: () => An
	});
	var An = "Christopher Wingate", _n = "", Qn = "ltr", mn = {
		placeholder: "Søk",
		clear_search: "Fjern",
		load_more: "Last flere resultater",
		search_label: "Søk på denne siden",
		filters_label: "Filtre",
		zero_results: "Ingen resultater for [SEARCH_TERM]",
		many_results: "[COUNT] resultater for [SEARCH_TERM]",
		one_result: "[COUNT] resultat for [SEARCH_TERM]",
		total_zero_results: "Ingen resultater",
		total_one_result: "[COUNT] resultat",
		total_many_results: "[COUNT] resultater",
		alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
		search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:",
		searching: "Søker etter [SEARCH_TERM]",
		results_label: "Søkeresultater",
		keyboard_navigate: "naviger",
		keyboard_select: "velg",
		keyboard_clear: "fjern",
		keyboard_close: "lukk",
		keyboard_search: "søk",
		error_search: "Søk feilet",
		filter_selected_one: "[COUNT] valgt",
		filter_selected_many: "[COUNT] valgte",
		input_hint: "Resultater vises mens du skriver",
		loading: "Laster"
	}, bn = {
		thanks_to: An,
		comments: _n,
		direction: Qn,
		strings: mn
	};
	var Al = {};
	x(Al, {
		comments: () => pn,
		default: () => hn,
		direction: () => Fn,
		strings: () => Bn,
		thanks_to: () => fn
	});
	var fn = "", pn = "", Fn = "ltr", Bn = {
		placeholder: "Szukaj",
		clear_search: "Wyczyść",
		load_more: "Załaduj więcej",
		search_label: "Przeszukaj tę stronę",
		filters_label: "Filtry",
		zero_results: "Brak wyników dla [SEARCH_TERM]",
		many_results: "[COUNT] wyników dla [SEARCH_TERM]",
		one_result: "[COUNT] wynik dla [SEARCH_TERM]",
		total_zero_results: "Brak wyników",
		total_one_result: "[COUNT] wynik",
		total_many_results: "[COUNT] wyników",
		alt_search: "Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]",
		search_suggestion: "Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:",
		searching: "Szukam [SEARCH_TERM]...",
		results_label: "Wyniki wyszukiwania",
		keyboard_navigate: "nawiguj",
		keyboard_select: "wybierz",
		keyboard_clear: "wyczyść",
		keyboard_close: "zamknij",
		keyboard_search: "szukaj",
		error_search: "Wyszukiwanie nie powiodło się",
		filter_selected_one: "[COUNT] wybrany",
		filter_selected_many: "[COUNT] wybranych",
		input_hint: "Wyniki pojawią się podczas pisania",
		loading: "Ładowanie"
	}, hn = {
		thanks_to: fn,
		comments: pn,
		direction: Fn,
		strings: Bn
	};
	var _l = {};
	x(_l, {
		comments: () => xn,
		default: () => Gn,
		direction: () => yn,
		strings: () => Zn,
		thanks_to: () => Un
	});
	var Un = "Jonatah", xn = "", yn = "ltr", Zn = {
		placeholder: "Pesquisar",
		clear_search: "Limpar",
		load_more: "Ver mais resultados",
		search_label: "Pesquisar",
		filters_label: "Filtros",
		zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
		many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
		one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
		total_zero_results: "Nenhum resultado",
		total_one_result: "[COUNT] resultado",
		total_many_results: "[COUNT] resultados",
		alt_search: "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
		search_suggestion: "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
		searching: "Pesquisando por [SEARCH_TERM]...",
		results_label: "Resultados da pesquisa",
		keyboard_navigate: "navegar",
		keyboard_select: "selecionar",
		keyboard_clear: "limpar",
		keyboard_close: "fechar",
		keyboard_search: "pesquisar",
		error_search: "Falha na pesquisa",
		filter_selected_one: "[COUNT] selecionado",
		filter_selected_many: "[COUNT] selecionados",
		input_hint: "Os resultados aparecerão enquanto você digita",
		loading: "Carregando"
	}, Gn = {
		thanks_to: Un,
		comments: xn,
		direction: yn,
		strings: Zn
	};
	var Ql = {};
	x(Ql, {
		comments: () => En,
		default: () => Ln,
		direction: () => Xn,
		strings: () => kn,
		thanks_to: () => Nn
	});
	var Nn = "Bogdan Mateescu <bogdan@surfverse.com>", En = "", Xn = "ltr", kn = {
		placeholder: "Căutare",
		clear_search: "Ştergeţi",
		load_more: "Încărcați mai multe rezultate",
		search_label: "Căutați în acest site",
		filters_label: "Filtre",
		zero_results: "Niciun rezultat pentru [SEARCH_TERM]",
		many_results: "[COUNT] rezultate pentru [SEARCH_TERM]",
		one_result: "[COUNT] rezultat pentru [SEARCH_TERM]",
		total_zero_results: "Niciun rezultat",
		total_one_result: "[COUNT] rezultat",
		total_many_results: "[COUNT] rezultate",
		alt_search: "Niciun rezultat pentru [SEARCH_TERM]. Se afișează în schimb rezultatele pentru [DIFFERENT_TERM]",
		search_suggestion: "Niciun rezultat pentru [SEARCH_TERM]. Încercați una dintre următoarele căutări:",
		searching: "Se caută după: [SEARCH_TERM]...",
		results_label: "Rezultatele căutării",
		keyboard_navigate: "navigare",
		keyboard_select: "selectare",
		keyboard_clear: "ștergere",
		keyboard_close: "închidere",
		keyboard_search: "căutare",
		error_search: "Căutarea a eșuat",
		filter_selected_one: "[COUNT] selectat",
		filter_selected_many: "[COUNT] selectate",
		input_hint: "Rezultatele vor apărea pe măsură ce tastați",
		loading: "Se încarcă"
	}, Ln = {
		thanks_to: Nn,
		comments: En,
		direction: Xn,
		strings: kn
	};
	var ml = {};
	x(ml, {
		comments: () => Wn,
		default: () => Dn,
		direction: () => Sn,
		strings: () => Vn,
		thanks_to: () => Rn
	});
	var Rn = "Aleksandr Gordeev", Wn = "", Sn = "ltr", Vn = {
		placeholder: "Поиск",
		clear_search: "Очистить поле",
		load_more: "Загрузить еще",
		search_label: "Поиск по сайту",
		filters_label: "Фильтры",
		zero_results: "Ничего не найдено по запросу: [SEARCH_TERM]",
		many_results: "[COUNT] результатов по запросу: [SEARCH_TERM]",
		one_result: "[COUNT] результат по запросу: [SEARCH_TERM]",
		total_zero_results: "Ничего не найдено",
		total_one_result: "[COUNT] результат",
		total_many_results: "[COUNT] результатов",
		alt_search: "Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]",
		search_suggestion: "Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов",
		searching: "Поиск по запросу: [SEARCH_TERM]",
		results_label: "Результаты поиска",
		keyboard_navigate: "навигация",
		keyboard_select: "выбрать",
		keyboard_clear: "очистить",
		keyboard_close: "закрыть",
		keyboard_search: "поиск",
		error_search: "Ошибка поиска",
		filter_selected_one: "[COUNT] выбран",
		filter_selected_many: "[COUNT] выбрано",
		input_hint: "Результаты будут появляться по мере ввода",
		loading: "Загрузка"
	}, Dn = {
		thanks_to: Rn,
		comments: Wn,
		direction: Sn,
		strings: Vn
	};
	var bl = {};
	x(bl, {
		comments: () => vn,
		default: () => Yn,
		direction: () => Hn,
		strings: () => Mn,
		thanks_to: () => Tn
	});
	var Tn = "Andrija Sagicc", vn = "", Hn = "ltr", Mn = {
		placeholder: "Претрага",
		clear_search: "Брисање",
		load_more: "Приказ више резултата",
		search_label: "Претрага сајта",
		filters_label: "Филтери",
		zero_results: "Нема резултата за [SEARCH_TERM]",
		many_results: "[COUNT] резултата за [SEARCH_TERM]",
		one_result: "[COUNT] резултата за [SEARCH_TERM]",
		total_zero_results: "Нема резултата",
		total_one_result: "[COUNT] резултат",
		total_many_results: "[COUNT] резултата",
		alt_search: "Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]",
		search_suggestion: "Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:",
		searching: "Претрага термина [SEARCH_TERM]...",
		results_label: "Резултати претраге",
		keyboard_navigate: "навигација",
		keyboard_select: "изабери",
		keyboard_clear: "обриши",
		keyboard_close: "затвори",
		keyboard_search: "претрага",
		error_search: "Претрага није успела",
		filter_selected_one: "[COUNT] изабран",
		filter_selected_many: "[COUNT] изабраних",
		input_hint: "Резултати ће се појављивати док куцате",
		loading: "Учитавање"
	}, Yn = {
		thanks_to: Tn,
		comments: vn,
		direction: Hn,
		strings: Mn
	};
	var fl = {};
	x(fl, {
		comments: () => zn,
		default: () => jn,
		direction: () => Jn,
		strings: () => On,
		thanks_to: () => wn
	});
	var wn = "Montazar Al-Jaber <montazar@nanawee.tech>", zn = "", Jn = "ltr", On = {
		placeholder: "Sök",
		clear_search: "Rensa",
		load_more: "Visa fler träffar",
		search_label: "Sök på denna sida",
		filters_label: "Filter",
		zero_results: "[SEARCH_TERM] gav inga träffar",
		many_results: "[SEARCH_TERM] gav [COUNT] träffar",
		one_result: "[SEARCH_TERM] gav [COUNT] träff",
		total_zero_results: "Inga träffar",
		total_one_result: "[COUNT] träff",
		total_many_results: "[COUNT] träffar",
		alt_search: "[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället",
		search_suggestion: "[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:",
		searching: "Söker efter [SEARCH_TERM]...",
		results_label: "Sökresultat",
		keyboard_navigate: "navigera",
		keyboard_select: "välj",
		keyboard_clear: "rensa",
		keyboard_close: "stäng",
		keyboard_search: "sök",
		error_search: "Sökningen misslyckades",
		filter_selected_one: "[COUNT] vald",
		filter_selected_many: "[COUNT] valda",
		input_hint: "Resultat visas medan du skriver",
		loading: "Läser in"
	}, jn = {
		thanks_to: wn,
		comments: zn,
		direction: Jn,
		strings: On
	};
	var pl = {};
	x(pl, {
		comments: () => Pn,
		default: () => eo,
		direction: () => qn,
		strings: () => $n,
		thanks_to: () => Kn
	});
	var Kn = "Anonymous", Pn = "", qn = "ltr", $n = {
		placeholder: "Tafuta",
		clear_search: "Futa",
		load_more: "Pakia matokeo zaidi",
		search_label: "Tafuta kwenye tovuti hii",
		filters_label: "Vichujio",
		zero_results: "Hakuna matokeo ya [SEARCH_TERM]",
		many_results: "Matokeo [COUNT] ya [SEARCH_TERM]",
		one_result: "Tokeo [COUNT] la [SEARCH_TERM]",
		total_zero_results: "Hakuna matokeo",
		total_one_result: "Tokeo [COUNT]",
		total_many_results: "Matokeo [COUNT]",
		alt_search: "Hakuna matokeo ya [SEARCH_TERM]. Badala yake, matokeo ya [DIFFERENT_TERM] yanaonyeshwa",
		search_suggestion: "Hakuna matokeo ya [SEARCH_TERM]. Jaribu mojawapo ya utafutaji ufuatao:",
		searching: "Inatafuta [SEARCH_TERM]...",
		results_label: "Matokeo ya utafutaji",
		keyboard_navigate: "sogeza",
		keyboard_select: "chagua",
		keyboard_clear: "futa",
		keyboard_close: "funga",
		keyboard_search: "tafuta",
		error_search: "Utafutaji umeshindikana",
		filter_selected_one: "[COUNT] kimechaguliwa",
		filter_selected_many: "[COUNT] vimechaguliwa",
		input_hint: "Matokeo yataonekana unapoandika",
		loading: "Inapakia"
	}, eo = {
		thanks_to: Kn,
		comments: Pn,
		direction: qn,
		strings: $n
	};
	var Fl = {};
	x(Fl, {
		comments: () => lo,
		default: () => ro,
		direction: () => so,
		strings: () => ao,
		thanks_to: () => to
	});
	var to = "", lo = "", so = "ltr", ao = {
		placeholder: "தேடுக",
		clear_search: "அழிக்குக",
		load_more: "மேலும் முடிவுகளைக் காட்டுக",
		search_label: "இந்த தளத்தில் தேடுக",
		filters_label: "வடிகட்டல்கள்",
		zero_results: "[SEARCH_TERM] க்கான முடிவுகள் இல்லை",
		many_results: "[SEARCH_TERM] க்கான [COUNT] முடிவுகள்",
		one_result: "[SEARCH_TERM] க்கான முடிவு",
		total_zero_results: "முடிவுகள் இல்லை",
		total_one_result: "[COUNT] முடிவு",
		total_many_results: "[COUNT] முடிவுகள்",
		alt_search: "[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]",
		search_suggestion: "[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:",
		searching: "[SEARCH_TERM] தேடப்படுகின்றது",
		results_label: "தேடல் முடிவுகள்",
		keyboard_navigate: "வழிநடத்து",
		keyboard_select: "தேர்ந்தெடு",
		keyboard_clear: "அழி",
		keyboard_close: "மூடு",
		keyboard_search: "தேடு",
		error_search: "தேடல் தோல்வி",
		filter_selected_one: "[COUNT] தேர்ந்தெடுக்கப்பட்டது",
		filter_selected_many: "[COUNT] தேர்ந்தெடுக்கப்பட்டன",
		input_hint: "நீங்கள் தட்டச்சு செய்யும்போது முடிவுகள் தோன்றும்",
		loading: "ஏற்றுகிறது"
	}, ro = {
		thanks_to: to,
		comments: lo,
		direction: so,
		strings: ao
	};
	var Bl = {};
	x(Bl, {
		comments: () => no,
		default: () => co,
		direction: () => oo,
		strings: () => go,
		thanks_to: () => io
	});
	var io = "Patiphon Loetsuthakun <ptphon@gmail.com>", no = "", oo = "ltr", go = {
		placeholder: "ค้นหา",
		clear_search: "ล้าง",
		load_more: "โหลดผลลัพธ์เพิ่มเติม",
		search_label: "ค้นหาบนเว็บไซต์",
		filters_label: "ตัวกรอง",
		zero_results: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM]",
		many_results: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]",
		one_result: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]",
		total_zero_results: "ไม่พบผลลัพธ์",
		total_one_result: "[COUNT] ผลลัพธ์",
		total_many_results: "[COUNT] ผลลัพธ์",
		alt_search: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] แสดงผลลัพธ์จากการค้นหา [DIFFERENT_TERM] แทน",
		search_suggestion: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] ลองคำค้นหาเหล่านี้แทน:",
		searching: "กำลังค้นหา [SEARCH_TERM]...",
		results_label: "ผลการค้นหา",
		keyboard_navigate: "นำทาง",
		keyboard_select: "เลือก",
		keyboard_clear: "ล้าง",
		keyboard_close: "ปิด",
		keyboard_search: "ค้นหา",
		error_search: "การค้นหาล้มเหลว",
		filter_selected_one: "เลือกแล้ว [COUNT] รายการ",
		filter_selected_many: "เลือกแล้ว [COUNT] รายการ",
		input_hint: "ผลลัพธ์จะปรากฏขณะที่คุณพิมพ์",
		loading: "กำลังโหลด"
	}, co = {
		thanks_to: io,
		comments: no,
		direction: oo,
		strings: go
	};
	var hl = {};
	x(hl, {
		comments: () => Co,
		default: () => _o,
		direction: () => Io,
		strings: () => Ao,
		thanks_to: () => uo
	});
	var uo = "Taylan Özgür Bildik", Co = "", Io = "ltr", Ao = {
		placeholder: "Araştır",
		clear_search: "Temizle",
		load_more: "Daha fazla sonuç",
		search_label: "Site genelinde arama",
		filters_label: "Filtreler",
		zero_results: "[SEARCH_TERM] için sonuç yok",
		many_results: "[SEARCH_TERM] için [COUNT] sonuç bulundu",
		one_result: "[SEARCH_TERM] için [COUNT] sonuç bulundu",
		total_zero_results: "Sonuç yok",
		total_one_result: "[COUNT] sonuç",
		total_many_results: "[COUNT] sonuç",
		alt_search: "[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor",
		search_suggestion: "[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:",
		searching: "[SEARCH_TERM] araştırılıyor...",
		results_label: "Arama sonuçları",
		keyboard_navigate: "gezin",
		keyboard_select: "seç",
		keyboard_clear: "temizle",
		keyboard_close: "kapat",
		keyboard_search: "ara",
		error_search: "Arama başarısız",
		filter_selected_one: "[COUNT] seçili",
		filter_selected_many: "[COUNT] seçili",
		input_hint: "Sonuçlar siz yazarken görünecektir",
		loading: "Yükleniyor"
	}, _o = {
		thanks_to: uo,
		comments: Co,
		direction: Io,
		strings: Ao
	};
	var Ul = {};
	x(Ul, {
		comments: () => mo,
		default: () => po,
		direction: () => bo,
		strings: () => fo,
		thanks_to: () => Qo
	});
	var Qo = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>", mo = "", bo = "ltr", fo = {
		placeholder: "Пошук",
		clear_search: "Очистити поле",
		load_more: "Завантажити ще",
		search_label: "Пошук по сайту",
		filters_label: "Фільтри",
		zero_results: "Нічого не знайдено за запитом: [SEARCH_TERM]",
		many_results: "[COUNT] результатів на запит: [SEARCH_TERM]",
		one_result: "[COUNT] результат за запитом: [SEARCH_TERM]",
		total_zero_results: "Нічого не знайдено",
		total_one_result: "[COUNT] результат",
		total_many_results: "[COUNT] результатів",
		alt_search: "Нічого не знайдено на запит: [SEARCH_TERM]. Показано результати на запит: [DIFFERENT_TERM]",
		search_suggestion: "Нічого не знайдено на запит: [SEARCH_TERM]. Спробуйте один із таких варіантів",
		searching: "Пошук за запитом: [SEARCH_TERM]",
		results_label: "Результати пошуку",
		keyboard_navigate: "навігація",
		keyboard_select: "вибрати",
		keyboard_clear: "очистити",
		keyboard_close: "закрити",
		keyboard_search: "пошук",
		error_search: "Помилка пошуку",
		filter_selected_one: "[COUNT] вибрано",
		filter_selected_many: "[COUNT] вибрано",
		input_hint: "Результати з'являтимуться під час введення",
		loading: "Завантаження"
	}, po = {
		thanks_to: Qo,
		comments: mo,
		direction: bo,
		strings: fo
	};
	var xl = {};
	x(xl, {
		comments: () => Bo,
		default: () => xo,
		direction: () => ho,
		strings: () => Uo,
		thanks_to: () => Fo
	});
	var Fo = "Long Nhat Nguyen", Bo = "", ho = "ltr", Uo = {
		placeholder: "Tìm kiếm",
		clear_search: "Xóa",
		load_more: "Nhiều kết quả hơn",
		search_label: "Tìm kiếm trong trang này",
		filters_label: "Bộ lọc",
		zero_results: "Không tìm thấy kết quả cho [SEARCH_TERM]",
		many_results: "[COUNT] kết quả cho [SEARCH_TERM]",
		one_result: "[COUNT] kết quả cho [SEARCH_TERM]",
		total_zero_results: "Không có kết quả",
		total_one_result: "[COUNT] kết quả",
		total_many_results: "[COUNT] kết quả",
		alt_search: "Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]",
		search_suggestion: "Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:",
		searching: "Đang tìm kiếm cho [SEARCH_TERM]...",
		results_label: "Kết quả tìm kiếm",
		keyboard_navigate: "chuyển",
		keyboard_select: "chọn",
		keyboard_clear: "xóa",
		keyboard_close: "đóng",
		keyboard_search: "tìm kiếm",
		error_search: "Tìm kiếm thất bại",
		filter_selected_one: "Đã chọn [COUNT]",
		filter_selected_many: "Đã chọn [COUNT]",
		input_hint: "Kết quả sẽ xuất hiện khi bạn nhập",
		loading: "Đang tải"
	}, xo = {
		thanks_to: Fo,
		comments: Bo,
		direction: ho,
		strings: Uo
	};
	var yl = {};
	x(yl, {
		comments: () => Zo,
		default: () => Eo,
		direction: () => Go,
		strings: () => No,
		thanks_to: () => yo
	});
	var yo = "Amber Song", Zo = "", Go = "ltr", No = {
		placeholder: "搜索",
		clear_search: "清除",
		load_more: "加载更多结果",
		search_label: "站内搜索",
		filters_label: "筛选",
		zero_results: "未找到 [SEARCH_TERM] 的相关结果",
		many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
		one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
		total_zero_results: "无结果",
		total_one_result: "[COUNT] 个结果",
		total_many_results: "[COUNT] 个结果",
		alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果",
		search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。",
		searching: "正在搜索 [SEARCH_TERM]...",
		results_label: "搜索结果",
		keyboard_navigate: "导航",
		keyboard_select: "选择",
		keyboard_clear: "清除",
		keyboard_close: "关闭",
		keyboard_search: "搜索",
		error_search: "搜索失败",
		filter_selected_one: "已选择 [COUNT] 个",
		filter_selected_many: "已选择 [COUNT] 个",
		input_hint: "输入时将显示结果",
		loading: "加载中"
	}, Eo = {
		thanks_to: yo,
		comments: Zo,
		direction: Go,
		strings: No
	};
	var Zl = {};
	x(Zl, {
		comments: () => ko,
		default: () => Wo,
		direction: () => Lo,
		strings: () => Ro,
		thanks_to: () => Xo
	});
	var Xo = "Amber Song", ko = "", Lo = "ltr", Ro = {
		placeholder: "搜尋",
		clear_search: "清除",
		load_more: "載入更多結果",
		search_label: "站內搜尋",
		filters_label: "篩選",
		zero_results: "找不到 [SEARCH_TERM] 的相關結果",
		many_results: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果",
		one_result: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果",
		total_zero_results: "無結果",
		total_one_result: "[COUNT] 個結果",
		total_many_results: "[COUNT] 個結果",
		alt_search: "未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果",
		search_suggestion: "找不到 [SEARCH_TERM] 的相關結果。請嘗試以下的建議之一。",
		searching: "正在搜尋[SEARCH_TERM]...",
		results_label: "搜尋結果",
		keyboard_navigate: "導覽",
		keyboard_select: "選擇",
		keyboard_clear: "清除",
		keyboard_close: "關閉",
		keyboard_search: "搜尋",
		error_search: "搜尋失敗",
		filter_selected_one: "已選擇 [COUNT] 個",
		filter_selected_many: "已選擇 [COUNT] 個",
		input_hint: "輸入時將顯示結果",
		loading: "載入中"
	}, Wo = {
		thanks_to: Xo,
		comments: ko,
		direction: Lo,
		strings: Ro
	};
	var Gl = {};
	x(Gl, {
		comments: () => Vo,
		default: () => vo,
		direction: () => Do,
		strings: () => To,
		thanks_to: () => So
	});
	var So = "Amber Song", Vo = "", Do = "ltr", To = {
		placeholder: "搜索",
		clear_search: "清除",
		load_more: "加载更多结果",
		search_label: "站内搜索",
		filters_label: "筛选",
		zero_results: "未找到 [SEARCH_TERM] 的相关结果",
		many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
		one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
		total_zero_results: "无结果",
		total_one_result: "[COUNT] 个结果",
		total_many_results: "[COUNT] 个结果",
		alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果",
		search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。",
		searching: "正在搜索 [SEARCH_TERM]...",
		results_label: "搜索结果",
		keyboard_navigate: "导航",
		keyboard_select: "选择",
		keyboard_clear: "清除",
		keyboard_close: "关闭",
		keyboard_search: "搜索",
		error_search: "搜索失败",
		filter_selected_one: "已选择 [COUNT] 个",
		filter_selected_many: "已选择 [COUNT] 个",
		input_hint: "输入时将显示结果",
		loading: "加载中"
	}, vo = {
		thanks_to: So,
		comments: Vo,
		direction: Do,
		strings: To
	};
	var Ho = [
		Vt,
		Dt,
		Tt,
		vt,
		Ht,
		Mt,
		Yt,
		wt,
		zt,
		Jt,
		Ot,
		jt,
		Kt,
		Pt,
		qt,
		$t,
		el,
		tl,
		ll,
		sl,
		al,
		rl,
		il,
		nl,
		ol,
		gl,
		cl,
		ul,
		Cl,
		Il,
		dl,
		Al,
		_l,
		Ql,
		ml,
		bl,
		fl,
		pl,
		Fl,
		Bl,
		hl,
		Ul,
		xl,
		yl,
		Zl,
		Gl
	], Gs = Ho, Ns = [
		"../../translations/af.json",
		"../../translations/ar.json",
		"../../translations/bg.json",
		"../../translations/bn.json",
		"../../translations/ca.json",
		"../../translations/cs.json",
		"../../translations/da.json",
		"../../translations/de.json",
		"../../translations/el.json",
		"../../translations/en.json",
		"../../translations/es.json",
		"../../translations/eu.json",
		"../../translations/fa.json",
		"../../translations/fi.json",
		"../../translations/fr.json",
		"../../translations/gl.json",
		"../../translations/he.json",
		"../../translations/hi.json",
		"../../translations/hr.json",
		"../../translations/hu.json",
		"../../translations/id.json",
		"../../translations/it.json",
		"../../translations/ja.json",
		"../../translations/ko.json",
		"../../translations/mi.json",
		"../../translations/mk.json",
		"../../translations/my.json",
		"../../translations/nb.json",
		"../../translations/nl.json",
		"../../translations/nn.json",
		"../../translations/no.json",
		"../../translations/pl.json",
		"../../translations/pt.json",
		"../../translations/ro.json",
		"../../translations/ru.json",
		"../../translations/sr.json",
		"../../translations/sv.json",
		"../../translations/sw.json",
		"../../translations/ta.json",
		"../../translations/th.json",
		"../../translations/tr.json",
		"../../translations/uk.json",
		"../../translations/vi.json",
		"../../translations/zh-cn.json",
		"../../translations/zh-tw.json",
		"../../translations/zh.json"
	];
	function Es(l, e, t) {
		let s = l.slice();
		return s[53] = e[t], s;
	}
	function Xs(l) {
		let e, t, s;
		function a(r) {
			l[38](r);
		}
		let i = {
			show_empty_filters: l[5],
			open_filters: l[6],
			available_filters: l[18],
			translate: l[20],
			automatic_translations: l[19],
			translations: l[7]
		};
		return l[0] !== void 0 && (i.selected_filters = l[0]), e = new Zs({ props: i }), Ce.push(() => ql(e, "selected_filters", a)), {
			c() {
				mt(e.$$.fragment);
			},
			m(r, o) {
				_e(e, r, o), s = !0;
			},
			p(r, o) {
				let n = {};
				o[0] & 32 && (n.show_empty_filters = r[5]), o[0] & 64 && (n.open_filters = r[6]), o[0] & 262144 && (n.available_filters = r[18]), o[0] & 524288 && (n.automatic_translations = r[19]), o[0] & 128 && (n.translations = r[7]), !t && o[0] & 1 && (t = !0, n.selected_filters = r[0], Ol(() => t = !1)), e.$set(n);
			},
			i(r) {
				s || (k(e.$$.fragment, r), s = !0);
			},
			o(r) {
				D(e.$$.fragment, r), s = !1;
			},
			d(r) {
				Qe(e, r);
			}
		};
	}
	function ks(l) {
		let e, t, s, a, i = [wo, Yo], r = [];
		function o(n, g) {
			return n[14] ? 0 : 1;
		}
		return t = o(l, [-1, -1]), s = r[t] = i[t](l), {
			c() {
				e = p("div"), s.c(), _(e, "class", "pagefind-ui__results-area svelte-e9gkc3");
			},
			m(n, g) {
				h(n, e, g), r[t].m(e, null), a = !0;
			},
			p(n, g) {
				let c = t;
				t = o(n, g), t === c ? r[t].p(n, g) : (ae(), D(r[c], 1, 1, () => {
					r[c] = null;
				}), re(), s = r[t], s ? s.p(n, g) : (s = r[t] = i[t](n), s.c()), k(s, 1), s.m(e, null));
			},
			i(n) {
				a || (k(s), a = !0);
			},
			o(n) {
				D(s), a = !1;
			},
			d(n) {
				n && B(e), r[t].d();
			}
		};
	}
	function Yo(l) {
		let e, t, s, a = [], i = new Map(), r, o, n;
		function g(I, m) {
			return I[13].results.length === 0 ? Oo : I[13].results.length === 1 ? Jo : zo;
		}
		let c = g(l, [-1, -1]), A = c(l), C = V(l[13].results.slice(0, l[17])), d = (I) => I[53].id;
		for (let I = 0; I < C.length; I += 1) {
			let m = Es(l, C, I), f = d(m);
			i.set(f, a[I] = Ls(f, m));
		}
		let u = l[13].results.length > l[17] && Rs(l);
		return {
			c() {
				e = p("p"), A.c(), t = Z(), s = p("ol");
				for (let I = 0; I < a.length; I += 1) a[I].c();
				r = Z(), u && u.c(), o = ee(), _(e, "class", "pagefind-ui__message svelte-e9gkc3"), _(s, "class", "pagefind-ui__results svelte-e9gkc3");
			},
			m(I, m) {
				h(I, e, m), A.m(e, null), h(I, t, m), h(I, s, m);
				for (let f = 0; f < a.length; f += 1) a[f] && a[f].m(s, null);
				h(I, r, m), u && u.m(I, m), h(I, o, m), n = !0;
			},
			p(I, m) {
				c === (c = g(I, m)) && A ? A.p(I, m) : (A.d(1), A = c(I), A && (A.c(), A.m(e, null))), m[0] & 139292 && (C = V(I[13].results.slice(0, I[17])), ae(), a = Pl(a, m, d, 1, I, C, i, s, Kl, Ls, null, Es), re()), I[13].results.length > I[17] ? u ? u.p(I, m) : (u = Rs(I), u.c(), u.m(o.parentNode, o)) : u && (u.d(1), u = null);
			},
			i(I) {
				if (!n) {
					for (let m = 0; m < C.length; m += 1) k(a[m]);
					n = !0;
				}
			},
			o(I) {
				for (let m = 0; m < a.length; m += 1) D(a[m]);
				n = !1;
			},
			d(I) {
				I && (B(e), B(t), B(s), B(r), B(o)), A.d();
				for (let m = 0; m < a.length; m += 1) a[m].d();
				u && u.d(I);
			}
		};
	}
	function wo(l) {
		let e, t = l[16] && Ws(l);
		return {
			c() {
				t && t.c(), e = ee();
			},
			m(s, a) {
				t && t.m(s, a), h(s, e, a);
			},
			p(s, a) {
				s[16] ? t ? t.p(s, a) : (t = Ws(s), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
			},
			i: R,
			o: R,
			d(s) {
				s && B(e), t && t.d(s);
			}
		};
	}
	function zo(l) {
		let e = l[20]("many_results", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(l[7].language || l[19].language).format(l[13].results.length)) + "", t;
		return {
			c() {
				t = G(e);
			},
			m(s, a) {
				h(s, t, a);
			},
			p(s, a) {
				a[0] & 598144 && e !== (e = s[20]("many_results", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(s[7].language || s[19].language).format(s[13].results.length)) + "") && W(t, e);
			},
			d(s) {
				s && B(t);
			}
		};
	}
	function Jo(l) {
		let e = l[20]("one_result", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(l[7].language || l[19].language).format(1)) + "", t;
		return {
			c() {
				t = G(e);
			},
			m(s, a) {
				h(s, t, a);
			},
			p(s, a) {
				a[0] & 589952 && e !== (e = s[20]("one_result", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]).replace(/\[COUNT\]/, new Intl.NumberFormat(s[7].language || s[19].language).format(1)) + "") && W(t, e);
			},
			d(s) {
				s && B(t);
			}
		};
	}
	function Oo(l) {
		let e = l[20]("zero_results", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]) + "", t;
		return {
			c() {
				t = G(e);
			},
			m(s, a) {
				h(s, t, a);
			},
			p(s, a) {
				a[0] & 589952 && e !== (e = s[20]("zero_results", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]) + "") && W(t, e);
			},
			d(s) {
				s && B(t);
			}
		};
	}
	function jo(l) {
		let e, t;
		return e = new os({ props: {
			show_images: l[2],
			process_result: l[4],
			result: l[53]
		} }), {
			c() {
				mt(e.$$.fragment);
			},
			m(s, a) {
				_e(e, s, a), t = !0;
			},
			p(s, a) {
				let i = {};
				a[0] & 4 && (i.show_images = s[2]), a[0] & 16 && (i.process_result = s[4]), a[0] & 139264 && (i.result = s[53]), e.$set(i);
			},
			i(s) {
				t || (k(e.$$.fragment, s), t = !0);
			},
			o(s) {
				D(e.$$.fragment, s), t = !1;
			},
			d(s) {
				Qe(e, s);
			}
		};
	}
	function Ko(l) {
		let e, t;
		return e = new bs({ props: {
			show_images: l[2],
			process_result: l[4],
			result: l[53]
		} }), {
			c() {
				mt(e.$$.fragment);
			},
			m(s, a) {
				_e(e, s, a), t = !0;
			},
			p(s, a) {
				let i = {};
				a[0] & 4 && (i.show_images = s[2]), a[0] & 16 && (i.process_result = s[4]), a[0] & 139264 && (i.result = s[53]), e.$set(i);
			},
			i(s) {
				t || (k(e.$$.fragment, s), t = !0);
			},
			o(s) {
				D(e.$$.fragment, s), t = !1;
			},
			d(s) {
				Qe(e, s);
			}
		};
	}
	function Ls(l, e) {
		let t, s, a, i, r, o = [Ko, jo], n = [];
		function g(c, A) {
			return c[3] ? 0 : 1;
		}
		return s = g(e, [-1, -1]), a = n[s] = o[s](e), {
			key: l,
			first: null,
			c() {
				t = ee(), a.c(), i = ee(), this.first = t;
			},
			m(c, A) {
				h(c, t, A), n[s].m(c, A), h(c, i, A), r = !0;
			},
			p(c, A) {
				e = c;
				let C = s;
				s = g(e, A), s === C ? n[s].p(e, A) : (ae(), D(n[C], 1, 1, () => {
					n[C] = null;
				}), re(), a = n[s], a ? a.p(e, A) : (a = n[s] = o[s](e), a.c()), k(a, 1), a.m(i.parentNode, i));
			},
			i(c) {
				r || (k(a), r = !0);
			},
			o(c) {
				D(a), r = !1;
			},
			d(c) {
				c && (B(t), B(i)), n[s].d(c);
			}
		};
	}
	function Rs(l) {
		let e, t = l[20]("load_more", l[19], l[7]) + "", s, a, i;
		return {
			c() {
				e = p("button"), s = G(t), _(e, "type", "button"), _(e, "class", "pagefind-ui__button svelte-e9gkc3");
			},
			m(r, o) {
				h(r, e, o), b(e, s), a || (i = z(e, "click", l[22]), a = !0);
			},
			p(r, o) {
				o[0] & 524416 && t !== (t = r[20]("load_more", r[19], r[7]) + "") && W(s, t);
			},
			d(r) {
				r && B(e), a = !1, i();
			}
		};
	}
	function Ws(l) {
		let e, t = l[20]("searching", l[19], l[7]).replace(/\[SEARCH_TERM\]/, l[16]) + "", s;
		return {
			c() {
				e = p("p"), s = G(t), _(e, "class", "pagefind-ui__message svelte-e9gkc3");
			},
			m(a, i) {
				h(a, e, i), b(e, s);
			},
			p(a, i) {
				i[0] & 589952 && t !== (t = a[20]("searching", a[19], a[7]).replace(/\[SEARCH_TERM\]/, a[16]) + "") && W(s, t);
			},
			d(a) {
				a && B(e);
			}
		};
	}
	function Po(l) {
		let e, t, s, a, i, r, o, n = l[20]("clear_search", l[19], l[7]) + "", g, c, A, C, d, u, I, m, f = l[12] && Xs(l), F = l[15] && ks(l);
		return {
			c() {
				e = p("div"), t = p("form"), s = p("input"), r = Z(), o = p("button"), g = G(n), c = Z(), A = p("div"), f && f.c(), C = Z(), F && F.c(), _(s, "class", "pagefind-ui__search-input svelte-e9gkc3"), _(s, "type", "text"), _(s, "placeholder", a = l[20]("placeholder", l[19], l[7])), _(s, "title", i = l[20]("placeholder", l[19], l[7])), _(s, "autocapitalize", "none"), _(s, "enterkeyhint", "search"), s.autofocus = l[8], _(o, "class", "pagefind-ui__search-clear svelte-e9gkc3"), J(o, "pagefind-ui__suppressed", !l[9]), _(A, "class", "pagefind-ui__drawer svelte-e9gkc3"), J(A, "pagefind-ui__hidden", !l[15]), _(t, "class", "pagefind-ui__form svelte-e9gkc3"), _(t, "role", "search"), _(t, "aria-label", d = l[20]("search_label", l[19], l[7])), _(t, "action", "javascript:void(0);"), _(e, "class", "pagefind-ui svelte-e9gkc3"), J(e, "pagefind-ui--reset", l[1]);
			},
			m(U, y) {
				h(U, e, y), b(e, t), b(t, s), ge(s, l[9]), l[35](s), b(t, r), b(t, o), b(o, g), l[36](o), b(t, c), b(t, A), f && f.m(A, null), b(A, C), F && F.m(A, null), u = !0, l[8] && s.focus(), I || (m = [
					z(s, "focus", l[21]),
					z(s, "keydown", l[33]),
					z(s, "input", l[34]),
					z(o, "click", l[37]),
					z(t, "submit", qo)
				], I = !0);
			},
			p(U, y) {
				(!u || y[0] & 524416 && a !== (a = U[20]("placeholder", U[19], U[7]))) && _(s, "placeholder", a), (!u || y[0] & 524416 && i !== (i = U[20]("placeholder", U[19], U[7]))) && _(s, "title", i), (!u || y[0] & 256) && (s.autofocus = U[8]), y[0] & 512 && s.value !== U[9] && ge(s, U[9]), (!u || y[0] & 524416) && n !== (n = U[20]("clear_search", U[19], U[7]) + "") && W(g, n), (!u || y[0] & 512) && J(o, "pagefind-ui__suppressed", !U[9]), U[12] ? f ? (f.p(U, y), y[0] & 4096 && k(f, 1)) : (f = Xs(U), f.c(), k(f, 1), f.m(A, C)) : f && (ae(), D(f, 1, 1, () => {
					f = null;
				}), re()), U[15] ? F ? (F.p(U, y), y[0] & 32768 && k(F, 1)) : (F = ks(U), F.c(), k(F, 1), F.m(A, null)) : F && (ae(), D(F, 1, 1, () => {
					F = null;
				}), re()), (!u || y[0] & 32768) && J(A, "pagefind-ui__hidden", !U[15]), (!u || y[0] & 524416 && d !== (d = U[20]("search_label", U[19], U[7]))) && _(t, "aria-label", d), (!u || y[0] & 2) && J(e, "pagefind-ui--reset", U[1]);
			},
			i(U) {
				u || (k(f), k(F), u = !0);
			},
			o(U) {
				D(f), D(F), u = !1;
			},
			d(U) {
				U && B(e), l[35](null), l[36](null), f && f.d(), F && F.d(), I = !1, v(m);
			}
		};
	}
	var qo = (l) => l.preventDefault();
	function $o(l, e, t) {
		let s = {}, a = Ns.map((Q) => Q.match(/([^\/]+)\.json$/)[1]);
		for (let Q = 0; Q < a.length; Q++) s[a[Q]] = {
			language: a[Q],
			...Gs[Q].strings
		};
		let { base_path: i = "/pagefind/" } = e, { page_size: r = 5 } = e, { reset_styles: o = !0 } = e, { show_images: n = !0 } = e, { show_sub_results: g = !1 } = e, { excerpt_length: c } = e, { process_result: A = null } = e, { process_term: C = null } = e, { show_empty_filters: d = !0 } = e, { open_filters: u = [] } = e, { debounce_timeout_ms: I = 300 } = e, { pagefind_options: m = {} } = e, { merge_index: f = [] } = e, { trigger_search_term: F = "" } = e, { translations: U = {} } = e, { autofocus: y = !1 } = e, { focus_on_slash: q = !1 } = e, { sort: O = null } = e, { selected_filters: N = {} } = e, S = "", X, T, ct, Vs = 40, pt = !1, Xl = [], Ft = !1, Bt = !1, kl = 0, Ll = "", ht = r, Rl = null, Ie = null, Wl = s.en, Ds = (Q, E, L) => L[Q] ?? E[Q] ?? "", Sl = (Q) => {
			if (!q) return;
			let E = document.activeElement, L = E && (E.tagName === "INPUT" || E.tagName === "TEXTAREA" || E.isContentEditable);
			Q.key === "/" && !L && (Q.preventDefault(), T?.focus());
		};
		Zt(() => {
			let Q = document?.querySelector?.("html")?.getAttribute?.("lang") || "en", E = bt(Q.toLocaleLowerCase());
			t(19, Wl = s[`${E.language}-${E.script}-${E.region}`] || s[`${E.language}-${E.region}`] || s[`${E.language}`] || s.en), q && document.addEventListener("keydown", Sl);
		}), Gt(() => {
			X?.destroy?.(), X = null, q && document.removeEventListener("keydown", Sl);
		});
		let Vl = async () => {
			if (!pt && (t(12, pt = !0), !X)) {
				let Q;
				try {
					Q = await import(`${i}pagefind.js`);
				} catch (L) {
					console.error(L), console.error([`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`, "You can configure this by passing a bundlePath option to PagefindUI"].join(`
`)), document?.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" ? console.error(`[DEBUG: Loaded from ${document.currentScript.src ?? "bad script location"}]`) : console.error("no known script location");
				}
				c || t(24, c = g ? 12 : 30);
				let E = {
					...m || {},
					excerptLength: c
				};
				await Q.options(E);
				for (let L of f) {
					if (!L.bundlePath) throw new Error("mergeIndex requires a bundlePath parameter");
					let w = L.bundlePath;
					delete L.bundlePath, await Q.mergeIndex(w, L);
				}
				X = Q, Ts();
			}
		}, Ts = async () => {
			X && (Rl = await X.filters(), (!Ie || !Object.keys(Ie).length) && t(18, Ie = Rl));
		}, vs = (Q) => {
			let E = {};
			return Object.entries(Q).filter(([, L]) => L).forEach(([L]) => {
				let [w, ne] = L.split(/:(.*)$/);
				E[w] = E[w] || [], E[w].push(ne);
			}), E;
		}, de, Hs = async (Q, E) => {
			if (!Q) {
				t(15, Bt = !1), de && clearTimeout(de);
				return;
			}
			let L = vs(E), w = () => Ms(Q, L);
			I > 0 && Q ? (de && clearTimeout(de), de = setTimeout(w, I), await Dl(), X.preload(Q, { filters: L })) : w(), Ys();
		}, Dl = async () => {
			for (; !X;) Vl(), await new Promise((Q) => setTimeout(Q, 50));
		}, Ms = async (Q, E) => {
			t(16, Ll = Q || ""), typeof C == "function" && (Q = C(Q)), t(14, Ft = !0), t(15, Bt = !0), await Dl();
			let L = ++kl, w = { filters: E };
			O && typeof O == "object" && (w.sort = O);
			let ne = await X.search(Q, w);
			kl === L && (ne.filters && Object.keys(ne.filters)?.length && t(18, Ie = ne.filters), t(13, Xl = ne), t(14, Ft = !1), t(17, ht = r));
		}, Ys = () => {
			let Q = ct.offsetWidth;
			Q != Vs && t(10, T.style.paddingRight = `${Q + 2}px`, T);
		}, ws = (Q) => {
			Q?.preventDefault(), t(17, ht += r);
		}, zs = (Q) => {
			Q.key === "Escape" && (t(9, S = ""), T.blur()), Q.key === "Enter" && Q.preventDefault();
		};
		function Js() {
			S = this.value, t(9, S), t(23, F);
		}
		function Os(Q) {
			Ce[Q ? "unshift" : "push"](() => {
				T = Q, t(10, T);
			});
		}
		function js(Q) {
			Ce[Q ? "unshift" : "push"](() => {
				ct = Q, t(11, ct);
			});
		}
		let Ks = () => {
			t(9, S = ""), T.blur();
		};
		function Ps(Q) {
			N = Q, t(0, N);
		}
		return l.$$set = (Q) => {
			"base_path" in Q && t(25, i = Q.base_path), "page_size" in Q && t(26, r = Q.page_size), "reset_styles" in Q && t(1, o = Q.reset_styles), "show_images" in Q && t(2, n = Q.show_images), "show_sub_results" in Q && t(3, g = Q.show_sub_results), "excerpt_length" in Q && t(24, c = Q.excerpt_length), "process_result" in Q && t(4, A = Q.process_result), "process_term" in Q && t(27, C = Q.process_term), "show_empty_filters" in Q && t(5, d = Q.show_empty_filters), "open_filters" in Q && t(6, u = Q.open_filters), "debounce_timeout_ms" in Q && t(28, I = Q.debounce_timeout_ms), "pagefind_options" in Q && t(29, m = Q.pagefind_options), "merge_index" in Q && t(30, f = Q.merge_index), "trigger_search_term" in Q && t(23, F = Q.trigger_search_term), "translations" in Q && t(7, U = Q.translations), "autofocus" in Q && t(8, y = Q.autofocus), "focus_on_slash" in Q && t(31, q = Q.focus_on_slash), "sort" in Q && t(32, O = Q.sort), "selected_filters" in Q && t(0, N = Q.selected_filters);
		}, l.$$.update = () => {
			l.$$.dirty[0] & 8388608 && F && (t(9, S = F), t(23, F = "")), l.$$.dirty[0] & 513 && Hs(S, N);
		}, [
			N,
			o,
			n,
			g,
			A,
			d,
			u,
			U,
			y,
			S,
			T,
			ct,
			pt,
			Xl,
			Ft,
			Bt,
			Ll,
			ht,
			Ie,
			Wl,
			Ds,
			Vl,
			ws,
			F,
			c,
			i,
			r,
			C,
			I,
			m,
			f,
			q,
			O,
			zs,
			Js,
			Os,
			js,
			Ks,
			Ps
		];
	}
	var Nl = class extends Y {
		constructor(e) {
			super(), P(this, e, $o, Po, j, {
				base_path: 25,
				page_size: 26,
				reset_styles: 1,
				show_images: 2,
				show_sub_results: 3,
				excerpt_length: 24,
				process_result: 4,
				process_term: 27,
				show_empty_filters: 5,
				open_filters: 6,
				debounce_timeout_ms: 28,
				pagefind_options: 29,
				merge_index: 30,
				trigger_search_term: 23,
				translations: 7,
				autofocus: 8,
				focus_on_slash: 31,
				sort: 32,
				selected_filters: 0
			}, null, [-1, -1]);
		}
	}, Ss = Nl;
	var El;
	try {
		document?.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" && (El = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]);
	} catch {
		El = "/pagefind/";
	}
	var ft = class {
		constructor(e) {
			this._pfs = null;
			let t = e.element ?? "[data-pagefind-ui]", s = e.bundlePath ?? El, a = e.pageSize ?? 5, i = e.resetStyles ?? !0, r = e.showImages ?? !0, o = e.showSubResults ?? !1, n = e.excerptLength ?? 0, g = e.processResult ?? null, c = e.processTerm ?? null, A = e.showEmptyFilters ?? !0, C = e.openFilters ?? [], d = e.debounceTimeoutMs ?? 300, u = e.mergeIndex ?? [], I = e.translations ?? [], m = e.autofocus ?? !1, f = e.focusOnSlash ?? !1, F = e.sort ?? null;
			delete e.element, delete e.bundlePath, delete e.pageSize, delete e.resetStyles, delete e.showImages, delete e.showSubResults, delete e.excerptLength, delete e.processResult, delete e.processTerm, delete e.showEmptyFilters, delete e.openFilters, delete e.debounceTimeoutMs, delete e.mergeIndex, delete e.translations, delete e.autofocus, delete e.focusOnSlash, delete e.sort;
			let U = t instanceof HTMLElement ? t : document.querySelector(t);
			U ? this._pfs = new Ss({
				target: U,
				props: {
					base_path: s,
					page_size: a,
					reset_styles: i,
					show_images: r,
					show_sub_results: o,
					excerpt_length: n,
					process_result: g,
					process_term: c,
					show_empty_filters: A,
					open_filters: C,
					debounce_timeout_ms: d,
					merge_index: u,
					translations: I,
					autofocus: m,
					focus_on_slash: f,
					sort: F,
					pagefind_options: e
				}
			}) : console.error(`Pagefind UI couldn't find the selector ${t}`);
		}
		triggerSearch(e) {
			this._pfs.$$set({ trigger_search_term: e });
		}
		triggerFilters(e) {
			let t = {};
			for (let [s, a] of Object.entries(e)) if (Array.isArray(a)) for (let i of a) t[`${s}:${i}`] = !0;
			else t[`${s}:${a}`] = !0;
			this._pfs.$$set({ selected_filters: t });
		}
		destroy() {
			this._pfs.$destroy();
		}
	};
	window.PagefindUI = ft;
})();
