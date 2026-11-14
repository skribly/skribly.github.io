function e(e, t, n, r) {
	let i = e.createElement(t);
	return n && (i.className = n), r !== void 0 && (i.textContent = r), i;
}
function t(t, n, r) {
	let i = e(t, `p`, `sk-ai-note`), a = e(t, `a`, `sk-ai-note__link`, r.whatIsSent);
	return a.href = n.sentHref, i.append(e(t, `span`, `sk-ai-note__badge`, r.aiGenerated), e(t, `span`, `sk-ai-note__model`, `${r.model}: ${n.model}`), e(t, `span`, `sk-ai-note__provider`, `${r.provider}: ${n.provider}`), a), i;
}
var n = 0;
function r(r, i, a, { doc: o = r.ownerDocument } = {}) {
	let s = `sk-assistant-${++n}`, c = e(o, `button`, `sk-icon-button sk-assistant-button`);
	c.type = `button`, c.setAttribute(`aria-haspopup`, `dialog`), c.setAttribute(`aria-label`, a.open), c.title = a.open, c.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>`;
	let l = e(o, `dialog`, `sk-assistant`);
	l.setAttribute(`aria-labelledby`, `${s}-title`);
	let u = e(o, `div`, `sk-assistant__head`), d = e(o, `h2`, `sk-assistant__title`, a.title);
	d.id = `${s}-title`;
	let f = e(o, `button`, `sk-icon-button`);
	f.type = `button`, f.setAttribute(`aria-label`, a.close), f.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"></path></svg>`, u.append(d, f);
	let p = e(o, `div`, `sk-assistant__log`);
	p.setAttribute(`role`, `log`), p.setAttribute(`aria-live`, `polite`), p.setAttribute(`aria-label`, a.log), p.tabIndex = 0;
	let m = e(o, `p`, `sk-assistant__status`);
	m.setAttribute(`role`, `status`);
	let h = e(o, `form`, `sk-assistant__form`);
	h.noValidate = !0;
	let g = e(o, `label`, `sk-assistant__label`, a.questionLabel);
	g.htmlFor = `${s}-question`;
	let _ = e(o, `span`, `sk-assistant__hint`, a.questionHint);
	_.id = `${s}-hint`;
	let v = e(o, `textarea`, `sk-assistant__input`);
	v.id = `${s}-question`, v.rows = 3, v.setAttribute(`aria-describedby`, `${_.id} ${s}-status`), m.id = `${s}-status`;
	let y = e(o, `button`, `sk-assistant__send`, a.send);
	y.type = `submit`, h.append(g, _, v, y), l.append(u, p, t(o, i, a), e(o, `p`, `sk-assistant__privacy`, a.privacyNote), m, h), r.append(c, l);
	let b = null, x = null, S = (t, n, r = []) => {
		let i = e(o, `div`, `sk-assistant__message`);
		if (i.append(e(o, `strong`, `sk-assistant__who`, t), e(o, `p`, `sk-assistant__text`, n)), r.length) {
			let t = e(o, `ul`, `sk-assistant__sources`);
			t.setAttribute(`aria-label`, a.sources);
			for (let n of r) {
				let r = e(o, `li`), i = e(o, `a`, void 0, n.title);
				i.href = n.href, r.append(i), t.append(r);
			}
			i.append(t);
		}
		p.append(i), p.scrollTop = p.scrollHeight;
	}, C = () => {
		l.open || (b = o.activeElement, l.showModal(), v.focus());
	}, w = () => {
		x?.abort(), x = null, l.close();
	};
	return c.addEventListener(`click`, C), f.addEventListener(`click`, w), l.addEventListener(`keydown`, (e) => {
		e.key === `Escape` && (e.preventDefault(), w());
	}), l.addEventListener(`click`, (e) => {
		e.target === l && w();
	}), l.addEventListener(`close`, () => {
		x?.abort(), x = null, y.removeAttribute(`aria-disabled`), m.textContent = ``, b instanceof HTMLElement && b !== o.body ? b.focus() : c.focus();
	}), h.addEventListener(`submit`, (e) => {
		if (e.preventDefault(), x) return;
		let t = v.value.trim();
		if (!t) {
			m.textContent = a.emptyQuestion, v.setAttribute(`aria-invalid`, `true`), v.focus();
			return;
		}
		v.removeAttribute(`aria-invalid`), S(a.you, t), v.value = ``, m.textContent = a.sending, y.setAttribute(`aria-disabled`, `true`);
		let n = new AbortController();
		x = n, (async () => {
			try {
				let e = await i.ask(t, { signal: n.signal });
				if (x !== n) return;
				x = null, y.removeAttribute(`aria-disabled`), m.textContent = ``, S(a.assistant, e.text, e.sources);
			} catch {
				if (x !== n) return;
				x = null, y.removeAttribute(`aria-disabled`), m.textContent = a.error, v.value = t, v.focus();
			}
		})();
	}), {
		button: c,
		dialog: l,
		destroy() {
			x?.abort(), c.remove(), l.remove();
		}
	};
}
function i(e, t = window) {
	if (`skReady` in e.dataset) return null;
	let n = t.skriblyAssistantAdapter;
	if (!n) return null;
	e.dataset.skReady = ``;
	let i = r(e, n, JSON.parse(e.dataset.labels ?? `{}`));
	return e.hidden = !1, i;
}
for (let e of document.querySelectorAll(`[data-sk-assistant]`)) i(e);
