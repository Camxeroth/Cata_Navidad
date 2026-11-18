/* =============================================================
   Catálogo Navideño · Expressions by Pao
   Render del catálogo, enlaces de WhatsApp y modal de producto.
   ============================================================= */
(function () {
  "use strict";

  const waLink = (msg) =>
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);

  const money = (p) => p.valor + " " + p.etiqueta;

  const productMsg = (p) => {
    const first = p.precios[0];
    const precio = first ? " (" + money(first) + ")" : "";
    const cierre = first
      ? "¿Me ayudas con la disponibilidad y la personalización?"
      : "¿Me confirmas el precio y la disponibilidad?";
    return (
      "¡Hola, Expressions by Pao! 🎄 Vi el catálogo navideño y quiero pedir: " +
      "*" + p.nombre + "*" + precio +
      ". " + cierre
    );
  };

  /* ------------------------- enlaces WhatsApp ------------------------- */
  document.querySelectorAll(".wa-link").forEach((a) => {
    const msg = a.dataset.msg || "¡Hola! Vi el catálogo navideño y quiero hacer un pedido.";
    a.href = waLink(msg);
    if (!a.hasAttribute("target")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });

  /* ------------------------- plantillas ------------------------- */
  function priceMarkup(precios) {
    if (!precios.length) {
      return '<span class="price price--pending"><span class="price__val">Precio a confirmar</span></span>';
    }
    let out = "";
    let grupo = null;
    precios.forEach((p) => {
      if (p.grupo && p.grupo !== grupo) {
        grupo = p.grupo;
        out += '<span class="price__group">' + grupo + "</span>";
      }
      out +=
        '<span class="price' + (p.secundario ? " price--alt" : "") + '">' +
        '<span class="price__val">' + p.valor + "</span>" +
        '<span class="price__label">' + p.etiqueta + "</span>" +
        "</span>";
    });
    return out;
  }

  function cardMarkup(p) {
    let chipsList = p.incluye.filter((i) => i.length <= 34);
    if (chipsList.length < 2) chipsList = p.incluye;
    const chips = chipsList
      .slice(0, 3)
      .map((i) => "<li>" + i + "</li>")
      .join("");
    const rest = p.incluye.length - Math.min(3, chipsList.length);
    const more = rest > 0 ? '<li class="is-more">+' + rest + " más</li>" : "";

    return (
      '<article class="card reveal">' +
        '<button class="card__media" type="button" style="--ar:' + p.ar + '" ' +
          'data-open="' + p.id + '" aria-label="Ver detalle de ' + p.nombre + '">' +
          '<img src="' + p.img + '" alt="' + p.nombre + '" loading="lazy" ' +
            'width="900" height="' + Math.round(900 / p.ar) + '">' +
          '<span class="card__zoom">Ver detalle</span>' +
        "</button>" +
        '<div class="card__body">' +
          '<h3 class="card__name">' + p.nombre + "</h3>" +
          '<p class="card__desc">' + p.desc + "</p>" +
          '<ul class="card__incluye">' + chips + more + "</ul>" +
          '<div class="prices">' + priceMarkup(p.precios) + "</div>" +
          '<div class="card__actions">' +
            '<button class="btn btn--ghost btn--sm" type="button" data-open="' + p.id + '">Detalles</button>' +
            '<a class="btn btn--wa btn--sm" href="' + waLink(productMsg(p)) + '" target="_blank" rel="noopener">' +
              '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.69 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>' +
              "Pedir" +
            "</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ------------------------- esencias ------------------------- */
  function scentMarkup(e) {
    const msg =
      "¡Hola, Expressions by Pao! 🎄 Vi el catálogo y quiero pedir la esencia *" +
      e.nombre +
      "* para velas. ¿Me ayudas con la disponibilidad y el gramaje?";
    const prices = e.precios
      .map(([g, p]) => "<span><b>" + g + "</b><em>" + p + "</em></span>")
      .join("");
    return (
      '<article class="scent reveal">' +
        '<div class="scent__media">' +
          '<img src="' + e.img + '" alt="Esencia ' + e.nombre + '" loading="lazy" width="600" height="600">' +
        "</div>" +
        '<div class="scent__body">' +
          '<p class="scent__kicker">Fragancia</p>' +
          '<h3 class="scent__name">' + e.nombre + "</h3>" +
          '<div class="scent__prices">' + prices + "</div>" +
          '<div class="scent__foot">' +
            '<span class="scent__iva">+ IVA</span>' +
            '<a class="scent__cta" href="' + waLink(msg) + '" target="_blank" rel="noopener">' +
              "Pedir" +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            "</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ------------------------- render por colección ------------------------- */
  document.querySelectorAll("[data-grid]").forEach((grid) => {
    const cat = grid.dataset.grid;
    grid.innerHTML = PRODUCTOS.filter((p) => p.categoria === cat)
      .map(cardMarkup)
      .join("");
  });

  const esenciasGrid = document.querySelector("[data-esencias]");
  if (esenciasGrid && typeof ESENCIAS !== "undefined") {
    esenciasGrid.innerHTML = ESENCIAS.map(scentMarkup).join("");
  }

  /* ------------------------- header y menú ------------------------- */
  const header = document.getElementById("site-header");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-btn");

  const onScroll = () => {
    header.classList.toggle("is-stuck", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  };
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (e.target.closest("#nav") || e.target.closest("#menu-btn")) return;
    closeMenu();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });

  /* ------------------------- sección activa ------------------------- */
  const navLinks = Array.from(nav.querySelectorAll("a"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle(
              "is-active",
              a.getAttribute("href") === "#" + entry.target.id
            )
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ------------------------- reveal ------------------------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ------------------------- modal ------------------------- */
  const dlg = document.getElementById("pv");
  const pvImg = document.getElementById("pv-img");
  const pvCat = document.getElementById("pv-cat");
  const pvName = document.getElementById("pv-name");
  const pvDesc = document.getElementById("pv-desc");
  const pvIncluye = document.getElementById("pv-incluye");
  const pvPrecios = document.getElementById("pv-precios");
  const pvWa = document.getElementById("pv-wa");

  const openProduct = (id) => {
    const p = PRODUCTOS.find((x) => x.id === id);
    if (!p) return;
    pvImg.src = p.img;
    pvImg.alt = p.nombre;
    pvCat.textContent = CATEGORIAS[p.categoria] || "";
    pvName.textContent = p.nombre;
    pvDesc.textContent = p.desc;
    pvIncluye.innerHTML = p.incluye.map((i) => "<li>" + i + "</li>").join("");
    pvPrecios.innerHTML = priceMarkup(p.precios);
    pvWa.href = waLink(productMsg(p));
    pvWa.target = "_blank";
    pvWa.rel = "noopener";
    if (typeof dlg.showModal === "function") {
      dlg.showModal();
      document.documentElement.classList.add("is-locked");
    } else {
      window.location.href = pvWa.href;
    }
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open]");
    if (trigger) {
      e.preventDefault();
      openProduct(trigger.dataset.open);
    }
  });

  const closeModal = () => {
    if (dlg.open) dlg.close();
  };
  document.getElementById("pv-close").addEventListener("click", closeModal);
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) closeModal();
  });
  dlg.addEventListener("close", () => {
    document.documentElement.classList.remove("is-locked");
  });

  /* ------------------------- año ------------------------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
