(function() {
	function initTabs() {
		document.querySelectorAll("[data-tabs]").forEach(function(root) {
			var list = root.querySelector("[role=\"tablist\"]");
			var tabs = Array.prototype.slice.call(root.querySelectorAll("[role=\"tab\"]"));
			function select(tab, focus) {
				tabs.forEach(function(other) {
					var active = other === tab;
					var panel = document.getElementById(other.getAttribute("aria-controls"));
					other.setAttribute("aria-selected", String(active));
					other.tabIndex = active ? 0 : -1;
					panel.hidden = !active;
				});
				if (focus) tab.focus();
			}
			tabs.forEach(function(tab, index) {
				var panel = document.getElementById(tab.getAttribute("aria-controls"));
				panel.setAttribute("role", "tabpanel");
				panel.setAttribute("aria-labelledby", tab.id);
				panel.tabIndex = 0;
				tab.addEventListener("click", function() {
					select(tab);
					history.replaceState(null, "", "#" + panel.id);
				});
				tab.addEventListener("keydown", function(event) {
					var last = tabs.length - 1;
					var target = null;
					if (event.key === "ArrowRight") target = index === last ? 0 : index + 1;
					if (event.key === "ArrowLeft") target = index === 0 ? last : index - 1;
					if (event.key === "Home") target = 0;
					if (event.key === "End") target = last;
					if (target === null) return;
					event.preventDefault();
					select(tabs[target], true);
				});
			});
			list.hidden = false;
			var wanted = tabs.filter(function(tab) {
				return "#" + tab.getAttribute("aria-controls") === location.hash;
			})[0];
			select(wanted || tabs[0]);
		});
	}
	function initRecordings() {
		document.querySelectorAll("[data-recording]").forEach(function(figure) {
			var image = figure.querySelector("img");
			var toggle = figure.querySelector("[data-recording-toggle]");
			var poster = image.getAttribute("src");
			var title = figure.querySelector("strong").textContent;
			var playing = false;
			toggle.setAttribute("role", "button");
			toggle.addEventListener("click", function(event) {
				event.preventDefault();
				playing = !playing;
				image.src = playing ? image.dataset.gif : poster;
				toggle.textContent = (playing ? figure.dataset.stop : figure.dataset.play) + ": " + title;
			});
		});
	}
	function openTarget() {
		if (!location.hash) return;
		var target = document.getElementById(location.hash.slice(1));
		if (target && target.tagName === "DETAILS") target.open = true;
	}
	function initCopy() {
		document.querySelectorAll("[data-copy]").forEach(function(button) {
			if (!navigator.clipboard) {
				button.remove();
				return;
			}
			var label = button.firstChild;
			var original = label.nodeValue;
			button.hidden = false;
			button.addEventListener("click", function() {
				navigator.clipboard.writeText(button.dataset.copy).then(function() {
					label.nodeValue = button.dataset.copied;
					setTimeout(function() {
						label.nodeValue = original;
					}, 1800);
				});
			});
		});
	}
	function initLightbox() {
		var dialog = document.getElementById("lightbox");
		if (!dialog || !dialog.showModal) return;
		var links = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
		var image = document.createElement("img");
		var caption = document.getElementById("lightbox-caption");
		var current = 0;
		image.width = 1480;
		image.height = 920;
		image.alt = "";
		dialog.insertBefore(image, dialog.firstChild);
		function show(index) {
			current = (index + links.length) % links.length;
			var link = links[current];
			image.src = link.getAttribute("href");
			image.alt = link.querySelector("img").alt;
			caption.textContent = link.dataset.lightbox;
		}
		links.forEach(function(link, index) {
			link.addEventListener("click", function(event) {
				event.preventDefault();
				show(index);
				dialog.showModal();
			});
		});
		dialog.querySelectorAll("[data-lightbox-move]").forEach(function(button) {
			button.addEventListener("click", function() {
				show(current + Number(button.dataset.lightboxMove));
			});
			button.hidden = links.length < 2;
		});
		dialog.querySelector("[data-lightbox-close]").addEventListener("click", function() {
			dialog.close();
		});
		dialog.addEventListener("click", function(event) {
			if (event.target === dialog) dialog.close();
		});
		dialog.addEventListener("keydown", function(event) {
			if (event.key === "ArrowRight") show(current + 1);
			if (event.key === "ArrowLeft") show(current - 1);
		});
	}
	function initFaqSearch() {
		var box = document.querySelector("[data-faq-search]");
		if (!box) return;
		var input = box.querySelector("input");
		var count = document.getElementById("faq-count");
		var groups = Array.prototype.slice.call(document.querySelectorAll("[data-faq-list] .faq-group"));
		box.hidden = false;
		function apply() {
			var query = input.value.trim().toLowerCase();
			var shown = 0;
			groups.forEach(function(group) {
				var visible = 0;
				group.querySelectorAll("details").forEach(function(item) {
					var match = item.textContent.toLowerCase().indexOf(query) !== -1;
					item.hidden = !match;
					if (match) visible += 1;
				});
				group.hidden = visible === 0;
				shown += visible;
			});
			count.textContent = String(shown);
		}
		input.addEventListener("input", apply);
		apply();
	}
	function initFilters() {
		var box = document.querySelector("[data-filter]");
		if (!box) return;
		var chips = Array.prototype.slice.call(box.querySelectorAll("[data-filter-value]"));
		var input = box.querySelector("input");
		var count = box.querySelector("[data-filter-count]");
		var list = document.querySelector("[data-filter-list]");
		var items = Array.prototype.slice.call(list.querySelectorAll("[data-filter-item]"));
		var groups = list.querySelectorAll("[data-filter-group]");
		var empty = list.querySelector("[data-filter-empty]");
		var chosen = "";
		box.hidden = false;
		function apply() {
			var query = input ? input.value.trim().toLowerCase() : "";
			var shown = 0;
			items.forEach(function(item) {
				var match = (!chosen || item.dataset.filterItem === chosen) && item.textContent.toLowerCase().indexOf(query) !== -1;
				item.hidden = !match;
				if (match) shown += 1;
			});
			groups.forEach(function(group) {
				group.hidden = !group.querySelector("[data-filter-item]:not([hidden])");
			});
			if (empty) empty.hidden = shown > 0;
			count.textContent = String(shown);
		}
		chips.forEach(function(chip) {
			chip.addEventListener("click", function() {
				chosen = chip.dataset.filterValue;
				chips.forEach(function(other) {
					other.setAttribute("aria-pressed", String(other === chip));
				});
				apply();
			});
		});
		if (input) input.addEventListener("input", apply);
		apply();
	}
	initTabs();
	initRecordings();
	openTarget();
	window.addEventListener("hashchange", openTarget);
	initCopy();
	initLightbox();
	initFaqSearch();
	initFilters();
})();
