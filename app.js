/* SABIRA STYLE — сайт логикасы / логика сайта.
   Тауарлар мен бағаларды data.js файлында өзгертіңіз. / Товары и цены — в data.js. */
(function () {
  "use strict";

  const T = {
    kz: {
      nav_catalog: "Каталог", nav_new: "Жаңа маусым", nav_delivery: "Жеткізу", nav_contacts: "Байланыс",
      payment: "Төлем",
      hero_kicker: "Мұсылман әйелдер киімі · Ақтау",
      hero_title: "Ибалылықтың <em>нәзік</em> сұлулығы",
      hero_text: "Әр әйел ерекше. Талғамыңызға сай орамал, хиджаб, буркини мен абаяны таңдап, WhatsApp арқылы бір минутта тапсырыс беріңіз.",
      btn_wa: "WhatsApp арқылы жазу",
      perk_delivery: "Қазақстан бойынша жеткізу", perk_kaspi: "Kaspi төлем", perk_quality: "Сапалы маталар",
      cats_kicker: "Ассортимент", cats_title: "Не іздейсіз?",
      new_kicker: "Күз — қыс 2026", new_title: "Жаңа маусым",
      catalog_kicker: "Бағасы мен фотосы", all: "Барлығы",
      s_all: "Барлық маусым", "s_autumn-winter": "Күз — қыс", "s_spring-summer": "Көктем — жаз",
      found: n => n + " тауар",
      empty: "Бұл санатта әзірге тауар жоқ. WhatsApp арқылы сұраңыз — тапсырыспен әкелеміз.",
      badge_new: "Жаңа", badge_sale: "Жеңілдік",
      order: "Тапсырыс беру", order_wa: "WhatsApp арқылы тапсырыс",
      color: "Түсі", size: "Өлшемі", ask_ig: "Instagram-да көру",
      delivery_kicker: "Қалай тапсырыс беремін?", delivery_title: "Жеткізу және төлем",
      steps: ["Тауарды таңдаңыз", "Түсі мен өлшемін белгілеңіз", "WhatsApp-қа жіберіңіз", "Kaspi арқылы төлеп, күтіңіз"],
      reviews_kicker: "Клиенттер", reviews_title: "Пікірлер",
      insta_text: "Жаңа келген тауарлар, видео-шолулар мен киіну идеялары — Instagram парақшамызда.",
      insta_btn: "Жазылу",
      c_wa: "WhatsApp", c_ig: "Instagram", c_phone: "Телефон", c_city: "Қала", c_hours: "Жұмыс уақыты", c_addr: "Мекенжай",
      footer_tag: "Ұстамдылық. Әсемдік. Стиль.",
      msg_hello: "Сәлеметсіз бе! SABIRA STYLE сайтынан тапсырыс бергім келеді:",
      msg_general: "Сәлеметсіз бе! SABIRA STYLE сайтынан жазып отырмын. Тауарлар туралы білгім келеді.",
      msg_price: "Бағасы", msg_color: "Түсі", msg_size: "Өлшемі"
    },
    ru: {
      nav_catalog: "Каталог", nav_new: "Новый сезон", nav_delivery: "Доставка", nav_contacts: "Контакты",
      payment: "Оплата",
      hero_kicker: "Мусульманская женская одежда · Актау",
      hero_title: "<em>Нежная</em> красота скромности",
      hero_text: "Каждая женщина особенная. Подберите платок, хиджаб, буркини или абаю по своему вкусу и закажите через WhatsApp за минуту.",
      btn_wa: "Написать в WhatsApp",
      perk_delivery: "Доставка по Казахстану", perk_kaspi: "Оплата Kaspi", perk_quality: "Качественные ткани",
      cats_kicker: "Ассортимент", cats_title: "Что вы ищете?",
      new_kicker: "Осень — зима 2026", new_title: "Новый сезон",
      catalog_kicker: "Цены и фото", all: "Все",
      s_all: "Все сезоны", "s_autumn-winter": "Осень — зима", "s_spring-summer": "Весна — лето",
      found: n => n + " " + (n % 10 === 1 && n % 100 !== 11 ? "товар" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? "товара" : "товаров"),
      empty: "В этой категории пока нет товаров. Напишите в WhatsApp — привезём под заказ.",
      badge_new: "Новинка", badge_sale: "Скидка",
      order: "Заказать", order_wa: "Заказать в WhatsApp",
      color: "Цвет", size: "Размер", ask_ig: "Смотреть в Instagram",
      delivery_kicker: "Как заказать?", delivery_title: "Доставка и оплата",
      steps: ["Выберите товар", "Укажите цвет и размер", "Отправьте заказ в WhatsApp", "Оплатите через Kaspi и ждите"],
      reviews_kicker: "Клиенты", reviews_title: "Отзывы",
      insta_text: "Новые поступления, видеообзоры и идеи образов — в нашем Instagram.",
      insta_btn: "Подписаться",
      c_wa: "WhatsApp", c_ig: "Instagram", c_phone: "Телефон", c_city: "Город", c_hours: "Время работы", c_addr: "Адрес",
      footer_tag: "Скромность. Элегантность. Стиль.",
      msg_hello: "Здравствуйте! Хочу заказать с сайта SABIRA STYLE:",
      msg_general: "Здравствуйте! Пишу с сайта SABIRA STYLE. Хочу узнать о товарах.",
      msg_price: "Цена", msg_color: "Цвет", msg_size: "Размер"
    }
  };

  let lang = "kz";
  try { lang = localStorage.getItem("ss-lang") || SHOP.defaultLang || "kz"; } catch (e) { lang = SHOP.defaultLang || "kz"; }
  if (!T[lang]) lang = "kz";

  const state = { cat: "all", season: "all", product: null, color: null, size: null };
  const $ = s => document.querySelector(s);
  const t = k => T[lang][k];
  const L = o => (o && (o[lang] || o.kz)) || "";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const money = n => n.toLocaleString("ru-RU").replace(/,/g, " ") + " " + SHOP.currency;
  const wa = text => "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(text);

  /* ---------- Фото немесе әдемі орынбасар / Фото или красивая заглушка ---------- */
  function placeholder(p) {
    const c = COLORS[p.colors[0]] ? COLORS[p.colors[0]].hex : "#E6D6C8";
    return '<div class="ph" style="--c:' + c + '"><svg class="ph__moon"><use href="#i-moon"/></svg>' +
      '<span class="ph__cat">' + esc(L(CATEGORIES[p.cat])) + "</span></div>";
  }
  function photo(p, i) {
    const src = p.photos && p.photos[i || 0];
    if (!src) return placeholder(p);
    return '<img src="' + esc(src) + '" alt="' + esc(L(p.name)) + '" loading="lazy" ' +
      'onerror="this.outerHTML=window.__ssPh(' + p.id + ')">';
  }
  window.__ssPh = id => placeholder(PRODUCTS.find(p => p.id === id));

  function badges(p) {
    let h = "";
    if (p.isNew) h += '<span class="badge badge--new">' + t("badge_new") + "</span>";
    if (p.oldPrice) h += '<span class="badge badge--sale">−' + Math.round(100 - p.price / p.oldPrice * 100) + "%</span>";
    return h ? '<div class="badges">' + h + "</div>" : "";
  }
  function priceHTML(p) {
    return '<span class="price">' + money(p.price) + "</span>" +
      (p.oldPrice ? '<s class="old">' + money(p.oldPrice) + "</s>" : "");
  }
  function swatches(p) {
    return '<div class="dots">' + p.colors.map(k => COLORS[k] ?
      '<i style="background:' + COLORS[k].hex + '" title="' + esc(L(COLORS[k])) + '"></i>' : "").join("") + "</div>";
  }

  function card(p) {
    return '<article class="card" data-id="' + p.id + '">' +
      '<button type="button" class="card__media" data-open="' + p.id + '" aria-label="' + esc(L(p.name)) + '">' + photo(p) + badges(p) + "</button>" +
      '<div class="card__body">' +
        '<p class="card__cat">' + esc(L(CATEGORIES[p.cat])) + "</p>" +
        '<h3 class="card__name">' + esc(L(p.name)) + "</h3>" +
        '<div class="card__row"><div>' + priceHTML(p) + "</div>" + swatches(p) + "</div>" +
        '<button type="button" class="btn btn--wa btn--sm btn--block" data-open="' + p.id + '"><svg><use href="#i-wa"/></svg>' + t("order") + "</button>" +
      "</div></article>";
  }

  /* ---------- Мәтін және сілтемелер / Тексты и ссылки ---------- */
  function applyLang() {
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (k === "hero_title") el.innerHTML = t(k);
      else if (k === "address") { el.textContent = L(SHOP.address); el.hidden = !L(SHOP.address); }
      else el.textContent = k === "city" ? L(SHOP.city) : t(k);
    });
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.querySelectorAll('[data-link="whatsapp"]').forEach(a => a.href = wa(t("msg_general")));
    document.querySelectorAll('[data-link="instagram"]').forEach(a => a.href = SHOP.instagram);
    document.querySelectorAll('[data-link="phone"]').forEach(a => a.href = "tel:" + SHOP.phoneLink);
    renderAll();
  }

  function renderAll() {
    const words = Object.keys(CATEGORIES).map(k => L(CATEGORIES[k]));
    const line = words.concat(["SABIRA STYLE"]).map(w => "<span>" + esc(w) + "</span><b>✦</b>").join("");
    $("#marquee").innerHTML = line + line;

    $("#cats").innerHTML = Object.keys(CATEGORIES).map((k, i) => {
      const n = PRODUCTS.filter(p => p.cat === k).length;
      return '<a href="#catalog" class="cat" data-cat="' + k + '" style="--i:' + i + '">' +
        '<span class="cat__arch"><svg><use href="#i-moon"/></svg></span>' +
        "<strong>" + esc(L(CATEGORIES[k])) + "</strong><small>" + t("found")(n) + "</small></a>";
    }).join("");

    const fresh = PRODUCTS.filter(p => p.isNew);
    $("#new").hidden = !fresh.length;
    $("#newRail").innerHTML = fresh.map(card).join("");

    renderCatalog();

    $("#steps").innerHTML = t("steps").map((s, i) => '<div class="step"><span>' + (i + 1) + "</span><p>" + esc(s) + "</p></div>").join("");
    const info = arr => arr.map(d => '<div class="info"><h4>' + esc(L(d)) + "</h4><p>" + esc(L(d.info)) + "</p></div>").join("");
    $("#deliveryList").innerHTML = info(SHOP.delivery);
    $("#paymentList").innerHTML = info(SHOP.payment);

    $("#reviews").hidden = !REVIEWS.length;
    $("#reviewList").innerHTML = REVIEWS.map(r => '<figure class="review">' +
      (r.photo ? '<img src="' + esc(r.photo) + '" alt="" loading="lazy">' : "") +
      "<blockquote>" + esc(L(r.text)) + "</blockquote><figcaption>" + esc(r.name) + "</figcaption></figure>").join("");

    const rows = [
      ["i-wa", t("c_wa"), SHOP.phone, wa(t("msg_general"))],
      ["i-ig", t("c_ig"), SHOP.instagramName, SHOP.instagram],
      ["i-phone", t("c_phone"), SHOP.phone, "tel:" + SHOP.phoneLink],
      L(SHOP.address) ? ["i-pin", t("c_addr"), L(SHOP.address) + ", " + L(SHOP.city).split(",")[0]] : ["i-pin", t("c_city"), L(SHOP.city)],
      L(SHOP.hours) && ["i-clock", t("c_hours"), L(SHOP.hours)]
    ].filter(Boolean);
    $("#contactsList").innerHTML = rows.map(r => {
      const inner = '<svg><use href="#' + r[0] + '"/></svg><span><small>' + esc(r[1]) + "</small>" + esc(r[2]) + "</span>";
      return r[3] ? '<a class="contact" href="' + r[3] + '"' + (r[3].startsWith("http") ? ' target="_blank" rel="noopener"' : "") + ">" + inner + "</a>"
                  : '<div class="contact">' + inner + "</div>";
    }).join("");

    $("#year").textContent = new Date().getFullYear();
    if (state.product) renderModal();
  }

  function renderCatalog() {
    const cats = ["all"].concat(Object.keys(CATEGORIES));
    $("#catChips").innerHTML = cats.map(k => '<button type="button" class="chip' + (state.cat === k ? " on" : "") + '" data-cat="' + k + '">' +
      esc(k === "all" ? t("all") : L(CATEGORIES[k])) + "</button>").join("");
    $("#seasonChips").innerHTML = ["all", "autumn-winter", "spring-summer"].map(k =>
      '<button type="button" class="chip chip--soft' + (state.season === k ? " on" : "") + '" data-season="' + k + '">' + t("s_" + k) + "</button>").join("");

    const list = PRODUCTS.filter(p =>
      (state.cat === "all" || p.cat === state.cat) &&
      (state.season === "all" || p.season === state.season || p.season === "all"));
    $("#found").textContent = t("found")(list.length);
    $("#grid").innerHTML = list.length ? list.map(card).join("") :
      '<div class="empty"><p>' + t("empty") + '</p><a class="btn btn--wa btn--sm" href="' + wa(t("msg_general")) + '" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>WhatsApp</a></div>';
  }

  /* ---------- Тауар терезесі / Окно товара ---------- */
  function openProduct(id) {
    const p = PRODUCTS.find(x => x.id === +id);
    if (!p) return;
    state.product = p; state.color = p.colors[0] || null; state.size = p.sizes.length === 1 ? p.sizes[0] : null;
    renderModal();
    $("#overlay").hidden = $("#modal").hidden = false;
    document.body.classList.add("lock");
  }
  function closeModal() {
    state.product = null;
    $("#overlay").hidden = $("#modal").hidden = true;
    document.body.classList.remove("lock");
  }
  function orderText(p) {
    const lines = [t("msg_hello"), "", "• " + L(p.name) + " (" + L(CATEGORIES[p.cat]) + ")"];
    if (state.color) lines.push("• " + t("msg_color") + ": " + L(COLORS[state.color]));
    if (state.size) lines.push("• " + t("msg_size") + ": " + state.size);
    lines.push("• " + t("msg_price") + ": " + money(p.price));
    return lines.join("\n");
  }
  function renderModal() {
    const p = state.product;
    const thumbs = p.photos.length > 1 ? '<div class="thumbs">' + p.photos.map((s, i) =>
      '<button type="button" data-thumb="' + i + '">' + photo(p, i) + "</button>").join("") + "</div>" : "";
    $("#modalBody").innerHTML =
      '<div class="pd">' +
        '<div class="pd__media"><div class="pd__main" id="pdMain">' + photo(p) + badges(p) + "</div>" + thumbs + "</div>" +
        '<div class="pd__info">' +
          '<p class="card__cat">' + esc(L(CATEGORIES[p.cat])) + " · " + t("s_" + p.season) + "</p>" +
          "<h3>" + esc(L(p.name)) + "</h3>" +
          '<div class="pd__price">' + priceHTML(p) + "</div>" +
          (p.desc ? '<p class="pd__desc">' + esc(L(p.desc)) + "</p>" : "") +
          (p.colors.length ? "<h4>" + t("color") + ": <span>" + esc(state.color ? L(COLORS[state.color]) : "") + '</span></h4><div class="swatches">' +
            p.colors.map(k => '<button type="button" class="sw' + (state.color === k ? " on" : "") + '" data-color="' + k + '" style="--c:' + COLORS[k].hex + '" aria-label="' + esc(L(COLORS[k])) + '"></button>').join("") + "</div>" : "") +
          (p.sizes.length ? "<h4>" + t("size") + '</h4><div class="sizes">' +
            p.sizes.map(s => '<button type="button" class="chip' + (state.size === s ? " on" : "") + '" data-size="' + esc(s) + '">' + esc(s) + "</button>").join("") + "</div>" : "") +
          '<a class="btn btn--wa btn--block" href="' + wa(orderText(p)) + '" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>' + t("order_wa") + "</a>" +
          '<a class="btn btn--ghost btn--block" href="' + SHOP.instagram + '" target="_blank" rel="noopener"><svg><use href="#i-ig"/></svg>' + t("ask_ig") + "</a>" +
        "</div>" +
      "</div>";
  }

  /* ---------- Оқиғалар / События ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-open],[data-cat],[data-season],[data-color],[data-size],[data-thumb],[data-lang],[data-close],#overlay,#burger,.nav a");
    if (!el) return;
    if (el.dataset.open) return openProduct(el.dataset.open);
    if (el.dataset.lang) { lang = el.dataset.lang; try { localStorage.setItem("ss-lang", lang); } catch (x) {} return applyLang(); }
    if (el.dataset.cat) { state.cat = el.dataset.cat; return renderCatalog(); }
    if (el.dataset.season) { state.season = el.dataset.season; return renderCatalog(); }
    if (el.dataset.color) { state.color = el.dataset.color; return renderModal(); }
    if (el.dataset.size) { state.size = el.dataset.size; return renderModal(); }
    if (el.dataset.thumb) { $("#pdMain").innerHTML = photo(state.product, +el.dataset.thumb) + badges(state.product); return; }
    if (el.id === "burger") return document.body.classList.toggle("menu-open");
    if (el.matches(".nav a")) return document.body.classList.remove("menu-open");
    closeModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && state.product) closeModal(); });
  window.addEventListener("scroll", () => $("#header").classList.toggle("scrolled", scrollY > 10), { passive: true });

  if (SHOP.heroImage) {
    const arch = $("#heroArch"), img = new Image();
    img.onload = () => { arch.style.backgroundImage = "url('" + SHOP.heroImage + "')"; arch.classList.add("has-img"); };
    img.src = SHOP.heroImage;
  }

  applyLang();
})();
