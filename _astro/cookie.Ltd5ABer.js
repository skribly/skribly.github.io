var e = {
	skribly: {
		colour: `accent`,
		glyph: null
	},
	agent: {
		colour: `tool-agent`,
		glyph: `M40.6 19.4l3.6 3.6-3.6 3.6M45.6 28.4h2.6`
	},
	tracker: {
		colour: `tool-tracker`,
		glyph: `M40.4 23.6l2.8 2.8 4.8-5.4`
	},
	skills: {
		colour: `tool-skills`,
		glyph: `M44 18.6v8.8M39.6 23h8.8`
	},
	docs: {
		colour: `tool-docs`,
		glyph: `M40.4 19h7.2M40.4 23h7.2M40.4 27h4.4`
	},
	ui: {
		colour: `tool-ui`,
		glyph: `M41.2 19.6h.01M46.8 19.6h.01M41.2 25.4h.01M46.8 25.4h.01`
	},
	core: {
		colour: `tool-core`,
		glyph: `M42 19h-1.8v8h1.8M46 19h1.8v8h-1.8`
	},
	id: {
		colour: `tool-id`,
		glyph: `M44 20.2h.01M40.8 27.2l1.4-2.6h3.6l1.4 2.6`
	},
	hub: {
		colour: `tool-hub`,
		glyph: `M40.4 22.6l3.6-3.6 3.6 3.6v4.8h-7.2z`
	},
	api: {
		colour: `tool-api`,
		glyph: `M40.4 20.6h7.2M45.6 18.6l2 2-2 2M47.6 25.4h-7.2M42.4 23.4l-2 2 2 2`
	},
	status: {
		colour: `tool-status`,
		glyph: `M39.6 23.6h2.2l1.4-3.6 2.4 6.8 1.4-3.2h1.4`
	},
	trust: {
		colour: `tool-trust`,
		glyph: `M41.8 22.6v-3h4.4v3M40.8 24.2h6.4v2.8h-6.4z`
	},
	tools: {
		colour: `tool-tools`,
		glyph: `M40.8 27.2L46 22M43.8 19.8l4.4 4.4`
	},
	extension: {
		colour: `tool-extension`,
		glyph: `M40.4 21v-2h2M45.6 19h2v2M47.6 25v2h-2M42.4 27h-2v-2M44 23h.01`
	},
	newsletter: {
		colour: `tool-newsletter`,
		glyph: `M40.2 19.6h7.6v6.8h-7.6zM40.6 20.2l3.4 2.8 3.4-2.8`
	},
	feedback: {
		colour: `tool-feedback`,
		glyph: `M40.4 19.2h7.2v5.6h-3.2l-2.6 2.6v-2.6h-1.4z`
	},
	recommend: {
		colour: `tool-recommend`,
		glyph: `M44 18.9L45.1 21.9L48.4 22.1L45.9 24.1L46.7 27.3L44 25.5L41.3 27.3L42.1 24.1L39.6 22.1L42.9 21.9Z`
	},
	bot: {
		colour: `tool-bot`,
		glyph: `M41.6 21h.01M46.4 21h.01M41.6 25.6h4.8`
	},
	projects: {
		colour: `tool-projects`,
		glyph: `M40.4 21.8h4.8v4.8h-4.8zM43 21.8v-2.6h4.8v4.8h-2.6`
	}
}, t = {
	skribly: `Skribly`,
	agent: `Skribly Agent`,
	tracker: `Skribly Tracker`,
	skills: `agent-skills`,
	docs: `Skribly Docs`,
	ui: `Skribly UI`,
	core: `Skribly Core`,
	id: `Skribly ID`,
	hub: `Skribly Hub`,
	api: `Skribly API`,
	status: `Skribly Status`,
	trust: `Skribly Trust`,
	tools: `Skribly Tools`,
	extension: `Skribly Extensions`,
	newsletter: `Skribly Newsletter`,
	feedback: `Skribly Feedback`,
	recommend: `Skribly Recommend`,
	bot: `Skribly Bot`,
	projects: `Skribly Projects`
}, n = `skribly.pl`;
t.skribly, { ...e.skribly }, t.agent, { ...e.agent }, t.tracker, { ...e.tracker }, t.skills, { ...e.skills }, t.docs, { ...e.docs }, t.ui, { ...e.ui }, t.newsletter, { ...e.newsletter };
var r = 31536e3;
function i(e, t) {
	for (let n of e.split(`;`)) {
		let [e, ...r] = n.trim().split(`=`);
		if (e === t) try {
			return decodeURIComponent(r.join(`=`));
		} catch {
			return null;
		}
	}
	return null;
}
function a(e) {
	let t = e.toLowerCase();
	if (t === `skribly.pl` || t.endsWith(`.skribly.pl`)) return `.${n}`;
}
function o(e, t, { domain: n, secure: i, maxAge: a = r } = {}) {
	return [
		`${e}=${encodeURIComponent(t)}`,
		`Path=/`,
		`Max-Age=${a}`,
		`SameSite=Lax`,
		n ? `Domain=${n}` : ``,
		i ? `Secure` : ``
	].filter(Boolean).join(`; `);
}
function s(e, t, n) {
	let r = e.defaultView?.location;
	e.cookie = o(t, n, {
		domain: a(r?.hostname ?? ``),
		secure: r?.protocol === `https:`
	});
}
function c(e = globalThis.window) {
	try {
		return e?.localStorage ?? null;
	} catch {
		return null;
	}
}
function l(e, t) {
	try {
		return e?.getItem(t) ?? null;
	} catch {
		return null;
	}
}
function u(e, t, n) {
	try {
		e?.setItem(t, n);
	} catch {}
}
export { u as a, s as i, i as n, l as r, c as t };
