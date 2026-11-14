(function prepaint() {
	const root = document.documentElement;
	root.classList.add("sk-js");
	const read = (name) => {
		const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
		if (match?.[1]) {
			try {
				return decodeURIComponent(match[1]);
			} catch {
				return null;
			}
		}
		try {
			return localStorage.getItem(name);
		} catch {
			return null;
		}
	};
	const theme = read("sk-theme");
	if (theme === "light" || theme === "dark" || theme === "contrast") root.setAttribute("data-theme", theme);
	root.dataset["themeChoice"] = theme === "light" || theme === "dark" || theme === "contrast" ? theme : "system";
	if (read("sk-motion") === "paused") root.dataset["skMotion"] = "paused";
	try {
		if (sessionStorage.getItem("sk-corner") === "hidden") root.dataset["skCorner"] = "hidden";
	} catch {}
	try {
		const settings = JSON.parse(read("sk-a11y") ?? "null");
		if (!settings) return;
		const allowed = [
			"grayscale",
			"contrast",
			"invert",
			"light",
			"links",
			"font",
			"motion",
			"focus"
		];
		const colours = [
			"grayscale",
			"contrast",
			"invert",
			"light"
		];
		const on = Array.isArray(settings.on) ? settings.on.filter((item) => typeof item === "string" && allowed.includes(item)) : [];
		let colour = false;
		for (const option of on) {
			if (colours.includes(option)) {
				if (colour) continue;
				colour = true;
			}
			root.classList.add(`sk-a11y-${option}`);
		}
		if ([
			110,
			120,
			130,
			140
		].includes(settings.size)) root.classList.add(`sk-a11y-size-${String(settings.size)}`);
		if (on.includes("motion")) root.classList.add("a11y-reduce-motion");
		if (on.includes("focus")) root.classList.add("a11y-strong-focus");
	} catch {}
})();
