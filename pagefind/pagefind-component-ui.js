"use strict";
(() => {
	var hs = Object.defineProperty;
	var h = (a, s) => {
		for (var e in s) hs(a, e, {
			get: s[e],
			enumerable: !0
		});
	};
	var Gt = {};
	h(Gt, {
		PagefindConfig: () => Se,
		PagefindElement: () => f,
		PagefindFilterDropdown: () => He,
		PagefindFilterPane: () => xe,
		PagefindInput: () => Ne,
		PagefindKeyboardHints: () => Pe,
		PagefindModal: () => we,
		PagefindModalBody: () => Fe,
		PagefindModalFooter: () => ze,
		PagefindModalHeader: () => Le,
		PagefindModalTrigger: () => Ue,
		PagefindResults: () => Oe,
		PagefindSearchbox: () => De,
		PagefindSummary: () => Me,
		configureInstance: () => is,
		getInstanceManager: () => ve
	});
	var ps = "a[href], button, input, [tabindex]";
	function Wt(a) {
		let s = a.querySelectorAll(ps);
		for (let e of s) if (!(e.tabIndex < 0) && !e.disabled && !e.hasAttribute("hidden") && window.getComputedStyle(e).display !== "none") return !0;
		return !1;
	}
	function Yt(a, s) {
		let e = null;
		for (let t of s) t.contains(a) || !(a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) || Wt(t) && (e === null || t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) && (e = t);
		return e;
	}
	function je(a, s) {
		let e = null;
		for (let t of s) t.contains(a) || !(a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING) || Wt(t) && (e === null || t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING) && (e = t);
		return e;
	}
	var We = {};
	h(We, {
		comments: () => _s,
		default: () => Es,
		direction: () => fs,
		strings: () => gs,
		thanks_to: () => ms
	});
	var ms = "Jan Claasen <jan@cloudcannon.com>", _s = "", fs = "ltr", gs = {
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
	}, Es = {
		thanks_to: ms,
		comments: _s,
		direction: fs,
		strings: gs
	};
	var Ye = {};
	h(Ye, {
		comments: () => Ts,
		default: () => Rs,
		direction: () => Cs,
		strings: () => ys,
		thanks_to: () => bs
	});
	var bs = "Jermanuts", Ts = "", Cs = "rtl", ys = {
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
	}, Rs = {
		thanks_to: bs,
		comments: Ts,
		direction: Cs,
		strings: ys
	};
	var Je = {};
	h(Je, {
		comments: () => ks,
		default: () => Ns,
		direction: () => As,
		strings: () => Ss,
		thanks_to: () => vs
	});
	var vs = "Salif Mehmed <mail@salif.eu>", ks = "", As = "ltr", Ss = {
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
	}, Ns = {
		thanks_to: vs,
		comments: ks,
		direction: As,
		strings: Ss
	};
	var Ze = {};
	h(Ze, {
		comments: () => Os,
		default: () => ws,
		direction: () => xs,
		strings: () => Hs,
		thanks_to: () => Ms
	});
	var Ms = "Maruf Alom <mail@marufalom.com>", Os = "", xs = "ltr", Hs = {
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
	}, ws = {
		thanks_to: Ms,
		comments: Os,
		direction: xs,
		strings: Hs
	};
	var Xe = {};
	h(Xe, {
		comments: () => Us,
		default: () => zs,
		direction: () => Ls,
		strings: () => Fs,
		thanks_to: () => Is
	});
	var Is = "Pablo Villaverde <https://github.com/pvillaverde>", Us = "", Ls = "ltr", Fs = {
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
	}, zs = {
		thanks_to: Is,
		comments: Us,
		direction: Ls,
		strings: Fs
	};
	var Qe = {};
	h(Qe, {
		comments: () => Ds,
		default: () => Ks,
		direction: () => js,
		strings: () => Bs,
		thanks_to: () => Ps
	});
	var Ps = "Dalibor Hon <https://github.com/dallyh>", Ds = "", js = "ltr", Bs = {
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
	}, Ks = {
		thanks_to: Ps,
		comments: Ds,
		direction: js,
		strings: Bs
	};
	var et = {};
	h(et, {
		comments: () => Vs,
		default: () => Ws,
		direction: () => qs,
		strings: () => Gs,
		thanks_to: () => $s
	});
	var $s = "Jonas Smedegaard <dr@jones.dk>", Vs = "", qs = "ltr", Gs = {
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
	}, Ws = {
		thanks_to: $s,
		comments: Vs,
		direction: qs,
		strings: Gs
	};
	var tt = {};
	h(tt, {
		comments: () => Js,
		default: () => Qs,
		direction: () => Zs,
		strings: () => Xs,
		thanks_to: () => Ys
	});
	var Ys = "Jan Claasen <jan@cloudcannon.com>", Js = "", Zs = "ltr", Xs = {
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
	}, Qs = {
		thanks_to: Ys,
		comments: Js,
		direction: Zs,
		strings: Xs
	};
	var st = {};
	h(st, {
		comments: () => tr,
		default: () => ir,
		direction: () => sr,
		strings: () => rr,
		thanks_to: () => er
	});
	var er = "George Papadopoulos", tr = "", sr = "ltr", rr = {
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
	}, ir = {
		thanks_to: er,
		comments: tr,
		direction: sr,
		strings: rr
	};
	var rt = {};
	h(rt, {
		comments: () => ar,
		default: () => cr,
		direction: () => lr,
		strings: () => or,
		thanks_to: () => nr
	});
	var nr = "Liam Bigelow <liam@cloudcannon.com>", ar = "", lr = "ltr", or = {
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
	}, cr = {
		thanks_to: nr,
		comments: ar,
		direction: lr,
		strings: or
	};
	var it = {};
	h(it, {
		comments: () => dr,
		default: () => mr,
		direction: () => hr,
		strings: () => pr,
		thanks_to: () => ur
	});
	var ur = "Pablo Villaverde <https://github.com/pvillaverde>", dr = "", hr = "ltr", pr = {
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
	}, mr = {
		thanks_to: ur,
		comments: dr,
		direction: hr,
		strings: pr
	};
	var nt = {};
	h(nt, {
		comments: () => fr,
		default: () => br,
		direction: () => gr,
		strings: () => Er,
		thanks_to: () => _r
	});
	var _r = "Mikel Larreategi <mlarreaegi@codesyntax.com>", fr = "", gr = "ltr", Er = {
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
	}, br = {
		thanks_to: _r,
		comments: fr,
		direction: gr,
		strings: Er
	};
	var at = {};
	h(at, {
		comments: () => Cr,
		default: () => vr,
		direction: () => yr,
		strings: () => Rr,
		thanks_to: () => Tr
	});
	var Tr = "Ali Khaleqi Yekta <https://yekta.dev>, Goudarz Jafari <https://goudarzjafari.com>", Cr = "", yr = "rtl", Rr = {
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
	}, vr = {
		thanks_to: Tr,
		comments: Cr,
		direction: yr,
		strings: Rr
	};
	var lt = {};
	h(lt, {
		comments: () => Ar,
		default: () => Mr,
		direction: () => Sr,
		strings: () => Nr,
		thanks_to: () => kr
	});
	var kr = "Valtteri Laitinen <dev@valtlai.fi>", Ar = "", Sr = "ltr", Nr = {
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
	}, Mr = {
		thanks_to: kr,
		comments: Ar,
		direction: Sr,
		strings: Nr
	};
	var ot = {};
	h(ot, {
		comments: () => xr,
		default: () => Ir,
		direction: () => Hr,
		strings: () => wr,
		thanks_to: () => Or
	});
	var Or = "Nicolas Friedli <nicolas@theologique.ch>", xr = "", Hr = "ltr", wr = {
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
	}, Ir = {
		thanks_to: Or,
		comments: xr,
		direction: Hr,
		strings: wr
	};
	var ct = {};
	h(ct, {
		comments: () => Lr,
		default: () => Pr,
		direction: () => Fr,
		strings: () => zr,
		thanks_to: () => Ur
	});
	var Ur = "Pablo Villaverde <https://github.com/pvillaverde>", Lr = "", Fr = "ltr", zr = {
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
		thanks_to: Ur,
		comments: Lr,
		direction: Fr,
		strings: zr
	};
	var ut = {};
	h(ut, {
		comments: () => jr,
		default: () => $r,
		direction: () => Br,
		strings: () => Kr,
		thanks_to: () => Dr
	});
	var Dr = "Nir Tamir <nirtamir2@gmail.com>", jr = "", Br = "rtl", Kr = {
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
	}, $r = {
		thanks_to: Dr,
		comments: jr,
		direction: Br,
		strings: Kr
	};
	var dt = {};
	h(dt, {
		comments: () => qr,
		default: () => Yr,
		direction: () => Gr,
		strings: () => Wr,
		thanks_to: () => Vr
	});
	var Vr = "Amit Yadav <amit@thetechbasket.com>", qr = "", Gr = "ltr", Wr = {
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
	}, Yr = {
		thanks_to: Vr,
		comments: qr,
		direction: Gr,
		strings: Wr
	};
	var ht = {};
	h(ht, {
		comments: () => Zr,
		default: () => ei,
		direction: () => Xr,
		strings: () => Qr,
		thanks_to: () => Jr
	});
	var Jr = "Diomed <https://github.com/diomed>", Zr = "", Xr = "ltr", Qr = {
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
	}, ei = {
		thanks_to: Jr,
		comments: Zr,
		direction: Xr,
		strings: Qr
	};
	var pt = {};
	h(pt, {
		comments: () => si,
		default: () => ni,
		direction: () => ri,
		strings: () => ii,
		thanks_to: () => ti
	});
	var ti = "Adam Laki <info@adamlaki.com>", si = "", ri = "ltr", ii = {
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
	}, ni = {
		thanks_to: ti,
		comments: si,
		direction: ri,
		strings: ii
	};
	var mt = {};
	h(mt, {
		comments: () => li,
		default: () => ui,
		direction: () => oi,
		strings: () => ci,
		thanks_to: () => ai
	});
	var ai = "Nixentric", li = "", oi = "ltr", ci = {
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
	}, ui = {
		thanks_to: ai,
		comments: li,
		direction: oi,
		strings: ci
	};
	var _t = {};
	h(_t, {
		comments: () => hi,
		default: () => _i,
		direction: () => pi,
		strings: () => mi,
		thanks_to: () => di
	});
	var di = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>", hi = "", pi = "ltr", mi = {
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
	}, _i = {
		thanks_to: di,
		comments: hi,
		direction: pi,
		strings: mi
	};
	var ft = {};
	h(ft, {
		comments: () => gi,
		default: () => Ti,
		direction: () => Ei,
		strings: () => bi,
		thanks_to: () => fi
	});
	var fi = "Tate", gi = "", Ei = "ltr", bi = {
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
	}, Ti = {
		thanks_to: fi,
		comments: gi,
		direction: Ei,
		strings: bi
	};
	var gt = {};
	h(gt, {
		comments: () => yi,
		default: () => ki,
		direction: () => Ri,
		strings: () => vi,
		thanks_to: () => Ci
	});
	var Ci = "Seokho Son <https://github.com/seokho-son>", yi = "", Ri = "ltr", vi = {
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
	}, ki = {
		thanks_to: Ci,
		comments: yi,
		direction: Ri,
		strings: vi
	};
	var Et = {};
	h(Et, {
		comments: () => Si,
		default: () => Oi,
		direction: () => Ni,
		strings: () => Mi,
		thanks_to: () => Ai
	});
	var Ai = "", Si = "", Ni = "ltr", Mi = {
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
	}, Oi = {
		thanks_to: Ai,
		comments: Si,
		direction: Ni,
		strings: Mi
	};
	var bt = {};
	h(bt, {
		comments: () => Hi,
		default: () => Ui,
		direction: () => wi,
		strings: () => Ii,
		thanks_to: () => xi
	});
	var xi = "I90rche", Hi = "", wi = "ltr", Ii = {
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
	}, Ui = {
		thanks_to: xi,
		comments: Hi,
		direction: wi,
		strings: Ii
	};
	var Tt = {};
	h(Tt, {
		comments: () => Fi,
		default: () => Di,
		direction: () => zi,
		strings: () => Pi,
		thanks_to: () => Li
	});
	var Li = "Harry Min Khant <https://harrymkt.github.io>", Fi = "", zi = "ltr", Pi = {
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
	}, Di = {
		thanks_to: Li,
		comments: Fi,
		direction: zi,
		strings: Pi
	};
	var Ct = {};
	h(Ct, {
		comments: () => Bi,
		default: () => Vi,
		direction: () => Ki,
		strings: () => $i,
		thanks_to: () => ji
	});
	var ji = "Eirik Mikkelsen", Bi = "", Ki = "ltr", $i = {
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
	}, Vi = {
		thanks_to: ji,
		comments: Bi,
		direction: Ki,
		strings: $i
	};
	var yt = {};
	h(yt, {
		comments: () => Gi,
		default: () => Ji,
		direction: () => Wi,
		strings: () => Yi,
		thanks_to: () => qi
	});
	var qi = "Paul van Brouwershaven", Gi = "", Wi = "ltr", Yi = {
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
	}, Ji = {
		thanks_to: qi,
		comments: Gi,
		direction: Wi,
		strings: Yi
	};
	var Rt = {};
	h(Rt, {
		comments: () => Xi,
		default: () => tn,
		direction: () => Qi,
		strings: () => en,
		thanks_to: () => Zi
	});
	var Zi = "Eirik Mikkelsen", Xi = "", Qi = "ltr", en = {
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
	}, tn = {
		thanks_to: Zi,
		comments: Xi,
		direction: Qi,
		strings: en
	};
	var vt = {};
	h(vt, {
		comments: () => rn,
		default: () => ln,
		direction: () => nn,
		strings: () => an,
		thanks_to: () => sn
	});
	var sn = "Christopher Wingate", rn = "", nn = "ltr", an = {
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
	}, ln = {
		thanks_to: sn,
		comments: rn,
		direction: nn,
		strings: an
	};
	var kt = {};
	h(kt, {
		comments: () => cn,
		default: () => hn,
		direction: () => un,
		strings: () => dn,
		thanks_to: () => on
	});
	var on = "", cn = "", un = "ltr", dn = {
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
		thanks_to: on,
		comments: cn,
		direction: un,
		strings: dn
	};
	var At = {};
	h(At, {
		comments: () => mn,
		default: () => gn,
		direction: () => _n,
		strings: () => fn,
		thanks_to: () => pn
	});
	var pn = "Jonatah", mn = "", _n = "ltr", fn = {
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
	}, gn = {
		thanks_to: pn,
		comments: mn,
		direction: _n,
		strings: fn
	};
	var St = {};
	h(St, {
		comments: () => bn,
		default: () => yn,
		direction: () => Tn,
		strings: () => Cn,
		thanks_to: () => En
	});
	var En = "Bogdan Mateescu <bogdan@surfverse.com>", bn = "", Tn = "ltr", Cn = {
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
	}, yn = {
		thanks_to: En,
		comments: bn,
		direction: Tn,
		strings: Cn
	};
	var Nt = {};
	h(Nt, {
		comments: () => vn,
		default: () => Sn,
		direction: () => kn,
		strings: () => An,
		thanks_to: () => Rn
	});
	var Rn = "Aleksandr Gordeev", vn = "", kn = "ltr", An = {
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
	}, Sn = {
		thanks_to: Rn,
		comments: vn,
		direction: kn,
		strings: An
	};
	var Mt = {};
	h(Mt, {
		comments: () => Mn,
		default: () => Hn,
		direction: () => On,
		strings: () => xn,
		thanks_to: () => Nn
	});
	var Nn = "Andrija Sagicc", Mn = "", On = "ltr", xn = {
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
	}, Hn = {
		thanks_to: Nn,
		comments: Mn,
		direction: On,
		strings: xn
	};
	var Ot = {};
	h(Ot, {
		comments: () => In,
		default: () => Fn,
		direction: () => Un,
		strings: () => Ln,
		thanks_to: () => wn
	});
	var wn = "Montazar Al-Jaber <montazar@nanawee.tech>", In = "", Un = "ltr", Ln = {
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
	}, Fn = {
		thanks_to: wn,
		comments: In,
		direction: Un,
		strings: Ln
	};
	var xt = {};
	h(xt, {
		comments: () => Pn,
		default: () => Bn,
		direction: () => Dn,
		strings: () => jn,
		thanks_to: () => zn
	});
	var zn = "Anonymous", Pn = "", Dn = "ltr", jn = {
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
	}, Bn = {
		thanks_to: zn,
		comments: Pn,
		direction: Dn,
		strings: jn
	};
	var Ht = {};
	h(Ht, {
		comments: () => $n,
		default: () => Gn,
		direction: () => Vn,
		strings: () => qn,
		thanks_to: () => Kn
	});
	var Kn = "", $n = "", Vn = "ltr", qn = {
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
	}, Gn = {
		thanks_to: Kn,
		comments: $n,
		direction: Vn,
		strings: qn
	};
	var wt = {};
	h(wt, {
		comments: () => Yn,
		default: () => Xn,
		direction: () => Jn,
		strings: () => Zn,
		thanks_to: () => Wn
	});
	var Wn = "Patiphon Loetsuthakun <ptphon@gmail.com>", Yn = "", Jn = "ltr", Zn = {
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
	}, Xn = {
		thanks_to: Wn,
		comments: Yn,
		direction: Jn,
		strings: Zn
	};
	var It = {};
	h(It, {
		comments: () => ea,
		default: () => ra,
		direction: () => ta,
		strings: () => sa,
		thanks_to: () => Qn
	});
	var Qn = "Taylan Özgür Bildik", ea = "", ta = "ltr", sa = {
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
	}, ra = {
		thanks_to: Qn,
		comments: ea,
		direction: ta,
		strings: sa
	};
	var Ut = {};
	h(Ut, {
		comments: () => na,
		default: () => oa,
		direction: () => aa,
		strings: () => la,
		thanks_to: () => ia
	});
	var ia = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>", na = "", aa = "ltr", la = {
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
	}, oa = {
		thanks_to: ia,
		comments: na,
		direction: aa,
		strings: la
	};
	var Lt = {};
	h(Lt, {
		comments: () => ua,
		default: () => pa,
		direction: () => da,
		strings: () => ha,
		thanks_to: () => ca
	});
	var ca = "Long Nhat Nguyen", ua = "", da = "ltr", ha = {
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
	}, pa = {
		thanks_to: ca,
		comments: ua,
		direction: da,
		strings: ha
	};
	var Ft = {};
	h(Ft, {
		comments: () => _a,
		default: () => Ea,
		direction: () => fa,
		strings: () => ga,
		thanks_to: () => ma
	});
	var ma = "Amber Song", _a = "", fa = "ltr", ga = {
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
	}, Ea = {
		thanks_to: ma,
		comments: _a,
		direction: fa,
		strings: ga
	};
	var zt = {};
	h(zt, {
		comments: () => Ta,
		default: () => Ra,
		direction: () => Ca,
		strings: () => ya,
		thanks_to: () => ba
	});
	var ba = "Amber Song", Ta = "", Ca = "ltr", ya = {
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
	}, Ra = {
		thanks_to: ba,
		comments: Ta,
		direction: Ca,
		strings: ya
	};
	var Pt = {};
	h(Pt, {
		comments: () => ka,
		default: () => Na,
		direction: () => Aa,
		strings: () => Sa,
		thanks_to: () => va
	});
	var va = "Amber Song", ka = "", Aa = "ltr", Sa = {
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
	}, Na = {
		thanks_to: va,
		comments: ka,
		direction: Aa,
		strings: Sa
	};
	var Ma = [
		We,
		Ye,
		Je,
		Ze,
		Xe,
		Qe,
		et,
		tt,
		st,
		rt,
		it,
		nt,
		at,
		lt,
		ot,
		ct,
		ut,
		dt,
		ht,
		pt,
		mt,
		_t,
		ft,
		gt,
		Et,
		bt,
		Tt,
		Ct,
		yt,
		Rt,
		vt,
		kt,
		At,
		St,
		Nt,
		Mt,
		Ot,
		xt,
		Ht,
		wt,
		It,
		Ut,
		Lt,
		Ft,
		zt,
		Pt
	], Jt = Ma, Zt = [
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
	function C(a) {
		let s = typeof a == "string" ? a.charCodeAt(0) : a;
		return s >= 97 && s <= 122 || s >= 65 && s <= 90;
	}
	function A(a) {
		let s = typeof a == "string" ? a.charCodeAt(0) : a;
		return s >= 48 && s <= 57;
	}
	function y(a) {
		return C(a) || A(a);
	}
	var Xt = [
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
	var Dt = {
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
	var xa = {}.hasOwnProperty;
	function Be(a, s) {
		if (a == null) throw new Error("Expected string, got `" + a + "`");
		let e = s || {}, t = Qt(), r = String(a), i = r.toLowerCase();
		if (xa.call(Dt, i)) {
			let o = Dt[i];
			return (e.normalize === null || e.normalize === void 0 || e.normalize) && typeof o == "string" ? Be(o) : (t[Xt.includes(i) ? "regular" : "irregular"] = r, t);
		}
		let n = 0;
		for (; C(i.charCodeAt(n)) && n < 9;) n++;
		if (n > 1 && n < 9) {
			if (t.language = r.slice(0, n), n < 4) {
				let o = 0;
				for (; i.charCodeAt(n) === 45 && C(i.charCodeAt(n + 1)) && C(i.charCodeAt(n + 2)) && C(i.charCodeAt(n + 3)) && !y(i.charCodeAt(n + 4));) {
					if (o > 2) return l(n, 3, "Too many extended language subtags, expected at most 3 subtags");
					t.extendedLanguageSubtags.push(r.slice(n + 1, n + 4)), n += 4, o++;
				}
			}
			for (i.charCodeAt(n) === 45 && C(i.charCodeAt(n + 1)) && C(i.charCodeAt(n + 2)) && C(i.charCodeAt(n + 3)) && C(i.charCodeAt(n + 4)) && !y(i.charCodeAt(n + 5)) && (t.script = r.slice(n + 1, n + 5), n += 5), i.charCodeAt(n) === 45 && (C(i.charCodeAt(n + 1)) && C(i.charCodeAt(n + 2)) && !y(i.charCodeAt(n + 3)) ? (t.region = r.slice(n + 1, n + 3), n += 3) : A(i.charCodeAt(n + 1)) && A(i.charCodeAt(n + 2)) && A(i.charCodeAt(n + 3)) && !y(i.charCodeAt(n + 4)) && (t.region = r.slice(n + 1, n + 4), n += 4)); i.charCodeAt(n) === 45;) {
				let o = n + 1, c = o;
				for (; y(i.charCodeAt(c));) {
					if (c - o > 7) return l(c, 1, "Too long variant, expected at most 8 characters");
					c++;
				}
				if (c - o > 4 || c - o > 3 && A(i.charCodeAt(o))) t.variants.push(r.slice(o, c)), n = c;
				else break;
			}
			for (; i.charCodeAt(n) === 45 && !(i.charCodeAt(n + 1) === 120 || !y(i.charCodeAt(n + 1)) || i.charCodeAt(n + 2) !== 45 || !y(i.charCodeAt(n + 3)));) {
				let o = n + 2, c = 0;
				for (; i.charCodeAt(o) === 45 && y(i.charCodeAt(o + 1)) && y(i.charCodeAt(o + 2));) {
					let u = o + 1;
					for (o = u + 2, c++; y(i.charCodeAt(o));) {
						if (o - u > 7) return l(o, 2, "Too long extension, expected at most 8 characters");
						o++;
					}
				}
				if (!c) return l(o, 4, "Empty extension, extensions must have at least 2 characters of content");
				t.extensions.push({
					extensions: r.slice(n + 3, o).split("-"),
					singleton: r.charAt(n + 1)
				}), n = o;
			}
		} else n = 0;
		if (n === 0 && i.charCodeAt(n) === 120 || i.charCodeAt(n) === 45 && i.charCodeAt(n + 1) === 120) {
			n = n ? n + 2 : 1;
			let o = n;
			for (; i.charCodeAt(o) === 45 && y(i.charCodeAt(o + 1));) {
				let c = n + 1;
				for (o = c; y(i.charCodeAt(o));) {
					if (o - c > 7) return l(o, 5, "Too long private-use area, expected at most 8 characters");
					o++;
				}
				t.privateuse.push(r.slice(n + 1, o)), n = o;
			}
			if (t.privateuse.length === 0) return l(n, 7, "Empty private-use area, expected at least 1 subtag");
		}
		if (n !== r.length) return l(n, 6, "Found superfluous content after tag");
		return t;
		function l(o, c, u) {
			return e.warning && e.warning(u, c, o), e.forgiving ? t : Qt();
		}
	}
	function Qt() {
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
	var ye = {}, es = Zt, ts = Jt;
	for (let a = 0; a < es.length; a++) {
		let s = es[a].match(/([^\/]+)\.json$/);
		if (!s) continue;
		let e = s[1];
		ye[e] = {
			language: e,
			direction: ts[a].direction || "ltr",
			...ts[a].strings
		};
	}
	function ss(a) {
		if (!a) return ye.en;
		let s = Be(a.toLowerCase()), e = [];
		s.language && s.script && s.region && e.push(`${s.language}-${s.script}-${s.region}`), s.language && s.region && e.push(`${s.language}-${s.region}`), s.language && e.push(s.language);
		for (let t of e) if (ye[t]) return ye[t];
		return ye.en;
	}
	function rs(a, s = {}, e) {
		if (!a) return "";
		let t = a;
		for (let [r, i] of Object.entries(s)) {
			let n = typeof i == "number" && e ? new Intl.NumberFormat(e).format(i) : String(i);
			t = t.replace(new RegExp(`\\[${r}\\]`, "g"), n);
		}
		return t;
	}
	var Ke = class {
		constructor(s) {
			this.regions = null;
			this.politeIndex = 0;
			this.assertiveIndex = 0;
			this.clearTimeoutId = null;
			this.idGenerator = s, this.containerId = s("pf-announcer"), this.createRegions();
		}
		createRegions() {
			if (typeof document > "u") return;
			let s = document.createElement("div");
			s.id = this.containerId, s.setAttribute("data-pagefind-announcer", "");
			let e = (t) => {
				let r = [];
				for (let i = 0; i < 2; i++) {
					let n = document.createElement("div");
					n.id = this.idGenerator(`pf-${t}-region`), n.setAttribute("role", "status"), n.setAttribute("aria-live", t), n.setAttribute("aria-atomic", "true"), n.setAttribute("data-pf-sr-hidden", ""), s.appendChild(n), r.push(n);
				}
				return r;
			};
			this.regions = {
				polite: e("polite"),
				assertive: e("assertive")
			}, document.body.appendChild(s);
		}
		announce(s, e = "polite") {
			if (!this.regions || !s) return;
			this.clearTimeoutId && (clearTimeout(this.clearTimeoutId), this.clearTimeoutId = null);
			let t = e === "polite" ? this.politeIndex : this.assertiveIndex, r = this.regions[e][t];
			e === "polite" ? this.politeIndex = t === 0 ? 1 : 0 : this.assertiveIndex = t === 0 ? 1 : 0;
			let i = e === "polite" ? this.politeIndex : this.assertiveIndex;
			this.regions[e][i].textContent = "", setTimeout(() => {
				r.textContent = s, this.clearTimeoutId = setTimeout(() => {
					r.textContent = "", this.clearTimeoutId = null;
				}, 350);
			}, 100);
		}
		clear() {
			if (this.regions) {
				this.clearTimeoutId && (clearTimeout(this.clearTimeoutId), this.clearTimeoutId = null);
				for (let s of ["polite", "assertive"]) for (let e of this.regions[s]) e.textContent = "";
			}
		}
		destroy() {
			if (this.clear(), typeof document < "u") {
				let s = document.getElementById(this.containerId);
				s && s.remove();
			}
			this.regions = null;
		}
	};
	var jt;
	try {
		if (document?.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT") {
			let a = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind[-_])?component[-_]?ui.js.*$/);
			a && (jt = a[1]);
		}
	} catch {
		jt = "/pagefind/";
	}
	var Re = class {
		constructor(s, e = {}) {
			this.__pagefind__ = null;
			this.__loadPromise__ = null;
			this.__searchID__ = 0;
			this._translations = null;
			this._userTranslations = {};
			this._direction = "ltr";
			this._languageSet = !1;
			this.components = [];
			this.componentsByType = {};
			this.searchTerm = "";
			this.searchFilters = {};
			this.searchSort = {};
			this.searchResult = { results: [] };
			this.availableFilters = null;
			this.totalFilters = null;
			this.activeShortcuts = [];
			this.faceted = !1;
			this.generatedIds = new Set();
			this.name = s, this.__hooks__ = {
				search: [],
				filters: [],
				loading: [],
				results: [],
				error: [],
				translations: []
			}, this.options = {
				bundlePath: e.bundlePath ?? jt ?? "/pagefind/",
				mergeIndex: e.mergeIndex ?? []
			};
			let t = { ...e };
			delete t.bundlePath, delete t.mergeIndex, this.pagefindOptions = t, this._announcer = new Ke(this.generateId.bind(this));
		}
		applyOptions(s) {
			if (this.__pagefind__) {
				console.warn(`[Pagefind Component UI]: Instance "${this.name}" has already loaded, configuration ignored`);
				return;
			}
			let { bundlePath: e, mergeIndex: t, ...r } = s;
			e !== void 0 && (this.options.bundlePath = e), t !== void 0 && (this.options.mergeIndex = t), this.pagefindOptions = {
				...this.pagefindOptions,
				...r
			};
		}
		generateId(s, e = 2) {
			let t = "abcdef", r = (o = 3) => {
				let c = "";
				for (let u = 0; u < o; u++) c += t[Math.floor(Math.random() * t.length)];
				return c;
			}, i = this.name !== "default" ? `${this.name}-` : "", n = Array.from({ length: e }, () => r()).join("-"), l = `${s}-${i}${n}`;
			return this.generatedIds.has(l) || document.getElementById(l) ? this.generateId(s, e + 1) : (this.generatedIds.add(l), l);
		}
		add(s) {
			s?.register?.(this), this.components.push(s);
		}
		registerInput(s, e = {}) {
			this._registerComponent(s, "input", null, e);
		}
		registerResults(s, e = {}) {
			this._registerComponent(s, "results", null, e);
		}
		registerSummary(s, e = {}) {
			this._registerComponent(s, "summary", null, e);
		}
		registerFilter(s, e = {}) {
			this._registerComponent(s, "filter", null, e);
		}
		registerSort(s, e = {}) {
			this._registerComponent(s, "sort", null, e);
		}
		registerUtility(s, e = null, t = {}) {
			this._registerComponent(s, "utility", e, t);
		}
		_registerComponent(s, e, t = null, r = {}) {
			if (this.componentsByType[e] || (this.componentsByType[e] = []), this.ensureLanguage(), this.components.includes(s)) {
				s.capabilities = r, this.reconcileAria();
				return;
			}
			s.componentType = e, s.componentSubtype = t, s.capabilities = r, this.componentsByType[e].push(s), this.components.push(s), this.reconcileAria();
		}
		unregisterComponent(s) {
			this.components = this.components.filter((t) => t !== s);
			let e = s.componentType;
			e && this.componentsByType[e] && (this.componentsByType[e] = this.componentsByType[e].filter((t) => t !== s)), Object.keys(this.__hooks__).forEach((t) => {
				this.__hooks__[t] = this.__hooks__[t].filter((r) => typeof r == "function" || r.owner !== s);
			});
		}
		getInputs(s = null) {
			let e = this.componentsByType.input || [];
			return s ? e.filter((t) => t.capabilities?.[s]) : e;
		}
		getResults(s = null) {
			let e = this.componentsByType.results || [];
			return s ? e.filter((t) => t.capabilities?.[s]) : e;
		}
		getSummaries(s = null) {
			let e = this.componentsByType.summary || [];
			return s ? e.filter((t) => t.capabilities?.[s]) : e;
		}
		getFilters(s = null) {
			let e = this.componentsByType.filter || [];
			return s ? e.filter((t) => t.capabilities?.[s]) : e;
		}
		getSorts(s = null) {
			let e = this.componentsByType.sort || [];
			return s ? e.filter((t) => t.capabilities?.[s]) : e;
		}
		getUtilities(s = null, e = null) {
			let t = this.componentsByType.utility || [];
			return s !== null && (t = t.filter((r) => r.componentSubtype === s)), e && (t = t.filter((r) => r.capabilities?.[e])), t;
		}
		hasAnnouncementCapability() {
			return this.components.some((s) => s.capabilities?.announcements === !0);
		}
		registerShortcut(s, e) {
			let t = {
				...s,
				owner: e
			};
			this.activeShortcuts.push(t), this.notifyShortcutsChanged();
		}
		deregisterShortcut(s, e) {
			this.activeShortcuts = this.activeShortcuts.filter((t) => !(t.label === s && t.owner === e)), this.notifyShortcutsChanged();
		}
		deregisterAllShortcuts(s) {
			this.activeShortcuts = this.activeShortcuts.filter((e) => e.owner !== s), this.notifyShortcutsChanged();
		}
		getActiveShortcuts() {
			return this.activeShortcuts;
		}
		notifyShortcutsChanged() {
			this.getUtilities("keyboard-hints").forEach((e) => e.render?.());
		}
		focusNextResults(s) {
			let e = this.getResults("keyboardNavigation"), t = Yt(s, e);
			if (!t) return !1;
			let r = t.querySelector("a");
			return r ? (r.focus(), !0) : !1;
		}
		focusPreviousInput(s) {
			let e = this.getInputs("keyboardNavigation"), t = je(s, e);
			if (!t) return !1;
			if (t.focus) return t.focus(), !0;
			let r = t.querySelector("input");
			return r ? (r.focus(), !0) : !1;
		}
		focusInputAndType(s, e) {
			let t = this.getInputs("keyboardNavigation"), r = je(s, t), i = r?.inputEl || r?.querySelector("input");
			i && (i.value += e, i.focus(), i.dispatchEvent(new Event("input", { bubbles: !0 })));
		}
		focusInputAndDelete(s) {
			let e = this.getInputs("keyboardNavigation"), t = je(s, e), r = t?.inputEl || t?.querySelector("input");
			r && (r.value = r.value.slice(0, -1), r.focus(), r.dispatchEvent(new Event("input", { bubbles: !0 })));
		}
		reconcileAria() {
			this.components.forEach((s) => s.reconcileAria?.());
		}
		get direction() {
			return this._direction;
		}
		ensureLanguage() {
			this._languageSet || this.setLanguage();
		}
		setLanguage(s) {
			s || (s = document?.documentElement?.lang || "en"), this._translations = ss(s), this._direction = this._translations.direction || "ltr", this._languageSet = !0, this.__dispatch__("translations", this._translations, this._direction);
		}
		setTranslations(s) {
			this._userTranslations = {
				...this._userTranslations,
				...s
			}, this.__dispatch__("translations", this._translations, this._direction);
		}
		translate(s, e = {}) {
			let t = this._userTranslations[s] ?? this._translations?.[s];
			return rs(typeof t == "string" ? t : void 0, e, this._translations?.language);
		}
		announce(s, e = {}, t = "polite") {
			let r = this.translate(s, e);
			r && this._announcer.announce(r, t);
		}
		announceRaw(s, e = "polite") {
			this._announcer.announce(s, e);
		}
		clearAnnouncements() {
			this._announcer.clear();
		}
		on(s, e, t = null) {
			if (!this.__hooks__[s]) {
				let r = Object.keys(this.__hooks__).join(", ");
				console.error(`[Pagefind Component UI]: Unknown event type ${s}. Supported events: [${r}]`);
				return;
			}
			if (typeof e != "function") {
				console.error(`[Pagefind Component UI]: Expected callback to be a function, received ${typeof e}`);
				return;
			}
			if (t) {
				let r = this.__hooks__[s].findIndex((i) => typeof i == "object" && i.owner === t);
				if (r !== -1) {
					this.__hooks__[s][r] = {
						callback: e,
						owner: t
					};
					return;
				}
				this.__hooks__[s].push({
					callback: e,
					owner: t
				});
			} else this.__hooks__[s].push(e);
		}
		triggerLoad() {
			return this.__load__();
		}
		triggerSearch(s) {
			this.searchTerm = s, this.__dispatch__("search", s, this.searchFilters), this.__search__(s, this.searchFilters);
		}
		triggerSearchWithFilters(s, e) {
			this.searchTerm = s, this.searchFilters = e, this.__dispatch__("search", s, e), this.__search__(s, e);
		}
		triggerFilters(s) {
			this.searchFilters = s, this.__dispatch__("search", this.searchTerm, s), this.__search__(this.searchTerm, s);
		}
		triggerFilter(s, e) {
			this.searchFilters = this.searchFilters || {}, this.searchFilters[s] = e, this.__dispatch__("search", this.searchTerm, this.searchFilters), this.__search__(this.searchTerm, this.searchFilters);
		}
		__dispatch__(s, ...e) {
			this.__hooks__[s]?.forEach((t) => {
				typeof t == "function" ? t(...e) : t?.callback && t.callback(...e);
			});
		}
		async __clear__() {
			this.__dispatch__("results", {
				results: [],
				unfilteredTotalCount: 0
			}), this.__pagefind__ && (this.availableFilters = await this.__pagefind__.filters(), this.totalFilters = this.availableFilters, this.__dispatch__("filters", {
				available: this.availableFilters,
				total: this.totalFilters
			}));
		}
		async __search__(s, e) {
			this.__dispatch__("loading"), await this.__load__();
			let t = ++this.__searchID__;
			if ((!s || !s.length) && !this.faceted) return this.__clear__();
			if (!this.__pagefind__) return;
			let r = s && s.length ? s : null, i = await this.__pagefind__.search(r, {
				filters: e,
				sort: this.searchSort
			});
			if (i && this.__searchID__ === t && (i.filters && Object.keys(i.filters)?.length && (this.availableFilters = i.filters, this.totalFilters = i.totalFilters ?? null, this.__dispatch__("filters", {
				available: this.availableFilters,
				total: this.totalFilters
			})), this.searchResult = i, this.__dispatch__("results", this.searchResult), !this.hasAnnouncementCapability() && s)) {
				let n = i.results?.length ?? 0, l = n === 0 ? "zero_results" : n === 1 ? "one_result" : "many_results", o = n === 0 ? "assertive" : "polite";
				this.announce(l, {
					SEARCH_TERM: s,
					COUNT: n
				}, o);
			}
		}
		async __load__() {
			if (!this.__pagefind__) {
				if (this.__loadPromise__) return this.__loadPromise__;
				this.__loadPromise__ = this.__doLoad__();
				try {
					await this.__loadPromise__;
				} finally {
					this.__loadPromise__ = null;
				}
			}
		}
		async __doLoad__() {
			if (this.__pagefind__) return;
			let s;
			try {
				s = await import(`${this.options.bundlePath}pagefind.js`);
			} catch (t) {
				console.error(t), console.error([`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`, "You can configure this by passing a bundlePath option to the Pagefind Component UI"].join(`
`)), document?.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" ? console.error(`[DEBUG: Loaded from ${document.currentScript?.src ?? "bad script location"}]`) : console.error("no known script location"), this.__dispatch__("error", {
					type: "bundle_load_failed",
					message: "Could not load search bundle",
					bundlePath: this.options.bundlePath,
					error: t
				}), this.hasAnnouncementCapability() || this.announce("error_search", {}, "assertive");
				return;
			}
			let e = s.createInstance(this.pagefindOptions || {});
			for (let t of this.options.mergeIndex) {
				if (!t.bundlePath) throw new Error("mergeIndex requires a bundlePath parameter");
				let { bundlePath: r, ...i } = t;
				await e.mergeIndex(r, i);
			}
			this.__pagefind__ = e, this.availableFilters = await this.__pagefind__.filters(), this.totalFilters = this.availableFilters, this.__dispatch__("filters", {
				available: this.availableFilters,
				total: this.totalFilters
			}), this.faceted && this.__searchID__ === 0 && this.triggerSearch("");
		}
		thinSubResults(s, e = 3) {
			if (s.length <= e) return s;
			let t = [...s].sort((r, i) => (i.locations?.length ?? 0) - (r.locations?.length ?? 0)).slice(0, e).map((r) => r.url);
			return s.filter((r) => t.includes(r.url));
		}
		getDisplaySubResults(s, e = 3) {
			if (!Array.isArray(s.sub_results)) return [];
			let r = s.sub_results[0]?.url === (s.meta?.url || s.url) ? s.sub_results.slice(1) : s.sub_results;
			return this.thinSubResults(r, e);
		}
	};
	var Kt = class {
		constructor() {
			this.instances = new Map();
			this.defaultOptions = { bundlePath: this.detectBundlePath() };
		}
		detectBundlePath() {
			try {
				if (document?.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT") {
					let s = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind[-_])?.*\.js.*$/);
					if (s) return s[1];
				}
			} catch {}
			return "/pagefind/";
		}
		getInstance(s = "default", e = {}) {
			let t = this.instances.get(s);
			if (t) return t;
			let r = {
				...this.defaultOptions,
				...e
			}, i = new Re(s, r);
			return this.instances.set(s, i), i;
		}
		hasInstance(s) {
			return this.instances.has(s);
		}
		removeInstance(s) {
			this.instances.delete(s);
		}
		getInstanceNames() {
			return Array.from(this.instances.keys());
		}
	}, Bt = null;
	function ve() {
		return Bt || (Bt = new Kt()), Bt;
	}
	function is(a, s) {
		let e = ve();
		if (e.hasInstance(a)) {
			let t = e.getInstance(a);
			return t.applyOptions(s), t;
		}
		return e.getInstance(a, s);
	}
	var ke = (a) => !(a == null || a === !1 || a === 0 || a === "" || Number.isNaN(a) || Array.isArray(a) && a.length === 0 || typeof a == "object" && a !== null && !Array.isArray(a) && Object.keys(a).length === 0), b = (a, s, e) => a.length < s ? `[Error: ${e}() needs ${s} args]` : null, ns = {
		eq: (a, ...s) => b(s, 2, "eq") ?? m(s[0], a) === m(s[1], a),
		ne: (a, ...s) => b(s, 2, "ne") ?? m(s[0], a) !== m(s[1], a),
		gt: (a, ...s) => b(s, 2, "gt") ?? Number(m(s[0], a)) > Number(m(s[1], a)),
		lt: (a, ...s) => b(s, 2, "lt") ?? Number(m(s[0], a)) < Number(m(s[1], a)),
		gte: (a, ...s) => b(s, 2, "gte") ?? Number(m(s[0], a)) >= Number(m(s[1], a)),
		lte: (a, ...s) => b(s, 2, "lte") ?? Number(m(s[0], a)) <= Number(m(s[1], a)),
		and: (a, ...s) => {
			let e = !0;
			for (let t of s) if (e = m(t, a), !ke(e)) return e;
			return e;
		},
		or: (a, ...s) => {
			let e = !1;
			for (let t of s) if (e = m(t, a), ke(e)) return e;
			return e;
		},
		not: (a, ...s) => b(s, 1, "not") ?? !ke(m(s[0], a)),
		lowercase: (a, ...s) => String(m(s[0], a)).toLowerCase(),
		uppercase: (a, ...s) => String(m(s[0], a)).toUpperCase(),
		trim: (a, ...s) => String(m(s[0], a)).trim(),
		truncate: (a, ...s) => {
			let e = b(s, 2, "truncate");
			if (e) return e;
			let t = String(m(s[0], a)), r = Number(m(s[1], a)), i = s[2] ? String(m(s[2], a)) : "...";
			return t.length > r ? t.slice(0, r) + i : t;
		},
		replace: (a, ...s) => b(s, 3, "replace") ?? String(m(s[0], a)).split(String(m(s[1], a))).join(String(m(s[2], a))),
		limit: (a, ...s) => {
			let e = b(s, 2, "limit");
			if (e) return e;
			let t = m(s[0], a), r = m(s[1], a);
			return Array.isArray(t) ? t.slice(0, r < 0 ? 0 : r) : t;
		},
		first: (a, ...s) => {
			let e = b(s, 1, "first");
			if (e) return e;
			let t = m(s[0], a);
			return Array.isArray(t) ? t[0] : t;
		},
		last: (a, ...s) => {
			let e = b(s, 1, "last");
			if (e) return e;
			let t = m(s[0], a);
			return Array.isArray(t) ? t[t.length - 1] : t;
		},
		length: (a, ...s) => {
			let e = b(s, 1, "length");
			if (e) return e;
			let t = m(s[0], a);
			return Array.isArray(t) ? t.length : String(t).length;
		},
		join: (a, ...s) => b(s, 2, "join") ?? ((e) => Array.isArray(e) ? e.join(String(m(s[1], a))) : String(e))(m(s[0], a)),
		default: (a, ...s) => {
			let e = b(s, 2, "default");
			if (e) return e;
			let t = m(s[0], a);
			return ke(t) ? t : m(s[1], a);
		},
		safeUrl: (a, ...s) => {
			let e = String(m(s[0], a) ?? "").trim();
			return e && /^(?:\.{0,2}\/|[#?]|(?:https?|ftp):\/\/|(?:mailto|tel):)/i.test(e) ? e : "";
		}
	}, m = (a, s) => {
		if (!a) return;
		if (a.t === "L") return a.val;
		if (a.t === "V") {
			let t = (i, n) => Object.prototype.hasOwnProperty.call(i, n), r = s;
			for (let i of a.path) {
				if (r == null || !t(r, i)) return;
				r = r[i];
			}
			return r;
		}
		let e = ns[a.fn];
		return e ? a.t === "C" ? e(s, ...a.args) : e(s, a.left, ...a.args) : `[Error: unknown ${a.fn}()]`;
	}, Ha = (a) => a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), Ae = (a, s) => {
		let e = "";
		for (let t of a) {
			if (t.t === "T") {
				e += t.val;
				continue;
			}
			if (t.t === "I") {
				let r = m(t.expr, s);
				if (Array.isArray(r)) e += "[Error: use #each for arrays]";
				else if (typeof r == "object" && r !== null) e += "[Error: cannot render object]";
				else {
					let i = String(r ?? "");
					e += t.raw ? i : Ha(i);
				}
				continue;
			}
			if (t.t === "F") {
				let r = !1;
				for (let i of t.branches) if (ke(m(i.cond, s))) {
					e += Ae(i.body, s), r = !0;
					break;
				}
				!r && t.else && (e += Ae(t.else, s));
				continue;
			}
			if (t.t === "E") {
				let r = m(t.arr, s);
				if (!Array.isArray(r)) {
					e += "[Error: #each needs array]";
					continue;
				}
				if (!r.length && t.else) e += Ae(t.else, s);
				else for (let i = 0; i < r.length; i++) {
					let n = {
						...s,
						[t.as]: r[i]
					};
					t.idx && (n[t.idx] = i), e += Ae(t.body, n);
				}
			}
		}
		return e;
	}, k = (a) => {
		let s = a, e = 0, t = () => {
			for (; e < s.length && ` 	
\r`.includes(s[e]);) e++;
		}, r = (u) => s.slice(e, e + u.length) === u, i = (u) => {
			r(u) && (e += u.length);
		}, n = () => {
			let u = "";
			for (; e < s.length && /\w/.test(s[e]);) u += s[e++];
			return u;
		}, l = () => {
			t();
			let u = e, d, _ = s[e];
			if (_ === "\"" || _ === "'") {
				let p = s[e++], g = "";
				for (; e < s.length && s[e] !== p;) {
					if (s[e] === "\\" && e + 1 < s.length) {
						e++;
						let E = s[e];
						g += E === "n" ? `
` : E === "t" ? "	" : E === "r" ? "\r" : E, e++;
						continue;
					}
					g += s[e++];
				}
				e < s.length ? e++ : g = "", d = {
					t: "L",
					val: g
				};
			} else if (/[-0-9.]/.test(_)) {
				let p = "", g = 0;
				for (s[e] === "-" && (p += s[e++]), s[e] === "." && (p += s[e++], g = 1); e < s.length && (/[0-9]/.test(s[e]) || s[e] === "." && !g++);) p += s[e++];
				d = p === "-" || p === "." || p === "" ? {
					t: "V",
					path: [p || "-"]
				} : {
					t: "L",
					val: parseFloat(p)
				};
			} else {
				let p = n();
				if (p === "true") d = {
					t: "L",
					val: !0
				};
				else if (p === "false") d = {
					t: "L",
					val: !1
				};
				else if (p === "null") d = {
					t: "L",
					val: null
				};
				else if (t(), s[e] === "(") {
					e++;
					let g = [];
					for (t(); e < s.length && s[e] !== ")" && s[e] !== "}";) g.push(l()), t(), s[e] === "," && (e++, t());
					s[e] === ")" && e++, d = {
						t: "C",
						fn: p,
						args: g
					};
				} else {
					let g = [p];
					for (; s[e] === ".";) e++, g.push(n());
					d = {
						t: "V",
						path: g
					};
				}
			}
			for (t(); s[e] === "|";) {
				e++, t();
				let p = n();
				t();
				let g = [];
				if (s[e] === "(") {
					for (e++, t(); e < s.length && s[e] !== ")" && s[e] !== "}";) g.push(l()), t(), s[e] === "," && (e++, t());
					s[e] === ")" && e++;
				}
				d = {
					t: "P",
					left: d,
					fn: p,
					args: g
				}, t();
			}
			return e === u && e < s.length && e++, d;
		}, o = (u = []) => {
			let d = [];
			e: for (; e < s.length;) {
				for (let p of u) if (r(p)) break e;
				if (s[e] === "\\" && r("\\{{")) {
					e++, d.push({
						t: "T",
						val: "{{"
					}), e += 2;
					continue;
				}
				if (r("{{")) {
					if (e += 2, t(), s[e] === "+") {
						e++, t();
						let g = l();
						for (t(), i("+"), t(); e < s.length && !r("}}");) e++;
						i("}}"), d.push({
							t: "I",
							expr: g,
							raw: 1
						});
						continue;
					}
					if (s[e] === "#") {
						e++;
						let g = n();
						if (t(), g === "if") {
							let E = [], T = l();
							for (t(), i("}}"), E.push({
								cond: T,
								body: o([
									"{{:else if",
									"{{:elseif",
									"{{:else}}",
									"{{/if}}"
								])
							}); r("{{:else if") || r("{{:elseif");) {
								e += r("{{:elseif") ? 9 : 10, t();
								let v = l();
								t(), i("}}"), E.push({
									cond: v,
									body: o([
										"{{:else if",
										"{{:elseif",
										"{{:else}}",
										"{{/if}}"
									])
								});
							}
							let R;
							r("{{:else}}") && (e += 9, R = o(["{{/if}}"])), i("{{/if}}"), d.push({
								t: "F",
								branches: E,
								else: R
							});
							continue;
						}
						if (g === "each") {
							let E = l();
							t();
							let T = n();
							if (t(), T !== "as") {
								d.push({
									t: "T",
									val: "[Error: #each missing 'as']"
								});
								continue;
							}
							let R = n();
							t();
							let v;
							s[e] === "," && (e++, t(), v = n(), t()), i("}}");
							let Ge = o(["{{:else}}", "{{/each}}"]), M;
							r("{{:else}}") && (e += 9, M = o(["{{/each}}"])), i("{{/each}}"), d.push({
								t: "E",
								arr: E,
								as: R,
								idx: v,
								body: Ge,
								else: M
							});
							continue;
						}
						d.push({
							t: "T",
							val: `[Error: unknown #${g}]`
						}), t(), i("}}");
						continue;
					}
					let p = l();
					for (t(); e < s.length && !r("}}");) e++;
					i("}}"), d.push({
						t: "I",
						expr: p
					});
					continue;
				}
				let _ = "";
				for (; e < s.length;) {
					for (let p of u) if (r(p)) {
						_ && d.push({
							t: "T",
							val: _
						});
						continue e;
					}
					if (s[e] === "\\" && r("\\{{") || r("{{")) break;
					_ += s[e++];
				}
				_ && d.push({
					t: "T",
					val: _
				});
			}
			return d;
		}, c = o();
		return (u) => Ae(c, u);
	};
	var as = (a, s) => {
		ns[a] = (e, ...t) => s(...t.map((r) => m(r, e)));
	};
	var f = class extends HTMLElement {
		constructor() {
			super();
			this.instance = null;
			this._initialized = !1;
		}
		connectedCallback() {
			if (this._initialized) return;
			this._initialized = !0;
			let e = this.getAttribute("instance") || "default", t = ve();
			this.instance = t.getInstance(e), this.instance.ensureLanguage(), this.init(), this.register && typeof this.register == "function" && this.register(this.instance);
		}
		disconnectedCallback() {
			this.cleanup && typeof this.cleanup == "function" && this.cleanup(), this.instance?.unregisterComponent(this), this._initialized = !1;
		}
		attributeChangedCallback(e, t, r) {
			if (!this._initialized || t === r) return;
			let i = this.kebabToCamel(e);
			r === "false" ? this[i] = !1 : r === "true" ? this[i] = !0 : r == null ? this[i] = !1 : this[i] = r, this.update && typeof this.update == "function" && this.update();
		}
		kebabToCamel(e) {
			return e.replace(/-([a-z])/g, (t) => t[1].toUpperCase());
		}
		ensureId(e = "pagefind") {
			return !this.id && this.instance && (this.id = this.instance.generateId(e)), this.id;
		}
		init() {}
		reconcileAria() {}
		register(e) {}
		cleanup() {}
		update() {}
		showError(e) {
			let t = document.createElement("div");
			t.className = "pf-error", t.innerHTML = `
            <strong>Pagefind Error:</strong> ${this.escapeHtml(e.message || "Unknown error")}
            ${e.details ? `<br><small>${this.escapeHtml(e.details)}</small>` : ""}
        `, this.appendChild(t), this.dispatchEvent(new CustomEvent("pagefind-error", {
				detail: e,
				bubbles: !0,
				composed: !0
			}));
		}
		escapeHtml(e) {
			let t = document.createElement("div");
			return t.textContent = e, t.innerHTML;
		}
	};
	var Se = class extends f {
		init() {
			this.setAttribute("hidden", "");
		}
		register(s) {
			s.registerUtility(this);
			let e = this.getAttribute("bundle-path");
			e && (s.options.bundlePath = e);
			let t = this.getAttribute("base-url");
			t && (s.pagefindOptions.baseUrl = t);
			let r = this.getAttribute("excerpt-length");
			r && (s.pagefindOptions.excerptLength = parseInt(r, 10));
			let i = this.getAttribute("excerpt-ellipsis");
			i && (s.pagefindOptions.excerptEllipsis = i);
			let n = this.getAttribute("lang");
			n && s.setLanguage(n);
			let l = this.getAttribute("meta-cache-tag");
			l && (s.pagefindOptions.metaCacheTag = l);
			let o = this.getAttribute("highlight-param");
			o && (s.pagefindOptions.highlightParam = o);
			let c = this.getAttribute("sort");
			if (c) {
				let [u, d = "asc"] = c.split(":");
				s.searchSort = { [u]: d };
			}
			this.hasAttribute("exact-diacritics") && (s.pagefindOptions.exactDiacritics = !0), this.hasAttribute("no-worker") && (s.pagefindOptions.noWorker = !0), this.hasAttribute("faceted") && (s.faceted = !0), this.hasAttribute("preload") && s.triggerLoad();
		}
	};
	customElements.get("pagefind-config") || customElements.define("pagefind-config", Se);
	function S(a) {
		let s = !1, e = Number.NEGATIVE_INFINITY;
		return a.addEventListener("compositionstart", () => {
			s = !0;
		}), a.addEventListener("compositionend", () => {
			s = !1, e = performance.now();
		}), a.addEventListener("keyup", () => {
			e = Number.NEGATIVE_INFINITY;
		}), a.addEventListener("focusout", () => {
			s = !1;
		}), (t) => t.isComposing || s || performance.now() - e < 50;
	}
	var wa = (a = 100) => new Promise((s) => setTimeout(s, a)), Ne = class extends f {
		constructor() {
			super();
			this.inputEl = null;
			this.clearEl = null;
			this.searchID = 0;
			this.placeholder = "";
			this.debounce = 300;
			this.autofocus = !1;
		}
		static get observedAttributes() {
			return [
				"placeholder",
				"debounce",
				"autofocus"
			];
		}
		readAttributes() {
			this.hasAttribute("placeholder") && (this.placeholder = this.getAttribute("placeholder") || ""), this.hasAttribute("debounce") && (this.debounce = parseInt(this.getAttribute("debounce") || "300", 10) || 300), this.hasAttribute("autofocus") && (this.autofocus = this.hasAttribute("autofocus"));
		}
		init() {
			this.readAttributes(), this.render();
		}
		render() {
			this.innerHTML = "";
			let e = this.instance.generateId("pfmod-input"), t = this.instance?.translate("search_label") || "Search this site", r = this.instance?.translate("clear_search") || "Clear", i = this.placeholder || this.instance?.translate("placeholder") || "Search";
			this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir");
			let n = document.createElement("search");
			n.className = "pf-input-wrapper", n.setAttribute("role", "search"), n.setAttribute("aria-label", t);
			let l = document.createElement("label");
			l.setAttribute("for", e), l.setAttribute("data-pf-sr-hidden", "true"), l.textContent = t, n.appendChild(l), this.inputEl = document.createElement("input"), this.inputEl.id = e, this.inputEl.className = "pf-input", this.inputEl.setAttribute("type", "search"), this.inputEl.setAttribute("autocomplete", "off"), this.inputEl.setAttribute("autocapitalize", "none"), this.inputEl.setAttribute("enterkeyhint", "search"), this.inputEl.setAttribute("placeholder", i), this.autofocus && this.inputEl.setAttribute("autofocus", "autofocus");
			let o = this.instance.generateId("pf-input-hint"), c = this.instance?.translate("input_hint") || "Results will appear as you type", u = document.createElement("span");
			u.id = o, u.setAttribute("data-pf-sr-hidden", "true"), u.textContent = c, this.inputEl.setAttribute("aria-describedby", o), n.appendChild(this.inputEl), n.appendChild(u), this.clearEl = document.createElement("button"), this.clearEl.className = "pf-input-clear", this.clearEl.setAttribute("type", "button"), this.clearEl.setAttribute("data-pf-suppressed", "true"), this.clearEl.textContent = r, n.appendChild(this.clearEl), this.appendChild(n), this.setupEventHandlers();
		}
		setupEventHandlers() {
			if (!this.inputEl || !this.clearEl) return;
			this.inputEl.addEventListener("input", async (t) => {
				let r = t.target;
				if (this.instance && typeof r?.value == "string") {
					this.updateState(r.value);
					let i = ++this.searchID;
					if (await wa(this.debounce), i !== this.searchID) return;
					this.instance?.triggerSearch(r.value);
				}
			});
			let e = S(this.inputEl);
			this.inputEl.addEventListener("keydown", (t) => {
				e(t) || (t.key === "Escape" && (++this.searchID, this.inputEl && (this.inputEl.value = ""), this.instance?.triggerSearch(""), this.updateState("")), t.key === "ArrowDown" && (t.preventDefault(), this.inputEl && this.instance?.focusNextResults(this.inputEl)));
			}), this.inputEl.addEventListener("focus", () => {
				this.instance?.triggerLoad();
				let t = this.instance?.translate("keyboard_navigate") || "navigate", r = this.instance?.translate("keyboard_clear") || "clear";
				this.instance?.registerShortcut({
					label: "↓",
					description: t
				}, this), this.instance?.registerShortcut({
					label: "esc",
					description: r
				}, this);
			}), this.inputEl.addEventListener("blur", () => {
				this.instance?.deregisterAllShortcuts(this);
			}), this.clearEl.addEventListener("click", () => {
				this.inputEl && (this.inputEl.value = "", this.instance?.triggerSearch(""), this.updateState(""), this.inputEl.focus());
			});
		}
		updateState(e) {
			this.clearEl && (e && e?.length ? this.clearEl.removeAttribute("data-pf-suppressed") : this.clearEl.setAttribute("data-pf-suppressed", "true"));
		}
		register(e) {
			e.registerInput(this, { keyboardNavigation: !0 }), e.on("search", (t) => {
				this.inputEl && document.activeElement !== this.inputEl && (this.inputEl.value = t, this.updateState(t));
			}, this), e.on("error", (t) => {
				let r = t;
				this.showError({
					message: r.message || "Search initialization failed",
					details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0
				});
			}, this), e.on("translations", () => {
				let t = this.inputEl?.value || "";
				this.render(), this.inputEl && t && (this.inputEl.value = t, this.updateState(t));
			}, this);
		}
		update() {
			this.render();
		}
		focus() {
			this.inputEl && this.inputEl.focus();
		}
	};
	customElements.get("pagefind-input") || customElements.define("pagefind-input", Ne);
	var Me = class extends f {
		constructor() {
			super();
			this.containerEl = null;
			this.term = "";
			this.defaultMessage = "";
		}
		static get observedAttributes() {
			return ["default-message"];
		}
		init() {
			this.hasAttribute("default-message") && (this.defaultMessage = this.getAttribute("default-message") || ""), this.render();
		}
		render() {
			this.innerHTML = "", this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("div"), this.containerEl.className = "pf-summary", this.containerEl.textContent = this.defaultMessage, this.appendChild(this.containerEl);
		}
		reconcileAria() {}
		register(e) {
			e.registerSummary(this), e.on("search", (t) => {
				this.term = t;
			}, this), e.on("results", (t) => {
				if (!this.containerEl || !t) return;
				let i = t?.results?.length ?? 0;
				if (!this.term) {
					if (e.faceted) {
						let o = i === 0 ? "total_zero_results" : i === 1 ? "total_one_result" : "total_many_results", c = e.translate(o, { COUNT: i });
						this.containerEl.textContent = c || `${i} result${i === 1 ? "" : "s"}`;
					} else this.containerEl.textContent = this.defaultMessage;
					return;
				}
				let n = i === 0 ? "zero_results" : i === 1 ? "one_result" : "many_results", l = e.translate(n, {
					SEARCH_TERM: this.term,
					COUNT: i
				});
				this.containerEl.textContent = l || `${i} result${i === 1 ? "" : "s"} for ${this.term}`;
			}, this), e.on("loading", () => {
				if (!this.containerEl) return;
				let t = e.translate("searching", { SEARCH_TERM: this.term });
				this.containerEl.textContent = t || `Searching for ${this.term}...`;
			}, this), e.on("error", (t) => {
				if (!this.containerEl) return;
				let r = t, i = e.translate("error_search") || "Search failed";
				this.containerEl.textContent = `Error: ${r.message || i}`;
			}, this), e.on("translations", () => {
				this.render();
			}, this);
		}
		update() {
			this.hasAttribute("default-message") && (this.defaultMessage = this.getAttribute("default-message") || "", !this.term && this.containerEl && (this.containerEl.textContent = this.defaultMessage));
		}
	};
	customElements.get("pagefind-summary") || customElements.define("pagefind-summary", Me);
	var ls = (a) => {
		if (a instanceof Element) return [a];
		if (Array.isArray(a) && a.every((s) => s instanceof Element)) return a;
		if (typeof a == "string" || a instanceof String) {
			let s = document.createElement("div");
			return s.innerHTML = a, [...s.childNodes];
		}
		return console.error(`[Pagefind Results]: Expected template to return HTML element or string, got ${typeof a}`), [];
	}, Ia = `<li class="pf-result">
  <div class="pf-result-card">
    {{#if and(options.show_images, meta.image)}}
    <img class="pf-result-image" src="{{ meta.image | resolveUrl(meta.url | default(url)) }}" alt="{{ meta.image_alt | default(meta.title) }}">
    {{/if}}
    <div class="pf-result-content">
      <p class="pf-result-title">
        <a class="pf-result-link" href="{{ meta.url | default(url) | safeUrl }}"{{#if options.link_target}} target="{{ options.link_target }}"{{/if}}{{#if eq(options.link_target, "_blank")}} rel="noopener"{{/if}}>{{ meta.title }}</a>
      </p>
      {{#if excerpt}}
      <p class="pf-result-excerpt">{{+ excerpt +}}</p>
      {{/if}}
    </div>
  </div>
  {{#if sub_results}}
  <ul class="pf-heading-chips">
    {{#each sub_results as sub}}
    <li class="pf-heading-chip">
      <a class="pf-heading-link" href="{{ sub.url | safeUrl }}"{{#if options.link_target}} target="{{ options.link_target }}"{{/if}}{{#if eq(options.link_target, "_blank")}} rel="noopener"{{/if}}>{{ sub.title }}</a>
      <p class="pf-heading-excerpt">{{+ sub.excerpt +}}</p>
    </li>
    {{/each}}
  </ul>
  {{/if}}
</li>`, Ua = `<li class="pf-result" aria-hidden="true">
  <div class="pf-result-card">
    <div class="pf-skeleton pf-skeleton-image"></div>
    <div class="pf-result-content">
      <p class="pf-result-title pf-skeleton pf-skeleton-title"></p>
      <p class="pf-result-excerpt pf-skeleton pf-skeleton-excerpt"></p>
    </div>
  </div>
</li>`, La = k(Ia), Fa = k(Ua), os = (a, s) => {
		for (let e of a) if (e instanceof Element) {
			e.setAttribute("data-pf-result-index", String(s));
			break;
		}
	}, $t = (a) => {
		if (!(a instanceof HTMLElement)) return null;
		let s = window.getComputedStyle(a).overflowY;
		return s !== "visible" && s !== "hidden" ? a : $t(a.parentNode);
	}, Vt = class {
		constructor(s) {
			this.result = null;
			this.loading = !1;
			this.observer = null;
			this.rawResult = s.result, this.index = s.index, this.placeholderNodes = s.placeholderNodes, this.resultFn = s.resultFn, this.intersectionEl = s.intersectionEl, this.showImages = s.showImages, this.showSubResults = s.showSubResults, this.maxSubResults = s.maxSubResults, this.linkTarget = s.linkTarget, this.onLoad = s.onLoad, this.setupObserver();
		}
		setupObserver() {
			if (this.result !== null || this.observer !== null || !this.placeholderNodes?.length) return;
			let s = {
				root: this.intersectionEl,
				rootMargin: "50px",
				threshold: .01
			};
			this.observer = new IntersectionObserver((e, t) => {
				this.result === null && e?.[0]?.isIntersecting && (this.load(), t.disconnect(), this.observer = null);
			}, s), this.observer.observe(this.placeholderNodes[0]);
		}
		async load() {
			if (this.placeholderNodes?.length && !(this.result !== null || this.loading)) {
				this.loading = !0;
				try {
					this.result = await this.rawResult.data();
					let s = this.resultFn(this.result, {
						showImages: this.showImages,
						showSubResults: this.showSubResults,
						maxSubResults: this.maxSubResults,
						linkTarget: this.linkTarget
					}), e = ls(s);
					for (os(e, this.index); this.placeholderNodes.length > 1;) {
						let r = this.placeholderNodes.pop();
						r instanceof Element && r.remove();
					}
					let t = this.placeholderNodes[0];
					t instanceof Element && t.replaceWith(...e);
				} catch {
					this.loading = !1;
				}
				this.onLoad?.();
			}
		}
		cleanup() {
			this.observer && (this.observer.disconnect(), this.observer = null);
		}
	}, Oe = class extends f {
		constructor() {
			super();
			this.containerEl = null;
			this.intersectionEl = document.body;
			this.results = [];
			this.showImages = !1;
			this.hideSubResults = !1;
			this.maxSubResults = 3;
			this.maxResults = 0;
			this.linkTarget = null;
			this.resultTemplate = null;
			this.compiledResultTemplate = null;
			this.compiledPlaceholderTemplate = null;
			this.selectedIndex = -1;
			this.selectedAnchor = null;
			this.loadingAnnouncementTimeout = null;
		}
		static get observedAttributes() {
			return [
				"show-images",
				"hide-sub-results",
				"max-sub-results",
				"max-results",
				"link-target"
			];
		}
		init() {
			this.hasAttribute("show-images") && (this.showImages = this.getAttribute("show-images") !== "false"), this.hasAttribute("hide-sub-results") && (this.hideSubResults = this.getAttribute("hide-sub-results") !== "false"), this.hasAttribute("max-sub-results") && (this.maxSubResults = parseInt(this.getAttribute("max-sub-results") || "3", 10) || 3), this.hasAttribute("max-results") && (this.maxResults = parseInt(this.getAttribute("max-results") || "0", 10)), this.hasAttribute("link-target") && (this.linkTarget = this.getAttribute("link-target")), this.checkForTemplates(), this.render();
		}
		checkForTemplates() {
			let e = this.querySelector("script[type=\"text/pagefind-template\"]:not([data-template]), script[type=\"text/pagefind-template\"][data-template=\"result\"]");
			e && (this.compiledResultTemplate = k((e.textContent || "").trim()));
			let t = this.querySelector("script[type=\"text/pagefind-template\"][data-template=\"placeholder\"]");
			t && (this.compiledPlaceholderTemplate = k((t.textContent || "").trim()));
		}
		buildTemplateData(e, t) {
			let r = t.showSubResults ? this.instance.getDisplaySubResults(e, t.maxSubResults) : [];
			return {
				meta: e.meta || {},
				excerpt: e.excerpt || "",
				url: e.url || "",
				sub_results: r.map((i) => ({
					title: i.title,
					url: i.url,
					excerpt: i.excerpt
				})),
				options: {
					link_target: t.linkTarget,
					show_images: t.showImages
				}
			};
		}
		getResultRenderer() {
			if (this.resultTemplate) {
				let e = this.resultTemplate;
				return (t, r) => e(t);
			}
			if (this.compiledResultTemplate) {
				let e = this.compiledResultTemplate;
				return (t, r) => {
					let i = this.buildTemplateData(t, r);
					return e(i);
				};
			}
			return (e, t) => {
				let r = this.buildTemplateData(e, t);
				return La(r);
			};
		}
		getPlaceholder() {
			return this.compiledPlaceholderTemplate ? this.compiledPlaceholderTemplate({}) : Fa({});
		}
		render() {
			let e = [];
			this.querySelectorAll("script[type=\"text/pagefind-template\"]").forEach((r) => {
				e.push(r);
			}), this.innerHTML = "", e.forEach((r) => this.appendChild(r));
			let t = this.instance?.translate("results_label") || "Search results";
			this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("ul"), this.containerEl.className = "pf-results", this.containerEl.setAttribute("aria-label", t), this.containerEl.setAttribute("aria-busy", "false"), this.appendChild(this.containerEl), this.setupKeyboardHandlers();
		}
		appendResults(e) {
			if (this.containerEl) for (let t of e) this.containerEl.appendChild(t);
		}
		register(e) {
			e.registerResults(this, {
				keyboardNavigation: !0,
				announcements: !0
			}), e.on("results", (t) => {
				if (!this.containerEl) return;
				let r = t;
				for (let c of this.results) c.cleanup();
				this.containerEl.innerHTML = "", this.containerEl.setAttribute("aria-busy", "false"), this.intersectionEl = $t(this.containerEl), this.selectedIndex = -1, this.selectedAnchor = null;
				let i = this.maxResults > 0 ? r.results.slice(0, this.maxResults) : r.results, n = i.length, l = e.searchTerm;
				if (l) {
					let c = n === 0 ? "zero_results" : n === 1 ? "one_result" : "many_results", u = n === 0 ? "assertive" : "polite";
					e.announce(c, {
						SEARCH_TERM: l,
						COUNT: n
					}, u);
				} else if (e.faceted) {
					let c = n === 0 ? "total_zero_results" : n === 1 ? "total_one_result" : "total_many_results", u = n === 0 ? "assertive" : "polite";
					e.announce(c, { COUNT: n }, u);
				}
				let o = this.getResultRenderer();
				this.results = i.map((c, u) => {
					let d = ls(this.getPlaceholder());
					os(d, u), this.appendResults(d);
					let _ = new Vt({
						result: c,
						index: u,
						placeholderNodes: d,
						resultFn: o,
						intersectionEl: this.intersectionEl,
						showImages: this.showImages,
						showSubResults: !this.hideSubResults,
						maxSubResults: this.maxSubResults,
						linkTarget: this.linkTarget,
						onLoad: () => {
							_.result && this.clearLoadingAnnouncement();
						}
					});
					return _;
				});
			}, this), e.on("loading", () => {
				this.containerEl && (this.containerEl.innerHTML = "", this.containerEl.setAttribute("aria-busy", "true"), this.selectedIndex = -1, this.selectedAnchor = null);
			}, this), e.on("error", (t) => {
				let r = t;
				this.containerEl && this.containerEl.setAttribute("aria-busy", "false"), e.announce("error_search", {}, "assertive"), this.showError({
					message: r.message || e.translate("error_search") || "Failed to load search results",
					details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0
				});
			}, this), e.on("translations", () => {
				this.render();
			}, this);
		}
		findNeighborAnchor(e, t) {
			if (!this.containerEl) return null;
			let r = document.createTreeWalker(this.containerEl, NodeFilter.SHOW_ELEMENT, { acceptNode: (l) => l.tagName === "A" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
			r.currentNode = e;
			let i = t > 0 ? r.nextNode() : r.previousNode();
			if (!i || !(i instanceof HTMLAnchorElement)) return null;
			let n = this.resultIndexForNode(i);
			return {
				anchor: i,
				resultIndex: n
			};
		}
		resultIndexForNode(e) {
			if (!this.containerEl) return -1;
			let t = e;
			for (; t && t.parentNode !== this.containerEl;) t = t.parentNode;
			if (!t || !(t instanceof Element)) return -1;
			let r = t.getAttribute("data-pf-result-index");
			if (r === null) return -1;
			let i = parseInt(r, 10);
			return Number.isNaN(i) ? -1 : i;
		}
		setupKeyboardHandlers() {
			this.containerEl && (this.containerEl.addEventListener("keydown", (e) => {
				let t = e.target.closest("a");
				if (t) if (e.key === "ArrowDown") {
					e.preventDefault();
					let r = this.findNeighborAnchor(t, 1);
					if (r) r.anchor.focus(), this.scrollToCenter(r.anchor, e.repeat), r.resultIndex !== -1 && this.preloadAhead(r.resultIndex, 1);
					else {
						let n = this.resultIndexForNode(t) + 1;
						if (n > 0 && n < this.results.length) {
							let l = this.results[n];
							l && !l.result && (l.load(), this.scheduleLoadingAnnouncement()), this.preloadAhead(n, 1);
						}
					}
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					let r = this.findNeighborAnchor(t, -1);
					r ? (r.anchor.focus(), this.scrollToCenter(r.anchor, e.repeat), r.resultIndex !== -1 && this.preloadAhead(r.resultIndex, -1)) : this.instance?.focusPreviousInput(document.activeElement);
				} else e.key === "Backspace" ? (e.preventDefault(), this.instance?.focusInputAndDelete(document.activeElement)) : e.key === "/" ? (e.preventDefault(), this.instance?.focusPreviousInput(document.activeElement)) : e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && (e.preventDefault(), this.instance?.focusInputAndType(document.activeElement, e.key));
			}), this.containerEl.addEventListener("focusin", (e) => {
				let t = e.target.closest("a");
				if (!t) return;
				this.clearSelection(), t.setAttribute("data-pf-selected", ""), this.selectedAnchor = t;
				let r = this.instance?.translate("keyboard_navigate") || "navigate", i = this.instance?.translate("keyboard_select") || "select", n = this.instance?.translate("keyboard_search") || "search";
				this.instance?.registerShortcut({
					label: "↑↓",
					description: r
				}, this), this.instance?.registerShortcut({
					label: "↵",
					description: i
				}, this), this.instance?.registerShortcut({
					label: "/",
					description: n
				}, this);
			}), this.containerEl.addEventListener("focusout", (e) => {
				let t = e;
				this.containerEl?.contains(t.relatedTarget) || (this.clearSelection(), this.instance?.deregisterAllShortcuts(this));
			}));
		}
		scrollToCenter(e, t = !1) {
			let r = this.intersectionEl || $t(e);
			if (!r || !(r instanceof HTMLElement) || r === document.body || r === document.documentElement) return;
			let i = e.getBoundingClientRect(), n = r.getBoundingClientRect(), o = i.top - n.top + r.scrollTop - r.clientHeight / 2 + e.offsetHeight / 2;
			r.scrollTo({
				top: o,
				behavior: t ? "instant" : "smooth"
			});
		}
		preloadAhead(e, t) {
			let r = t > 0 ? 1 : -1;
			for (let i = 1; i <= 3; i++) {
				let n = e + r * i;
				if (n >= 0 && n < this.results.length) {
					let l = this.results[n];
					l && !l.result && l.load();
				}
			}
		}
		scheduleLoadingAnnouncement() {
			this.loadingAnnouncementTimeout || (this.loadingAnnouncementTimeout = window.setTimeout(() => {
				this.loadingAnnouncementTimeout = null, this.instance?.announce("loading", {}, "polite");
			}, 800));
		}
		clearLoadingAnnouncement() {
			this.loadingAnnouncementTimeout && (clearTimeout(this.loadingAnnouncementTimeout), this.loadingAnnouncementTimeout = null);
		}
		clearSelection() {
			this.selectedAnchor && (this.selectedAnchor.removeAttribute("data-pf-selected"), this.selectedAnchor = null);
		}
		cleanup() {
			this.clearLoadingAnnouncement();
			for (let e of this.results) e.cleanup();
			this.results = [], this.selectedAnchor = null;
		}
		update() {
			this.render();
		}
	};
	customElements.get("pagefind-results") || customElements.define("pagefind-results", Oe);
	var xe = class extends f {
		constructor() {
			super();
			this.containerEl = null;
			this.showEmpty = !1;
			this.expanded = !1;
			this.openFilters = [];
			this.sortOption = "default";
			this.autoOpenThreshold = 6;
			this.selectedFilters = {};
			this.availableFilters = null;
			this.totalFilters = null;
			this.filterElements = new Map();
			this.groupElements = new Map();
			this.groupVisibleCounts = new Map();
			this.isRendered = !1;
		}
		static get observedAttributes() {
			return [
				"show-empty",
				"expanded",
				"open",
				"sort",
				"auto-open-threshold"
			];
		}
		init() {
			if (this.hasAttribute("show-empty") && (this.showEmpty = this.getAttribute("show-empty") !== "false"), this.hasAttribute("expanded") && (this.expanded = this.getAttribute("expanded") !== "false"), this.hasAttribute("open") && (this.openFilters = (this.getAttribute("open") || "").split(",").map((e) => e.trim().toLowerCase()).filter((e) => e.length > 0)), this.hasAttribute("sort")) {
				let e = this.getAttribute("sort");
				[
					"default",
					"alphabetical",
					"count-desc",
					"count-asc"
				].includes(e) && (this.sortOption = e);
			}
			this.hasAttribute("auto-open-threshold") && (this.autoOpenThreshold = parseInt(this.getAttribute("auto-open-threshold") || "6", 10)), this.render();
		}
		sortValues(e, t) {
			if (this.sortOption === "default") return e;
			let r = [...e];
			switch (this.sortOption) {
				case "alphabetical":
					r.sort((i, n) => i[0].localeCompare(n[0]));
					break;
				case "count-desc":
					r.sort((i, n) => {
						let l = t[i[0]] ?? i[1];
						return (t[n[0]] ?? n[1]) - l;
					});
					break;
				case "count-asc":
					r.sort((i, n) => {
						let l = t[i[0]] ?? i[1], o = t[n[0]] ?? n[1];
						return l - o;
					});
					break;
			}
			return r;
		}
		render() {
			this.innerHTML = "", this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("div"), this.containerEl.className = "pf-filter-pane", this.appendChild(this.containerEl);
		}
		getSelectedText(e) {
			return String(e);
		}
		shouldGroupStartOpen(e, t, r) {
			return this.openFilters.length > 0 ? this.openFilters.includes(e.toLowerCase()) : this.autoOpenThreshold > 0 && r === 1 && t <= this.autoOpenThreshold;
		}
		hasStructureChanged() {
			if (!this.totalFilters) return !1;
			let e = new Set(Object.keys(this.totalFilters)), t = new Set(this.groupElements.keys());
			if (e.size !== t.size) return !0;
			for (let r of e) if (!t.has(r)) return !0;
			for (let [r, i] of Object.entries(this.totalFilters)) {
				let n = new Set(Object.keys(i));
				for (let l of n) if (!this.filterElements.has(`${r}:${l}`)) return !0;
			}
			return !1;
		}
		handleFiltersUpdate() {
			if (!this.containerEl || !this.totalFilters) return;
			if (Object.keys(this.totalFilters).length === 0) {
				this.containerEl.setAttribute("data-pf-hidden", "true");
				return;
			}
			this.containerEl.removeAttribute("data-pf-hidden"), !this.isRendered || this.hasStructureChanged() ? this.renderFilters() : this.updateFilters();
		}
		renderFilters() {
			if (!this.containerEl || !this.totalFilters) return;
			this.containerEl.innerHTML = "", this.filterElements.clear(), this.groupElements.clear(), this.groupVisibleCounts.clear();
			let e = Object.keys(this.totalFilters);
			for (let t of e) {
				let r = this.totalFilters[t], i = this.availableFilters?.[t] || {}, n = this.renderFilterGroup(t, r, i, e.length);
				n && this.containerEl.appendChild(n);
			}
			this.isRendered = !0;
		}
		updateFilters() {
			for (let [e, t] of this.filterElements) {
				let r = e.indexOf(":"), i = e.slice(0, r), n = e.slice(r + 1), l = this.availableFilters?.[i]?.[n] ?? 0, o = this.totalFilters?.[i]?.[n] ?? 0, c = this.selectedFilters[i]?.has(n), u = c ? o : l;
				t.countSpan.textContent = String(u);
				let d = this.showEmpty || l > 0 || c, _ = t.label.hasAttribute("data-pf-hidden");
				t.label.toggleAttribute("data-pf-hidden", !d), d && _ ? this.groupVisibleCounts.set(i, (this.groupVisibleCounts.get(i) ?? 0) + 1) : !d && !_ && this.groupVisibleCounts.set(i, (this.groupVisibleCounts.get(i) ?? 1) - 1), t.checkbox.checked = c || !1;
			}
			for (let [e, t] of this.groupElements) {
				let r = this.selectedFilters[e]?.size || 0;
				t.selectedCountSpan && (r > 0 ? (t.selectedCountSpan.textContent = this.getSelectedText(r), t.selectedCountSpan.removeAttribute("data-pf-hidden")) : t.selectedCountSpan.setAttribute("data-pf-hidden", "true"));
				let i = this.groupVisibleCounts.get(e) ?? 0;
				t.group.toggleAttribute("data-pf-hidden", i === 0);
			}
		}
		renderFilterGroup(e, t, r, i) {
			let n = Object.entries(t);
			if (n.length === 0) return null;
			let l = this.sortValues(n, r), o = e.charAt(0).toUpperCase() + e.slice(1), c = this.selectedFilters[e]?.size || 0, u = this.expanded || this.shouldGroupStartOpen(e, l.length, i), d, _, p = null;
			if (this.expanded) {
				d = document.createElement("fieldset"), d.className = "pf-filter-group";
				let E = document.createElement("legend");
				E.className = "pf-filter-group-title";
				let T = document.createElement("span");
				T.className = "pf-filter-group-name", T.textContent = o, E.appendChild(T), d.appendChild(E), _ = document.createElement("div"), _.className = "pf-filter-options", d.appendChild(_);
			} else {
				d = document.createElement("details"), d.className = "pf-filter-group", d.dataset.filterName = e, u && (d.open = !0);
				let E = document.createElement("summary");
				E.className = "pf-filter-group-title";
				let T = document.createElement("span");
				T.className = "pf-filter-group-name", T.textContent = o, E.appendChild(T), p = document.createElement("span"), p.className = "pf-filter-group-count", p.setAttribute("aria-hidden", "true"), c > 0 ? p.textContent = this.getSelectedText(c) : p.setAttribute("data-pf-hidden", "true"), E.appendChild(p), d.appendChild(E);
				let R = document.createElement("fieldset");
				R.className = "pf-filter-fieldset";
				let v = document.createElement("legend");
				v.setAttribute("data-pf-sr-hidden", ""), v.textContent = o, R.appendChild(v), _ = document.createElement("div"), _.className = "pf-filter-options", R.appendChild(_), d.appendChild(R);
			}
			this.groupElements.set(e, {
				group: d,
				optionsContainer: _,
				selectedCountSpan: p
			});
			let g = 0;
			for (let [E, T] of l) {
				let R = r[E] ?? 0, v = this.selectedFilters[e]?.has(E) || !1, Ge = v ? T : R, M = this.showEmpty || R > 0 || v;
				M && g++, this.renderCheckbox(_, e, E, Ge, v, M);
			}
			return this.groupVisibleCounts.set(e, g), d;
		}
		renderCheckbox(e, t, r, i, n, l) {
			let o = this.instance.generateId(`pf-filter-${t}-${r}`), c = document.createElement("label");
			c.className = "pf-filter-checkbox", c.setAttribute("for", o), l || c.setAttribute("data-pf-hidden", "true");
			let u = document.createElement("input");
			u.type = "checkbox", u.className = "pf-checkbox-input", u.id = o, u.name = t, u.value = r, u.checked = n, u.addEventListener("change", (p) => {
				this.handleCheckboxChange(t, r, p.target.checked);
			}), c.appendChild(u);
			let d = document.createTextNode(r);
			c.appendChild(d);
			let _ = document.createElement("span");
			_.className = "pf-filter-checkbox-count", _.textContent = String(i), c.appendChild(_), e.appendChild(c), this.filterElements.set(`${t}:${r}`, {
				label: c,
				countSpan: _,
				checkbox: u
			});
		}
		handleCheckboxChange(e, t, r) {
			this.selectedFilters[e] || (this.selectedFilters[e] = new Set()), r ? this.selectedFilters[e].add(t) : this.selectedFilters[e].delete(t);
			let i = this.groupElements.get(e);
			if (i?.selectedCountSpan) {
				let l = this.selectedFilters[e].size;
				l > 0 ? (i.selectedCountSpan.textContent = this.getSelectedText(l), i.selectedCountSpan.removeAttribute("data-pf-hidden")) : i.selectedCountSpan.setAttribute("data-pf-hidden", "true");
			}
			let n = Array.from(this.selectedFilters[e]);
			if (n.length === 0) {
				delete this.selectedFilters[e];
				let l = {};
				for (let [o, c] of Object.entries(this.selectedFilters)) l[o] = Array.from(c);
				this.instance?.triggerFilters(l);
			} else this.instance?.triggerFilter(e, n);
		}
		register(e) {
			e.registerFilter(this), e.on("filters", (t) => {
				let r = t;
				this.availableFilters = r.available, this.totalFilters = r.total, this.handleFiltersUpdate();
			}, this), e.on("search", (t, r) => {
				this.selectedFilters = {};
				let i = r;
				if (i) for (let [n, l] of Object.entries(i)) Array.isArray(l) && l.length > 0 && (this.selectedFilters[n] = new Set(l));
				this.isRendered && this.updateFilters();
			}, this), e.on("error", (t) => {
				let r = t;
				this.showError({
					message: r.message || "Failed to load filters",
					details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0
				});
			}, this), e.on("translations", () => {
				this.render(), this.isRendered = !1, this.handleFiltersUpdate();
			}, this);
		}
		update() {
			this.hasAttribute("show-empty") && (this.showEmpty = this.getAttribute("show-empty") !== "false"), this.hasAttribute("expanded") && (this.expanded = this.getAttribute("expanded") !== "false"), this.hasAttribute("open") && (this.openFilters = (this.getAttribute("open") || "").split(",").map((e) => e.trim().toLowerCase()).filter((e) => e.length > 0)), this.isRendered && (this.isRendered = !1, this.handleFiltersUpdate());
		}
	};
	customElements.get("pagefind-filter-pane") || customElements.define("pagefind-filter-pane", xe);
	var He = class extends f {
		constructor() {
			super();
			this.isOpen = !1;
			this.activeIndex = -1;
			this.selectedValues = new Set();
			this.isRendered = !1;
			this.filtersLoaded = !1;
			this.filterName = null;
			this.availableFilters = {};
			this.totalFilters = {};
			this.singleSelect = !1;
			this.showEmpty = !1;
			this.wrapLabels = !1;
			this.hideClear = !1;
			this.sortOption = "default";
			this.wrapperEl = null;
			this.triggerEl = null;
			this.menuEl = null;
			this.optionsEl = null;
			this.clearEl = null;
			this.badgeEl = null;
			this.optionElements = [];
			this.focusedOptionEl = null;
			this.typeAheadBuffer = "";
			this.typeAheadTimeout = null;
			this._handleClickOutside = this._handleClickOutside.bind(this);
		}
		static get observedAttributes() {
			return [
				"filter",
				"label",
				"single-select",
				"show-empty",
				"wrap",
				"sort",
				"hide-clear"
			];
		}
		init() {
			if (this.filterName = this.getAttribute("filter"), !this.filterName) {
				this.showError({ message: "filter attribute is required on <pagefind-filter-dropdown>" });
				return;
			}
			if (this.singleSelect = this.hasAttribute("single-select"), this.showEmpty = this.hasAttribute("show-empty"), this.wrapLabels = this.hasAttribute("wrap"), this.hideClear = this.hasAttribute("hide-clear"), this.hasAttribute("sort")) {
				let e = this.getAttribute("sort");
				[
					"default",
					"alphabetical",
					"count-desc",
					"count-asc"
				].includes(e) && (this.sortOption = e);
			}
			this.render();
		}
		sortValues(e) {
			if (this.sortOption === "default") return e;
			let t = [...e];
			switch (this.sortOption) {
				case "alphabetical":
					t.sort((r, i) => r.localeCompare(i));
					break;
				case "count-desc":
					t.sort((r, i) => {
						let n = this.availableFilters[r] ?? this.totalFilters[r] ?? 0;
						return (this.availableFilters[i] ?? this.totalFilters[i] ?? 0) - n;
					});
					break;
				case "count-asc":
					t.sort((r, i) => {
						let n = this.availableFilters[r] ?? this.totalFilters[r] ?? 0, l = this.availableFilters[i] ?? this.totalFilters[i] ?? 0;
						return n - l;
					});
					break;
			}
			return t;
		}
		render() {
			this.innerHTML = "";
			let e = this.ensureId("pf-dropdown"), t = `${e}-trigger`, r = `${e}-menu`;
			this.wrapperEl = document.createElement("div"), this.wrapperEl.className = "pf-dropdown-wrapper", this.triggerEl = document.createElement("button"), this.triggerEl.type = "button", this.triggerEl.id = t, this.triggerEl.className = "pf-dropdown-trigger", this.wrapLabels && this.triggerEl.classList.add("wrap"), this.triggerEl.setAttribute("role", "combobox"), this.triggerEl.setAttribute("aria-haspopup", "listbox"), this.triggerEl.setAttribute("aria-expanded", "false"), this.triggerEl.setAttribute("aria-controls", r);
			let i = document.createElement("span");
			i.className = "pf-dropdown-trigger-label", this.wrapLabels && i.classList.add("wrap"), i.textContent = this.getAttribute("label") || this.filterName || "", this.triggerEl.appendChild(i), this.badgeEl = document.createElement("span"), this.badgeEl.className = "pf-dropdown-selected-badge", this.badgeEl.setAttribute("data-pf-hidden", "true"), this.badgeEl.setAttribute("aria-hidden", "true"), this.badgeEl.textContent = "0", this.triggerEl.appendChild(this.badgeEl);
			let n = document.createElement("span");
			n.className = "pf-dropdown-arrow", n.setAttribute("aria-hidden", "true"), this.triggerEl.appendChild(n), this.wrapperEl.appendChild(this.triggerEl), this.menuEl = document.createElement("div"), this.menuEl.id = r, this.menuEl.className = "pf-dropdown-menu", this.menuEl.hidden = !0, this.optionsEl = document.createElement("div"), this.optionsEl.className = "pf-dropdown-options", this.optionsEl.setAttribute("role", "listbox"), this.optionsEl.setAttribute("aria-multiselectable", this.singleSelect ? "false" : "true"), this.optionsEl.setAttribute("aria-labelledby", t), this.menuEl.appendChild(this.optionsEl), this.wrapperEl.appendChild(this.menuEl), this.hideClear || (this.clearEl = document.createElement("button"), this.clearEl.type = "button", this.clearEl.className = "pf-dropdown-clear", this.clearEl.setAttribute("aria-disabled", "true"), this.clearEl.setAttribute("aria-label", (this.instance?.translate("clear_search") || "Clear") + " " + (this.getAttribute("label") || this.filterName || "")), this.clearEl.textContent = this.instance?.translate("clear_search") || "Clear", this.wrapperEl.appendChild(this.clearEl), this.clearEl.addEventListener("click", () => this.clearAll())), this.appendChild(this.wrapperEl), this.triggerEl.addEventListener("click", () => this.toggle()), this.triggerEl.addEventListener("focus", () => this.instance?.triggerLoad()), this.triggerEl.addEventListener("keydown", (l) => {
				this.isOpen ? this.handleMenuKeydown(l) : this.handleTriggerKeydown(l);
			}), this.isRendered = !0;
		}
		toggle() {
			this.isOpen ? this.close() : this.open();
		}
		open() {
			if (this.instance?.triggerLoad(), this.isOpen || !this.menuEl || !this.triggerEl || !this.optionsEl) return;
			if (this.isOpen = !0, this.filtersLoaded || this.showLoadingState(), this.menuEl.hidden = !1, this.triggerEl.setAttribute("aria-expanded", "true"), this.triggerEl.classList.add("open"), this.optionElements.length > 0) {
				let i = this.activeIndex >= 0 ? this.activeIndex : 0;
				this.setActiveIndex(i);
			}
			let e = this.instance?.translate("keyboard_navigate") || "navigate", t = this.instance?.translate("keyboard_select") || "select", r = this.instance?.translate("keyboard_close") || "close";
			this.instance?.registerShortcut({
				label: "↑↓",
				description: e
			}, this), this.instance?.registerShortcut({
				label: "↵",
				description: t
			}, this), this.instance?.registerShortcut({
				label: "esc",
				description: r
			}, this), setTimeout(() => {
				document.addEventListener("click", this._handleClickOutside);
			}, 0);
		}
		close(e = !0) {
			!this.isOpen || !this.menuEl || !this.triggerEl || !this.optionsEl || (this.isOpen = !1, this.menuEl.hidden = !0, this.triggerEl.setAttribute("aria-expanded", "false"), this.triggerEl.classList.remove("open"), this.triggerEl?.removeAttribute("aria-activedescendant"), this.focusedOptionEl && (this.focusedOptionEl.classList.remove("pf-dropdown-option-focused"), this.focusedOptionEl = null), this.instance?.deregisterAllShortcuts(this), document.removeEventListener("click", this._handleClickOutside), e && this.triggerEl.focus());
		}
		_handleClickOutside(e) {
			this.wrapperEl && !this.wrapperEl.contains(e.target) && this.close(!1);
		}
		handleTriggerKeydown(e) {
			switch (e.key) {
				case "Enter":
				case " ":
					e.preventDefault(), this.open();
					break;
				case "ArrowDown":
					e.preventDefault(), this.open(), this.setActiveIndex(0);
					break;
				case "ArrowUp":
					e.preventDefault(), this.open(), this.setActiveIndex(this.optionElements.length - 1);
					break;
			}
		}
		handleMenuKeydown(e) {
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), this.moveActiveIndex(1);
					break;
				case "ArrowUp":
					e.preventDefault(), this.moveActiveIndex(-1);
					break;
				case "Home":
					e.preventDefault(), this.setActiveIndex(0);
					break;
				case "End":
					e.preventDefault(), this.setActiveIndex(this.optionElements.length - 1);
					break;
				case "Enter":
				case " ":
					if (e.preventDefault(), this.activeIndex >= 0 && this.activeIndex < this.optionElements.length) {
						let t = this.optionElements[this.activeIndex];
						t && this.toggleOption(t.value);
					}
					break;
				case "Escape":
					e.preventDefault(), this.close();
					break;
				case "Tab":
					this.close(!1);
					break;
				default: e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && this.handleTypeAhead(e.key);
			}
		}
		setActiveIndex(e) {
			if (e < 0 || e >= this.optionElements.length || !this.optionsEl) return;
			this.focusedOptionEl && this.focusedOptionEl.classList.remove("pf-dropdown-option-focused"), this.activeIndex = e;
			let t = this.optionElements[e];
			t.el.classList.add("pf-dropdown-option-focused"), this.focusedOptionEl = t.el, this.triggerEl?.setAttribute("aria-activedescendant", t.el.id), this.scrollToCenter(t.el);
		}
		scrollToCenter(e) {
			if (!this.optionsEl) return;
			let t = this.optionsEl, r = e.offsetTop, i = e.offsetHeight, n = t.clientHeight, l = r - n / 2 + i / 2;
			t.scrollTo({
				top: l,
				behavior: "smooth"
			});
		}
		moveActiveIndex(e) {
			let t = this.activeIndex + e;
			t < 0 ? t = this.optionElements.length - 1 : t >= this.optionElements.length && (t = 0), this.setActiveIndex(t);
		}
		handleTypeAhead(e) {
			this.typeAheadBuffer += e.toLowerCase(), this.typeAheadTimeout && clearTimeout(this.typeAheadTimeout);
			let t = this.optionElements.findIndex(({ value: r }) => r.toLowerCase().startsWith(this.typeAheadBuffer));
			t >= 0 && this.setActiveIndex(t), this.typeAheadTimeout = setTimeout(() => {
				this.typeAheadBuffer = "";
			}, 500);
		}
		showLoadingState() {
			if (!this.optionsEl) return;
			this.optionsEl.innerHTML = "", this.optionsEl.setAttribute("aria-busy", "true");
			let e = document.createElement("div");
			e.setAttribute("data-pf-sr-hidden", "true"), e.textContent = "Loading filter options...", this.optionsEl.appendChild(e);
			for (let t = 0; t < 3; t++) {
				let r = document.createElement("div");
				r.className = "pf-dropdown-option pf-dropdown-option-loading", r.setAttribute("aria-hidden", "true");
				let i = document.createElement("span");
				i.className = "pf-dropdown-checkbox pf-skeleton", r.appendChild(i);
				let n = document.createElement("span");
				n.className = "pf-dropdown-option-label pf-skeleton", n.style.width = `${60 + t * 15}%`, n.innerHTML = "&nbsp;", r.appendChild(n), this.optionsEl.appendChild(r);
			}
		}
		updateOptions() {
			if (!this.optionsEl) return;
			this.filtersLoaded = !0, this.optionsEl.removeAttribute("aria-busy");
			let e = Object.keys(this.totalFilters || {}), t = this.sortValues(e);
			if (e.length === 0) {
				this.optionsEl.innerHTML = "";
				let i = document.createElement("div");
				i.className = "pf-dropdown-error", i.setAttribute("role", "alert"), i.textContent = `No filter "${this.filterName}" found`, this.optionsEl.appendChild(i), this.optionElements = [], this.focusedOptionEl = null;
				return;
			}
			this.wrapperEl?.removeAttribute("data-pf-hidden"), this.optionsEl.innerHTML = "", this.optionElements = [], this.focusedOptionEl = null;
			let r = this.id || this.ensureId("pf-dropdown");
			t.forEach((i, n) => {
				let l = this.availableFilters?.[i] ?? 0, o = this.totalFilters[i] ?? 0, c = this.selectedValues.has(i);
				if (!(this.showEmpty || l > 0 || c)) return;
				let d = c ? o : l, _ = `${r}-option-${n}`, p = this.createOption(_, i, d, c);
				this.optionsEl.appendChild(p), this.optionElements.push({
					el: p,
					value: i
				});
			}), this.isOpen && this.optionElements.length > 0 && (this.activeIndex >= this.optionElements.length ? this.setActiveIndex(this.optionElements.length - 1) : this.activeIndex < 0 ? this.setActiveIndex(0) : this.setActiveIndex(this.activeIndex)), this.updateBadge();
		}
		createOption(e, t, r, i) {
			let n = document.createElement("div");
			n.id = e, n.className = "pf-dropdown-option", this.wrapLabels && n.classList.add("wrap"), n.setAttribute("role", "option"), n.setAttribute("aria-selected", String(i)), n.dataset.value = t;
			let l = document.createElement("span");
			l.className = "pf-dropdown-checkbox", l.setAttribute("aria-hidden", "true"), n.appendChild(l);
			let o = document.createElement("span");
			o.className = "pf-dropdown-option-label", this.wrapLabels && o.classList.add("wrap"), o.textContent = t, n.appendChild(o);
			let c = document.createElement("span");
			c.className = "pf-dropdown-option-count", c.setAttribute("aria-hidden", "true"), c.textContent = String(r), n.appendChild(c);
			let u = r === 1 ? "result" : "results";
			return n.setAttribute("aria-label", `${t}, ${r} ${u}`), n.addEventListener("click", (d) => {
				d.stopPropagation(), this.toggleOption(t);
			}), n;
		}
		toggleOption(e) {
			let t = this.selectedValues.has(e);
			this.singleSelect ? (this.selectedValues.has(e) ? this.selectedValues.clear() : (this.selectedValues.clear(), this.selectedValues.add(e)), this.close()) : this.selectedValues.has(e) ? this.selectedValues.delete(e) : this.selectedValues.add(e);
			let r = this.selectedValues.has(e);
			if (r !== t) {
				let i = r ? "selected" : "deselected";
				this.instance?.announceRaw(`${e} ${i}`);
			}
			this.updateOptionStates(), this.updateBadge(), this.dispatchFilterChange();
		}
		clearAll() {
			this.selectedValues.size !== 0 && (this.selectedValues.clear(), this.updateOptionStates(), this.updateBadge(), this.dispatchFilterChange());
		}
		dispatchFilterChange() {
			if (!this.filterName) return;
			let e = Array.from(this.selectedValues);
			e.length === 0 ? this.instance?.triggerFilter(this.filterName, []) : this.instance?.triggerFilter(this.filterName, e);
		}
		updateBadge() {
			if (!this.badgeEl || !this.triggerEl) return;
			let e = this.selectedValues.size;
			if (e > 0) {
				this.badgeEl.textContent = String(e), this.badgeEl.removeAttribute("data-pf-hidden");
				let t = this.getAttribute("label") || this.filterName || "", r = e === 1 ? "filter" : "filters";
				this.triggerEl.setAttribute("aria-label", `${t}, ${e} ${r} selected`), this.clearEl && this.clearEl.removeAttribute("aria-disabled");
			} else this.badgeEl.setAttribute("data-pf-hidden", "true"), this.triggerEl.removeAttribute("aria-label"), this.clearEl && this.clearEl.setAttribute("aria-disabled", "true");
		}
		updateOptionStates() {
			for (let { el: e, value: t } of this.optionElements) {
				let r = this.selectedValues.has(t);
				e.setAttribute("aria-selected", String(r));
			}
		}
		register(e) {
			this.filterName && (e.registerFilter(this), e.on("filters", (t) => {
				let r = t;
				this.availableFilters = r.available?.[this.filterName] || {}, this.totalFilters = r.total?.[this.filterName] || {}, this.isRendered && this.updateOptions();
			}, this), e.on("search", (t, r) => {
				let n = r?.[this.filterName] || [];
				this.selectedValues = new Set(n), this.isRendered && (this.updateOptionStates(), this.updateBadge());
			}, this), e.on("error", (t) => {
				let r = t;
				this.showError({
					message: r.message || "Failed to load filters",
					details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0
				});
			}, this));
		}
		update() {
			let e = this.getAttribute("filter");
			if (e !== this.filterName && (this.filterName = e, this.selectedValues.clear(), this.updateOptions()), this.singleSelect = this.hasAttribute("single-select"), this.showEmpty = this.hasAttribute("show-empty"), this.wrapLabels = this.hasAttribute("wrap"), this.hideClear = this.hasAttribute("hide-clear"), this.hasAttribute("sort")) {
				let r = this.getAttribute("sort");
				[
					"default",
					"alphabetical",
					"count-desc",
					"count-asc"
				].includes(r) && (this.sortOption = r);
			} else this.sortOption = "default";
			this.optionsEl && this.optionsEl.setAttribute("aria-multiselectable", this.singleSelect ? "false" : "true");
			let t = this.triggerEl?.querySelector(".pf-dropdown-trigger-label");
			t && (t.textContent = this.getAttribute("label") || this.filterName || ""), this.updateOptions();
		}
		cleanup() {
			document.removeEventListener("click", this._handleClickOutside), this.instance?.deregisterAllShortcuts(this), this.focusedOptionEl = null, this.typeAheadTimeout && clearTimeout(this.typeAheadTimeout);
		}
	};
	customElements.get("pagefind-filter-dropdown") || customElements.define("pagefind-filter-dropdown", He);
	var we = class extends f {
		constructor() {
			super();
			this.dialogEl = null;
			this.resetOnClose = !1;
			this._isOpen = !1;
			this._closeHandler = null;
		}
		static get observedAttributes() {
			return ["reset-on-close"];
		}
		init() {
			this.hasAttribute("reset-on-close") && (this.resetOnClose = this.getAttribute("reset-on-close") !== "false"), this.render();
		}
		render() {
			let e = this.children.length > 0, t = e ? Array.from(this.children) : null;
			this.innerHTML = "";
			let r = this.id || this.instance.generateId("pagefind-modal"), i = this.instance?.translate("keyboard_search") || "search";
			if (this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.dialogEl = document.createElement("dialog"), this.dialogEl.className = "pf-modal", this.dialogEl.id = r, this.dialogEl.setAttribute("aria-label", i), e && t) t.forEach((n) => this.dialogEl.appendChild(n));
			else {
				let n = this.getAttribute("instance"), l = document.createElement("pagefind-modal-header"), o = document.createElement("pagefind-input");
				n && o.setAttribute("instance", n), l.appendChild(o);
				let c = document.createElement("pagefind-modal-body"), u = document.createElement("pagefind-summary"), d = document.createElement("pagefind-results");
				n && (u.setAttribute("instance", n), d.setAttribute("instance", n)), c.append(u, d);
				let _ = document.createElement("pagefind-modal-footer"), p = document.createElement("pagefind-keyboard-hints");
				n && p.setAttribute("instance", n), _.appendChild(p), this.dialogEl.append(l, c, _);
			}
			this.appendChild(this.dialogEl), this.setupEventHandlers();
		}
		setupEventHandlers() {
			if (!this.dialogEl) return;
			this._closeHandler = () => {
				this._isOpen = !1, this.handleClose();
			}, this.dialogEl.addEventListener("close", this._closeHandler);
			let e = S(this.dialogEl);
			this.dialogEl.addEventListener("keydown", (t) => {
				if (t.key === "Escape") {
					if (t.preventDefault(), t.stopPropagation(), e(t)) return;
					this.close();
				}
			}, !0), this.dialogEl.addEventListener("click", (t) => {
				let r = t.target;
				if (r === this.dialogEl) {
					this.close();
					return;
				}
				let i = r.closest("pagefind-results a");
				if (!i) return;
				this.close();
				let n = i.hash && document.getElementById(i.hash.slice(1));
				n && requestAnimationFrame(() => {
					n.tabIndex = -1, n.focus();
				});
			});
		}
		open() {
			if (this._isOpen || !this.dialogEl) return;
			this._isOpen = !0, this.dialogEl.showModal();
			let e = this.instance?.translate("keyboard_close") || "close";
			this.instance?.registerShortcut({
				label: "esc",
				description: e
			}, this), requestAnimationFrame(() => {
				let r = this.querySelector("pagefind-input");
				if (r && typeof r.focus == "function") r.focus();
				else {
					let i = this.querySelector("input");
					i && i.focus();
				}
			}), (this.instance?.getUtilities("modal-trigger") || []).forEach((r) => r.buttonEl?.setAttribute("aria-expanded", "true"));
		}
		close() {
			!this._isOpen || !this.dialogEl || this.dialogEl.close();
		}
		handleClose() {
			this.instance?.deregisterAllShortcuts(this), this.resetOnClose && this.instance && this.instance.triggerSearch("");
			let t = (this.instance?.getUtilities("modal-trigger") || [])[0];
			t && typeof t.handleModalClose == "function" && t.handleModalClose();
		}
		get isOpen() {
			return this._isOpen;
		}
		register(e) {
			e.registerUtility(this, "modal"), e.on("translations", () => {
				let t = this._isOpen;
				this.render(), t && this.open();
			}, this);
		}
		reconcileAria() {
			(this.instance?.getUtilities("modal-trigger") || []).forEach((t) => {
				t.buttonEl && this.dialogEl?.id && t.buttonEl.setAttribute("aria-controls", this.dialogEl.id);
			});
		}
		cleanup() {
			this.dialogEl && this._closeHandler && this.dialogEl.removeEventListener("close", this._closeHandler), this.instance?.deregisterAllShortcuts(this);
		}
		update() {
			this.hasAttribute("reset-on-close") && (this.resetOnClose = this.getAttribute("reset-on-close") !== "false");
		}
	};
	customElements.get("pagefind-modal") || customElements.define("pagefind-modal", we);
	var N = null;
	function cs() {
		if (N !== null) return N;
		try {
			let a = navigator.userAgentData;
			if (a?.platform) return N = a.platform.toLowerCase().includes("mac"), N;
		} catch {}
		return N = /mac/i.test(navigator.userAgent), N;
	}
	function $e(a) {
		let s = a.toLowerCase().split("+"), e = {
			mod: !1,
			ctrl: !1,
			shift: !1,
			alt: !1,
			meta: !1,
			key: ""
		};
		for (let t of s) switch (t) {
			case "mod":
				e.mod = !0;
				break;
			case "ctrl":
				e.ctrl = !0;
				break;
			case "shift":
				e.shift = !0;
				break;
			case "alt":
				e.alt = !0;
				break;
			case "meta":
			case "cmd":
			case "command":
				e.meta = !0;
				break;
			default: e.key = t;
		}
		return e;
	}
	function Ve(a, s) {
		let e = cs(), t = s.key.toLowerCase() === a.key, r = a.mod ? !e : a.ctrl, i = a.mod ? e : a.meta, n = r ? s.ctrlKey : !s.ctrlKey, l = i ? s.metaKey : !s.metaKey, o = a.shift ? s.shiftKey : !s.shiftKey, c = a.alt ? s.altKey : !s.altKey;
		return t && n && l && o && c;
	}
	function Ie(a) {
		let s = cs(), e = [], t = [];
		return a.mod && (e.push(s ? "⌘" : "Ctrl"), t.push(s ? "Meta" : "Control")), a.meta && (e.push(s ? "⌘" : "Win"), t.push("Meta")), a.ctrl && (e.push("Ctrl"), t.push("Control")), a.shift && (e.push("Shift"), t.push("Shift")), a.alt && (e.push("Alt"), t.push("Alt")), e.push(a.key.toUpperCase()), t.push(a.key), {
			keys: e,
			aria: t.join("+")
		};
	}
	var Ue = class extends f {
		constructor() {
			super();
			this.buttonEl = null;
			this._userPlaceholder = null;
			this.shortcut = "mod+k";
			this.hideShortcut = !1;
			this.compact = !1;
			this._keydownHandler = null;
			this._keyBinding = null;
		}
		static get observedAttributes() {
			return [
				"placeholder",
				"shortcut",
				"hide-shortcut",
				"compact"
			];
		}
		get placeholder() {
			return this._userPlaceholder || this.instance?.translate("keyboard_search") || "Search";
		}
		set placeholder(e) {
			this._userPlaceholder = e, this._initialized && this.render();
		}
		init() {
			this.readAttributes(), this.render(), this.setupKeyboardShortcut();
		}
		readAttributes() {
			this.hasAttribute("placeholder") && (this._userPlaceholder = this.getAttribute("placeholder")), this.hasAttribute("shortcut") && (this.shortcut = this.getAttribute("shortcut") || "mod+k"), this.hasAttribute("hide-shortcut") && (this.hideShortcut = this.getAttribute("hide-shortcut") !== "false"), this.hasAttribute("compact") && (this.compact = this.getAttribute("compact") !== "false"), this._keyBinding = $e(this.shortcut);
		}
		render() {
			if (this.innerHTML = "", this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.buttonEl = document.createElement("button"), this.buttonEl.className = "pf-trigger-btn", this.buttonEl.type = "button", this.buttonEl.setAttribute("aria-haspopup", "dialog"), this.buttonEl.setAttribute("aria-expanded", "false"), this.buttonEl.setAttribute("aria-label", this.placeholder || "Search"), this._keyBinding) {
				let t = Ie(this._keyBinding);
				this.buttonEl.setAttribute("aria-keyshortcuts", t.aria);
			}
			let e = document.createElement("span");
			if (e.className = "pf-trigger-icon", e.setAttribute("aria-hidden", "true"), this.buttonEl.appendChild(e), !this.compact) {
				let t = document.createElement("span");
				t.className = "pf-trigger-text", t.textContent = this.placeholder, this.buttonEl.appendChild(t);
			}
			if (!this.hideShortcut && this._keyBinding) {
				let t = document.createElement("span");
				t.className = "pf-trigger-shortcut", t.setAttribute("aria-hidden", "true");
				let r = Ie(this._keyBinding);
				for (let i of r.keys) {
					let n = document.createElement("span");
					n.className = "pf-trigger-key", n.textContent = i, t.appendChild(n);
				}
				this.buttonEl.appendChild(t);
			}
			this.appendChild(this.buttonEl), this.buttonEl.addEventListener("click", () => {
				this.openModal();
			});
		}
		setupKeyboardShortcut() {
			this._keydownHandler = (e) => {
				if (!this._keyBinding || !Ve(this._keyBinding, e)) return;
				let t = document.activeElement;
				t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) || (e.preventDefault(), this.openModal());
			}, document.addEventListener("keydown", this._keydownHandler);
		}
		openModal() {
			let t = (this.instance?.getUtilities("modal") || [])[0];
			t && typeof t.open == "function" && (t.open(), this.buttonEl && this.buttonEl.setAttribute("aria-expanded", "true"));
		}
		handleModalClose() {
			this.buttonEl && (this.buttonEl.setAttribute("aria-expanded", "false"), this.buttonEl.focus());
		}
		register(e) {
			e.registerUtility(this, "modal-trigger"), e.on("translations", () => {
				this.render();
			}, this);
		}
		reconcileAria() {
			let t = (this.instance?.getUtilities("modal") || [])[0];
			t?.dialogEl?.id && this.buttonEl && this.buttonEl.setAttribute("aria-controls", t.dialogEl.id);
		}
		cleanup() {
			this._keydownHandler && (document.removeEventListener("keydown", this._keydownHandler), this._keydownHandler = null);
		}
		update() {
			this.readAttributes(), this.render();
		}
	};
	customElements.get("pagefind-modal-trigger") || customElements.define("pagefind-modal-trigger", Ue);
	var Le = class extends f {
		constructor() {
			super(...arguments);
			this.closeBtn = null;
		}
		init() {
			this.classList.add("pf-modal-header");
			let e = document.createElement("div");
			for (e.className = "pf-modal-header-content"; this.firstChild;) e.appendChild(this.firstChild);
			this.closeBtn = document.createElement("button"), this.closeBtn.type = "button", this.closeBtn.className = "pf-modal-close", this.closeBtn.setAttribute("aria-label", this.instance?.translate("keyboard_close") || "Close"), this.closeBtn.innerHTML = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M15 5L5 15M5 5l10 10\"/></svg>", this.closeBtn.addEventListener("click", () => {
				let t = this.closest("pagefind-modal");
				t && typeof t.close == "function" && t.close();
			}), this.append(e, this.closeBtn);
		}
		register(e) {
			e.registerUtility(this, "modal-header"), e.on("translations", () => {
				this.closeBtn && this.closeBtn.setAttribute("aria-label", e.translate("keyboard_close") || "Close");
			}, this);
		}
	};
	customElements.get("pagefind-modal-header") || customElements.define("pagefind-modal-header", Le);
	var Fe = class extends f {
		init() {
			this.classList.add("pf-modal-body"), this.setAttribute("tabindex", "-1");
		}
		register(s) {}
	};
	customElements.get("pagefind-modal-body") || customElements.define("pagefind-modal-body", Fe);
	var ze = class extends f {
		init() {
			this.classList.add("pf-modal-footer");
		}
		register(s) {}
	};
	customElements.get("pagefind-modal-footer") || customElements.define("pagefind-modal-footer", ze);
	var Pe = class extends f {
		init() {
			this.classList.add("pf-keyboard-hints"), this.setAttribute("aria-hidden", "true");
		}
		render() {
			this.innerHTML = "", this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir");
			let s = this.instance?.getActiveShortcuts() || [];
			if (s.length === 0) return;
			let e = new Set();
			for (let t of s) {
				if (e.has(t.label)) continue;
				e.add(t.label);
				let r = document.createElement("div");
				r.className = "pf-keyboard-hint";
				let i = document.createElement("kbd");
				i.className = "pf-keyboard-key", i.textContent = t.label, r.appendChild(i), r.appendChild(document.createTextNode(` ${t.description}`)), this.appendChild(r);
			}
		}
		register(s) {
			s.registerUtility(this, "keyboard-hints"), this.render(), s.on("translations", () => {
				this.render();
			}, this);
		}
	};
	customElements.get("pagefind-keyboard-hints") || customElements.define("pagefind-keyboard-hints", Pe);
	var za = (a = 100) => new Promise((s) => setTimeout(s, a)), ds = (a, s) => {
		let e = a.getAttribute("role") === "option" ? [a] : Array.from(a.querySelectorAll("[role=\"option\"]"));
		for (let t = 0; t < e.length; t++) e[t].setAttribute("data-pf-result-index", String(s)), e[t].setAttribute("data-pf-option-offset", String(t));
	}, qe = (a) => {
		if (a instanceof Element) return [a];
		if (Array.isArray(a) && a.every((s) => s instanceof Element)) return a;
		if (typeof a == "string" || a instanceof String) {
			let s = document.createElement("div");
			return s.innerHTML = a, [...s.childNodes];
		}
		return console.error(`[Pagefind Searchbox]: Expected template to return HTML element or string, got ${typeof a}`), [];
	}, Pa = `{{#if and(options.show_sub_results, sub_results)}}<div class="pf-searchbox-group" role="group" aria-label="{{ meta.title | default('Untitled') }}">{{/if}}<a class="pf-searchbox-result" id="{{ aria.result_id }}" href="{{ meta.url | default(url) | safeUrl }}" role="option" aria-selected="false" aria-labelledby="{{ aria.title_id }}"{{#if excerpt}} aria-describedby="{{ aria.excerpt_id }}"{{/if}}>
  <p class="pf-searchbox-result-title" id="{{ aria.title_id }}">{{ meta.title | default("Untitled") }}</p>
  {{#if excerpt}}
  <p class="pf-searchbox-result-excerpt" id="{{ aria.excerpt_id }}">{{+ excerpt +}}</p>
  {{/if}}
</a>{{#if and(options.show_sub_results, sub_results)}}
{{#each sub_results as sub}}
<a class="pf-searchbox-result pf-searchbox-subresult" id="{{ sub.aria.result_id }}" href="{{ sub.url | safeUrl }}" role="option" aria-selected="false" aria-labelledby="{{ sub.aria.title_id }}"{{#if sub.excerpt}} aria-describedby="{{ sub.aria.excerpt_id }}"{{/if}}>
  <p class="pf-searchbox-result-title" id="{{ sub.aria.title_id }}">{{ sub.title | default("Section") }}</p>
  {{#if sub.excerpt}}
  <p class="pf-searchbox-result-excerpt" id="{{ sub.aria.excerpt_id }}">{{+ sub.excerpt +}}</p>
  {{/if}}
</a>
{{/each}}
</div>{{/if}}`, us = k(Pa), Da = `<div class="pf-searchbox-result pf-searchbox-placeholder" aria-hidden="true">
  <p class="pf-searchbox-result-title pf-skeleton pf-skeleton-title"></p>
  <p class="pf-searchbox-result-excerpt pf-skeleton pf-skeleton-excerpt"></p>
</div>`, ja = k(Da), qt = class {
		constructor(s) {
			this.data = null;
			this.cachedOptions = null;
			this.loading = !1;
			this.retryDelay = 0;
			this.observer = null;
			this.rawResult = s.rawResult, this.placeholderEl = s.placeholderEl, this.renderFn = s.renderFn, this.intersectionRoot = s.intersectionRoot, this.index = s.index, this.onLoad = s.onLoad, this.setupObserver();
		}
		setupObserver() {
			if (this.data !== null || this.observer !== null) return;
			let s = {
				root: this.intersectionRoot,
				rootMargin: "50px",
				threshold: .01
			};
			this.observer = new IntersectionObserver((e, t) => {
				this.data === null && e?.[0]?.isIntersecting && (this.load(), t.disconnect(), this.observer = null);
			}, s), this.observer.observe(this.placeholderEl);
		}
		async load() {
			if (!(this.data !== null || this.loading)) {
				this.loading = !0;
				try {
					this.data = await this.rawResult.data();
					let s = this.renderFn(this.data), e = qe(s);
					if (e.length > 0 && this.placeholderEl.parentNode) {
						let t = e.find((r) => r instanceof Element);
						this.placeholderEl.replaceWith(...e), t instanceof Element && (this.placeholderEl = t, ds(t, this.index), this.cacheOptions());
					}
				} catch {
					await new Promise((s) => setTimeout(s, this.retryDelay || 100)), this.retryDelay = Math.min((this.retryDelay || 100) * 2, 1e4), this.loading = !1;
				}
				this.onLoad?.();
			}
		}
		cacheOptions() {
			if (!this.data || !this.placeholderEl) {
				this.cachedOptions = null;
				return;
			}
			this.placeholderEl.getAttribute("role") === "group" ? this.cachedOptions = Array.from(this.placeholderEl.querySelectorAll("[role=\"option\"]")) : this.placeholderEl.getAttribute("role") === "option" ? this.cachedOptions = [this.placeholderEl] : this.cachedOptions = [];
		}
		cleanup() {
			this.observer && (this.observer.disconnect(), this.observer = null), this.cachedOptions = null;
		}
	}, De = class extends f {
		constructor() {
			super();
			this.containerEl = null;
			this.inputEl = null;
			this.dropdownEl = null;
			this.resultsEl = null;
			this.statusEl = null;
			this.footerEl = null;
			this.isOpen = !1;
			this.isLoading = !1;
			this.results = [];
			this.activeIndex = -1;
			this.activeOptionOffset = 0;
			this.searchID = 0;
			this.searchTerm = "";
			this.pendingNavigation = 0;
			this.loadingAnnouncementTimeout = null;
			this.selectedEl = null;
			this._userPlaceholder = null;
			this.debounce = 150;
			this.autofocus = !1;
			this.showSubResults = !1;
			this.maxSubResults = 3;
			this.maxResults = 0;
			this.showKeyboardHints = !0;
			this.shortcut = "mod+k";
			this.hideShortcut = !1;
			this.resultTemplate = null;
			this.compiledResultTemplate = null;
			this.compiledPlaceholderTemplate = null;
			this._documentClickHandler = null;
			this._shortcutKeyHandler = null;
			this._keyBinding = null;
			this._shortcutEl = null;
		}
		static get observedAttributes() {
			return [
				"placeholder",
				"debounce",
				"autofocus",
				"show-sub-results",
				"max-sub-results",
				"max-results",
				"show-keyboard-hints",
				"shortcut",
				"hide-shortcut"
			];
		}
		get placeholder() {
			return this._userPlaceholder || this.instance?.translate("placeholder") || "Search...";
		}
		set placeholder(e) {
			this._userPlaceholder = e, this.inputEl && (this.inputEl.placeholder = this.placeholder);
		}
		readAttributes() {
			this.hasAttribute("placeholder") && (this._userPlaceholder = this.getAttribute("placeholder")), this.hasAttribute("debounce") && (this.debounce = parseInt(this.getAttribute("debounce") || "150", 10) || 150), this.hasAttribute("autofocus") && (this.autofocus = this.hasAttribute("autofocus")), this.hasAttribute("show-sub-results") && (this.showSubResults = this.getAttribute("show-sub-results") !== "false"), this.hasAttribute("max-sub-results") && (this.maxSubResults = parseInt(this.getAttribute("max-sub-results") || "3", 10) || 3), this.hasAttribute("max-results") && (this.maxResults = parseInt(this.getAttribute("max-results") || "0", 10)), this.hasAttribute("show-keyboard-hints") && (this.showKeyboardHints = this.getAttribute("show-keyboard-hints") !== "false"), this.hasAttribute("shortcut") && (this.shortcut = this.getAttribute("shortcut") || "mod+k"), this.hasAttribute("hide-shortcut") && (this.hideShortcut = this.getAttribute("hide-shortcut") !== "false"), this._keyBinding = $e(this.shortcut);
		}
		init() {
			this.readAttributes(), this.checkForTemplates(), this.render(), this.setupOutsideClickHandler(), this.setupShortcutHandler();
		}
		checkForTemplates() {
			let e = this.querySelector("script[type=\"text/pagefind-template\"]:not([data-template]), script[type=\"text/pagefind-template\"][data-template=\"result\"]");
			e && (this.compiledResultTemplate = k((e.textContent || "").trim()));
			let t = this.querySelector("script[type=\"text/pagefind-template\"][data-template=\"placeholder\"]");
			t && (this.compiledPlaceholderTemplate = k((t.textContent || "").trim()));
		}
		getPlaceholder() {
			return this.compiledPlaceholderTemplate ? this.compiledPlaceholderTemplate({}) : ja({});
		}
		render() {
			let e = [];
			this.querySelectorAll("script[type=\"text/pagefind-template\"]").forEach((l) => {
				e.push(l);
			}), this.innerHTML = "", e.forEach((l) => this.appendChild(l));
			let t = this.instance.generateId("pf-sb-input"), r = this.instance.generateId("pf-sb-results");
			this.containerEl = document.createElement("div"), this.containerEl.className = "pf-searchbox", this.appendChild(this.containerEl);
			let i = document.createElement("div");
			if (i.className = "pf-searchbox-input-wrapper", this.containerEl.appendChild(i), this.inputEl = document.createElement("input"), this.inputEl.id = t, this.inputEl.className = "pf-searchbox-input", this.inputEl.type = "text", this.inputEl.setAttribute("role", "combobox"), this.inputEl.setAttribute("aria-autocomplete", "list"), this.inputEl.setAttribute("aria-controls", r), this.inputEl.setAttribute("aria-expanded", "false"), this.inputEl.setAttribute("autocomplete", "off"), this.inputEl.setAttribute("autocapitalize", "none"), this.inputEl.placeholder = this.placeholder, this.autofocus && this.inputEl.setAttribute("autofocus", "autofocus"), i.appendChild(this.inputEl), !this.hideShortcut && this._keyBinding) {
				this._shortcutEl = document.createElement("span"), this._shortcutEl.className = "pf-trigger-shortcut", this._shortcutEl.setAttribute("aria-hidden", "true");
				let l = Ie(this._keyBinding);
				for (let o of l.keys) {
					let c = document.createElement("span");
					c.className = "pf-trigger-key", c.textContent = o, this._shortcutEl.appendChild(c);
				}
				i.appendChild(this._shortcutEl), this.inputEl.setAttribute("aria-keyshortcuts", l.aria);
			}
			this.dropdownEl = document.createElement("div"), this.dropdownEl.className = "pf-searchbox-dropdown", this.containerEl.appendChild(this.dropdownEl);
			let n = this.instance?.translate("results_label") || "Search results";
			this.instance?.direction === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.resultsEl = document.createElement("div"), this.resultsEl.id = r, this.resultsEl.className = "pf-searchbox-results", this.resultsEl.setAttribute("role", "listbox"), this.resultsEl.setAttribute("aria-label", n), this.dropdownEl.appendChild(this.resultsEl), this.statusEl = document.createElement("div"), this.statusEl.className = "pf-searchbox-status", this.statusEl.hidden = !0, this.dropdownEl.appendChild(this.statusEl), this.showKeyboardHints && (this.footerEl = document.createElement("div"), this.footerEl.className = "pf-searchbox-footer", this.footerEl.setAttribute("aria-hidden", "true"), this.dropdownEl.appendChild(this.footerEl), this.renderFooterHints()), this.setupEventHandlers();
		}
		renderFooterHints() {
			if (!this.footerEl) return;
			this.footerEl.innerHTML = "";
			let e = this.instance?.translate("keyboard_navigate") || "navigate", t = this.instance?.translate("keyboard_select") || "select", r = this.instance?.translate("keyboard_close") || "close", i = document.createElement("div");
			i.className = "pf-searchbox-footer-hint";
			let n = document.createElement("span");
			n.className = "pf-searchbox-footer-key", n.textContent = "↑", i.appendChild(n);
			let l = document.createElement("span");
			l.className = "pf-searchbox-footer-key", l.textContent = "↓", i.appendChild(l), i.appendChild(document.createTextNode(` ${e}`)), this.footerEl.appendChild(i);
			let o = document.createElement("div");
			o.className = "pf-searchbox-footer-hint";
			let c = document.createElement("span");
			c.className = "pf-searchbox-footer-key", c.textContent = "↵", o.appendChild(c), o.appendChild(document.createTextNode(` ${t}`)), this.footerEl.appendChild(o);
			let u = document.createElement("div");
			u.className = "pf-searchbox-footer-hint";
			let d = document.createElement("span");
			d.className = "pf-searchbox-footer-key", d.textContent = "esc", u.appendChild(d), u.appendChild(document.createTextNode(` ${r}`)), this.footerEl.appendChild(u);
		}
		setupEventHandlers() {
			if (!this.inputEl || !this.resultsEl) return;
			this.inputEl.addEventListener("input", async (t) => {
				let r = t.target.value;
				if (this.searchTerm = r, !r || !r.trim()) {
					this.closeDropdown(), this.results = [], this.instance?.triggerSearch("");
					return;
				}
				this.openDropdown(), this.showLoadingState();
				let i = ++this.searchID;
				await za(this.debounce), i === this.searchID && this.instance?.triggerSearch(r);
			});
			let e = S(this.inputEl);
			this.inputEl.addEventListener("keydown", (t) => {
				if (!e(t)) switch (t.key) {
					case "ArrowDown":
						t.preventDefault(), !this.isOpen && this.inputEl?.value.trim() && this.openDropdown(), this.isOpen && this.results.length > 0 && this.moveSelection(1);
						break;
					case "ArrowUp":
						t.preventDefault(), this.isOpen && this.results.length > 0 && this.moveSelection(-1);
						break;
					case "Enter":
						this.isOpen && this.activeIndex >= 0 ? (t.preventDefault(), this.activateCurrentSelection(t)) : !this.isOpen && this.inputEl?.value.trim() && (t.preventDefault(), this.openDropdown(), this.results.length > 0 ? (this.rerenderLoadedResults(), this.activeIndex = 0, this.activeOptionOffset = 0, this.updateSelectionUI()) : this.instance?.triggerSearch(this.inputEl.value));
						break;
					case "Escape":
						this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.isOpen && (t.preventDefault(), this.closeDropdown());
						break;
					case "Tab":
						this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.isOpen && this.closeDropdown();
						break;
				}
			}), this.inputEl.addEventListener("focus", () => {
				this.instance?.triggerLoad();
			}), this.resultsEl.addEventListener("click", (t) => {
				t.target.closest("a") && this.closeDropdown();
			}), this.resultsEl.addEventListener("mousemove", (t) => {
				let r = t.target.closest("a");
				if (r) {
					let i = this.getResultAndOffsetFromElement(r);
					i && (i.resultIndex !== this.activeIndex || i.optionOffset !== this.activeOptionOffset) && (this.activeIndex = i.resultIndex, this.activeOptionOffset = i.optionOffset, this.updateSelectionUI(!1));
				}
			});
		}
		setupOutsideClickHandler() {
			this._documentClickHandler = (e) => {
				this.isOpen && !this.contains(e.target) && this.closeDropdown();
			}, document.addEventListener("click", this._documentClickHandler);
		}
		setupShortcutHandler() {
			this._keyBinding && (this._shortcutKeyHandler = (e) => {
				if (!this._keyBinding || !Ve(this._keyBinding, e)) return;
				let t = document.activeElement;
				t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) || (e.preventDefault(), this.inputEl?.focus());
			}, document.addEventListener("keydown", this._shortcutKeyHandler));
		}
		openDropdown() {
			this.isOpen || !this.containerEl || !this.inputEl || (this.isOpen = !0, this.containerEl.classList.add("open"), this.inputEl.setAttribute("aria-expanded", "true"));
		}
		closeDropdown() {
			!this.isOpen || !this.containerEl || !this.inputEl || (this.isOpen = !1, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.containerEl.classList.remove("open"), this.inputEl.setAttribute("aria-expanded", "false"), this.inputEl.removeAttribute("aria-activedescendant"), this.activeIndex = -1, this.activeOptionOffset = 0, this.selectedEl = null);
		}
		showLoadingState() {
			if (!this.resultsEl || !this.statusEl) return;
			this.isLoading = !0, this.resultsEl.innerHTML = "", this.selectedEl = null, this.resultsEl.setAttribute("aria-busy", "true");
			let e = this.instance?.translate("searching", { SEARCH_TERM: this.searchTerm }) || "Searching...";
			this.statusEl.textContent = e, this.statusEl.className = "pf-searchbox-status pf-searchbox-loading", this.statusEl.hidden = !1;
		}
		showEmptyState() {
			if (!this.resultsEl || !this.statusEl) return;
			this.resultsEl.innerHTML = "", this.selectedEl = null, this.resultsEl.removeAttribute("aria-busy");
			let e = this.instance?.translate("zero_results", { SEARCH_TERM: this.searchTerm }) || `No results for "${this.searchTerm}"`;
			this.statusEl.textContent = e, this.statusEl.className = "pf-searchbox-status pf-searchbox-empty", this.statusEl.hidden = !1, this.instance?.announce("zero_results", { SEARCH_TERM: this.searchTerm }, "assertive");
		}
		getOptionsForResult(e) {
			return e.cachedOptions !== null ? e.cachedOptions : !e.data || !e.placeholderEl ? [] : e.placeholderEl.getAttribute("role") === "group" ? Array.from(e.placeholderEl.querySelectorAll("[role=\"option\"]")) : e.placeholderEl.getAttribute("role") === "option" ? [e.placeholderEl] : [];
		}
		moveSelection(e) {
			let t = this.results.length;
			if (t === 0) return;
			if (e < 0) {
				if (this.activeIndex === -1) return;
				if (this.activeOptionOffset > 0) {
					this.activeOptionOffset--, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(!0);
					return;
				}
				let o = this.activeIndex - 1;
				if (o < 0) {
					this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.activeIndex = -1, this.activeOptionOffset = 0, this.updateSelectionUI(!0);
					return;
				}
				let c = this.results[o];
				if (!c || !c.data) return;
				let u = this.getOptionsForResult(c);
				this.activeIndex = o, this.activeOptionOffset = Math.max(0, u.length - 1), this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(!0), this.preloadAhead(o, e);
				return;
			}
			if (this.activeIndex === -1) {
				if (this.results[0] && !this.results[0].data) {
					this.pendingNavigation += e, this.results[0].load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(0, e);
					return;
				}
				this.activeIndex = 0, this.activeOptionOffset = 0, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(!0), this.preloadAhead(0, e);
				return;
			}
			let r = this.results[this.activeIndex];
			if (!r?.data) {
				r && (this.pendingNavigation += e, r.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(this.activeIndex, e));
				return;
			}
			let i = this.getOptionsForResult(r);
			if (this.activeOptionOffset < i.length - 1) {
				this.activeOptionOffset++, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(!0);
				return;
			}
			let n = this.activeIndex + 1;
			if (n >= t) return;
			let l = this.results[n];
			if (l && !l.data) {
				this.pendingNavigation += e, l.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(n, e);
				return;
			}
			this.activeIndex = n, this.activeOptionOffset = 0, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(!0), this.preloadAhead(n, e);
		}
		preloadAhead(e, t) {
			let r = t > 0 ? 1 : -1, i = Math.abs(this.pendingNavigation) + 3;
			for (let n = 1; n <= i; n++) {
				let l = e + r * n;
				if (l >= 0 && l < this.results.length) {
					let o = this.results[l];
					o && !o.data && o.load();
				}
			}
		}
		scheduleLoadingAnnouncement() {
			this.loadingAnnouncementTimeout || (this.loadingAnnouncementTimeout = window.setTimeout(() => {
				this.loadingAnnouncementTimeout = null, this.instance?.announce("loading", {}, "polite");
			}, 800));
		}
		clearLoadingAnnouncement() {
			this.loadingAnnouncementTimeout && (clearTimeout(this.loadingAnnouncementTimeout), this.loadingAnnouncementTimeout = null);
		}
		handleResultLoaded() {
			if (this.clearLoadingAnnouncement(), this.pendingNavigation === 0) {
				this.updateSelectionUI();
				return;
			}
			let e = this.pendingNavigation > 0 ? 1 : -1, t = this.activeIndex, r = this.activeOptionOffset;
			for (; this.pendingNavigation !== 0;) if (e > 0) {
				let i = this.results[t];
				if (i?.data) {
					let o = this.getOptionsForResult(i);
					if (r < o.length - 1) {
						r++, this.pendingNavigation--;
						continue;
					}
				}
				let n = t + 1;
				if (n >= this.results.length) {
					this.pendingNavigation = 0;
					break;
				}
				let l = this.results[n];
				if (l?.data) t = n, r = 0, this.pendingNavigation--;
				else {
					l && (l.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(n, e));
					break;
				}
			} else {
				if (r > 0) {
					r--, this.pendingNavigation++;
					continue;
				}
				let i = t - 1;
				if (i < 0) {
					this.pendingNavigation = 0;
					break;
				}
				let n = this.results[i];
				if (n?.data) {
					let l = this.getOptionsForResult(n);
					t = i, r = Math.max(0, l.length - 1), this.pendingNavigation++;
				} else break;
			}
			(t !== this.activeIndex || r !== this.activeOptionOffset) && (this.activeIndex = t, this.activeOptionOffset = r, this.updateSelectionUI(!0));
		}
		updateSelectionUI(e = !1) {
			if (!this.resultsEl || !this.inputEl) return;
			this.selectedEl && (this.selectedEl.removeAttribute("data-pf-selected"), this.selectedEl.setAttribute("aria-selected", "false"), this.selectedEl = null);
			let t = this.activeIndex >= 0 ? this.results[this.activeIndex] : null, i = (t ? this.getOptionsForResult(t) : [])[this.activeOptionOffset];
			i ? (i.setAttribute("data-pf-selected", ""), i.setAttribute("aria-selected", "true"), this.selectedEl = i, this.inputEl.setAttribute("aria-activedescendant", i.id), e && this.scrollToCenter(i)) : this.inputEl.removeAttribute("aria-activedescendant");
		}
		scrollToCenter(e) {
			if (!this.resultsEl) return;
			let t = this.resultsEl, r = e.offsetTop, i = e.offsetHeight, n = t.clientHeight, l = r - n / 2 + i / 2;
			t.scrollTo({
				top: l,
				behavior: "smooth"
			});
		}
		getResultAndOffsetFromElement(e) {
			let t = e.closest("[data-pf-result-index]");
			if (!t) return null;
			let r = parseInt(t.getAttribute("data-pf-result-index"), 10), i = parseInt(t.getAttribute("data-pf-option-offset") || "0", 10);
			return Number.isNaN(r) || Number.isNaN(i) ? null : {
				resultIndex: r,
				optionOffset: i
			};
		}
		activateCurrentSelection(e) {
			if (this.activeIndex < 0 || this.activeIndex >= this.results.length) return;
			let t = this.results[this.activeIndex];
			if (!t || !t.data) return;
			let i = this.getOptionsForResult(t)[this.activeOptionOffset];
			!i || !i.href || (e.metaKey || e.ctrlKey || e.shiftKey ? window.open(i.href, "_blank") : window.location.href = i.href, this.closeDropdown());
		}
		handleResults(e) {
			this.isLoading = !1, this.resultsEl && this.resultsEl.removeAttribute("aria-busy"), this.statusEl && (this.statusEl.hidden = !0);
			for (let i of this.results) i.cleanup();
			if (this.pendingNavigation = 0, this.clearLoadingAnnouncement(), !e.results || e.results.length === 0) {
				this.results = [], this.showEmptyState();
				return;
			}
			let t = this.maxResults > 0 ? e.results.slice(0, this.maxResults) : e.results;
			this.resultsEl && (this.resultsEl.innerHTML = "", this.selectedEl = null);
			let r = this.getResultRenderer();
			this.results = t.map((i, n) => {
				let l = this.getPlaceholder(), c = qe(l)[0];
				this.resultsEl && c && this.resultsEl.appendChild(c);
				let u = new qt({
					rawResult: i,
					placeholderEl: c,
					renderFn: r,
					intersectionRoot: this.resultsEl,
					index: n,
					onLoad: () => {
						this.results[n] === u && this.handleResultLoaded();
					}
				});
				return u;
			}), this.activeIndex = 0, this.activeOptionOffset = 0, this.updateSelectionUI(), this.announceResults();
		}
		buildTemplateData(e) {
			let t = this.showSubResults ? this.instance.getDisplaySubResults(e, this.maxSubResults) : [], r = this.instance.generateId("pf-sb-result");
			return {
				meta: e.meta || {},
				excerpt: e.excerpt || "",
				url: e.url || "",
				sub_results: t.map((i) => {
					let n = this.instance.generateId("pf-sb-result");
					return {
						title: i.title,
						url: i.url,
						excerpt: i.excerpt,
						aria: {
							result_id: n,
							title_id: `${n}-title`,
							excerpt_id: `${n}-excerpt`
						}
					};
				}),
				options: { show_sub_results: this.showSubResults },
				aria: {
					result_id: r,
					title_id: `${r}-title`,
					excerpt_id: `${r}-excerpt`
				}
			};
		}
		getResultRenderer() {
			if (this.resultTemplate) return this.resultTemplate;
			if (this.compiledResultTemplate) {
				let e = this.compiledResultTemplate;
				return (t) => {
					let r = this.buildTemplateData(t);
					return e(r);
				};
			}
			return (e) => {
				let t = this.buildTemplateData(e);
				return us(t);
			};
		}
		rerenderLoadedResults() {
			if (this.resultsEl) {
				this.resultsEl.innerHTML = "", this.selectedEl = null;
				for (let e = 0; e < this.results.length; e++) {
					let t = this.results[e];
					if (t.data) {
						let r = this.buildTemplateData(t.data), i;
						this.resultTemplate ? i = this.resultTemplate(t.data) : this.compiledResultTemplate ? i = this.compiledResultTemplate(r) : i = us(r);
						let n = qe(i);
						for (let l of n) if (l instanceof Element) {
							this.resultsEl.appendChild(l), t.placeholderEl = l, ds(l, e), t.cacheOptions();
							break;
						}
						for (let l of n.slice(1)) this.resultsEl.appendChild(l);
					} else {
						let r = this.getPlaceholder(), n = qe(r)[0];
						n && (this.resultsEl.appendChild(n), t.placeholderEl = n, t.cleanup(), t.setupObserver());
					}
				}
			}
		}
		announceResults() {
			let e = this.results.length;
			if (e === 0) this.instance?.announce("zero_results", { SEARCH_TERM: this.searchTerm }, "assertive");
			else {
				let t = e === 1 ? "one_result" : "many_results";
				this.instance?.announce(t, {
					SEARCH_TERM: this.searchTerm,
					COUNT: e
				});
			}
		}
		register(e) {
			e.registerInput(this, { keyboardNavigation: !0 }), e.registerResults(this, {
				keyboardNavigation: !0,
				announcements: !0
			}), e.on("loading", () => {
				this.searchTerm && this.searchTerm.trim() && (this.openDropdown(), this.showLoadingState());
			}, this), e.on("results", (t) => {
				this.handleResults(t);
			}, this), e.on("error", (t) => {
				let r = t;
				this.isLoading = !1;
				let i = e.translate("error_search") || "Search failed";
				this.showError({
					message: r.message || i,
					details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0
				}), e.announce("error_search", {}, "assertive");
			}, this), e.on("search", (t) => {
				this.inputEl && document.activeElement !== this.inputEl && (this.inputEl.value = t, this.searchTerm = t);
			}, this), e.on("translations", () => {
				let t = this.inputEl?.value || "", r = this.isOpen;
				this.render(), this.inputEl && t && (this.inputEl.value = t), r && (this.openDropdown(), this.results.length > 0 && (this.rerenderLoadedResults(), this.updateSelectionUI()));
			}, this);
		}
		cleanup() {
			this.clearLoadingAnnouncement();
			for (let e of this.results) e.cleanup();
			this.results = [], this.selectedEl = null, this._documentClickHandler && (document.removeEventListener("click", this._documentClickHandler), this._documentClickHandler = null), this._shortcutKeyHandler && (document.removeEventListener("keydown", this._shortcutKeyHandler), this._shortcutKeyHandler = null);
		}
		update() {
			this.readAttributes(), this._documentClickHandler && (document.removeEventListener("click", this._documentClickHandler), this._documentClickHandler = null), this._shortcutKeyHandler && (document.removeEventListener("keydown", this._shortcutKeyHandler), this._shortcutKeyHandler = null), this.render(), this.setupOutsideClickHandler(), this.setupShortcutHandler();
		}
		focus() {
			this.inputEl && this.inputEl.focus();
		}
	};
	customElements.get("pagefind-searchbox") || customElements.define("pagefind-searchbox", De);
	as("resolveUrl", (a, s) => {
		let e = String(a ?? "");
		if (!e || /^[a-z][a-z0-9+.-]*:/i.test(e) || /^\/\//.test(e) || e.startsWith("/")) return e;
		try {
			return new URL(e, new URL(String(s ?? "/"), "https://p")).pathname;
		} catch {
			return e;
		}
	});
	typeof window < "u" && (window.PagefindComponents = Gt);
})();
