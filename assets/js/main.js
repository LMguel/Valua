/*
  Valuà Engenharia — script compartilhado.
  - Sem dependências externas (performance).
  - Preenche automaticamente todos os links de WhatsApp a partir de UM número
    central (mais fácil de atualizar quando o número real for definido).
  - Prepara "ganchos" de evento para Google Analytics 4 (dataLayer.push),
    sem exigir que o GA já esteja instalado: o push só ocorre se o
    dataLayer existir (ou cria um array vazio, para não gerar erros).
*/

const WHATSAPP_NUMBER = "5524981616105"; // Moizes Cunha — Eng. Civil, responsável técnico

window.dataLayer = window.dataLayer || [];
function trackEvent(name, params) {
  window.dataLayer.push(Object.assign({ event: name }, params || {}));
}

(function revealHeroContent() {
  // Mostra a foto de fundo primeiro; o conteúdo (logo, headline, CTA...)
  // só aparece com fade/subida assim que a foto termina de carregar.
  const heroPhoto = document.querySelector(".hero.hero-full .hero-photo");
  const heroInner = document.querySelector(".hero.hero-full .hero-inner");
  if (!heroPhoto || !heroInner) return;

  const reveal = () => heroInner.classList.add("is-visible");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveal();
    return;
  }
  if (heroPhoto.complete && heroPhoto.naturalWidth > 0) {
    requestAnimationFrame(reveal);
  } else {
    heroPhoto.addEventListener("load", reveal, { once: true });
    heroPhoto.addEventListener("error", reveal, { once: true });
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  // --- Header flutuante sobre o hero full-bleed: fica sólido ao rolar ---
  const heroHeader = document.querySelector(".site-header.hero-overlay");
  if (heroHeader) {
    const heroSection = document.querySelector(".hero.hero-full");
    const toggleHeader = () => {
      const threshold = heroSection ? Math.max(heroSection.offsetHeight - 140, 80) : 80;
      heroHeader.classList.toggle("scrolled", window.scrollY > threshold);
    };
    toggleHeader();
    window.addEventListener("scroll", toggleHeader, { passive: true });
  }

  // --- Ano corrente no rodapé ---
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // --- Monta os links de WhatsApp a partir da mensagem contextual em data-msg ---
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const msg = el.getAttribute("data-msg") || "Olá, encontrei a Valuà pelo site e gostaria de solicitar um orçamento.";
    el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", () => {
      trackEvent("whatsapp_click", { page_path: location.pathname, context: el.getAttribute("data-context") || "geral" });
    });
  });

  // --- Eventos de clique em telefone / e-mail / localização (para GA4) ---
  document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
    el.addEventListener("click", () => trackEvent("phone_click", { page_path: location.pathname }));
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach((el) => {
    el.addEventListener("click", () => trackEvent("email_click", { page_path: location.pathname }));
  });
  document.querySelectorAll("[data-track-location]").forEach((el) => {
    el.addEventListener("click", () => trackEvent("location_click", { page_path: location.pathname }));
  });

  // --- Menu mobile ---
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  const mobileNavClose = document.getElementById("mobileNavClose");
  if (burger && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    if (mobileNavClose) mobileNavClose.addEventListener("click", closeMenu);
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  // --- Revelação suave ao rolar (respeita prefers-reduced-motion) ---
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  // --- Carrosséis automáticos (portfólio) ---
  // Nota: o autoplay roda mesmo com "reduzir movimento" ativado no sistema —
  // é uma troca de foto (crossfade), não uma animação de rolagem/parallax,
  // e o cliente pediu explicitamente que ande sozinho.
  document.querySelectorAll(".auto-carousel").forEach((car) => {
    const slides = car.querySelectorAll(".slide");
    const dots = car.querySelectorAll(".dot");
    if (slides.length < 2) return;
    let index = 0;
    let timer = null;
    const show = (n) => {
      index = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    };
    const next = () => show(index + 1);
    const start = () => {
      stop();
      timer = setInterval(next, 3800);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        show(i);
        start();
      });
    });
    car.addEventListener("mouseenter", stop);
    car.addEventListener("mouseleave", start);
    show(0);
    start();
  });

  // --- Fita de fotos (marquee): rola sozinha e também pode ser arrastada,
  // no mouse e no touch, sem parar de rolar depois que o usuário solta ---
  document.querySelectorAll(".marquee").forEach((wrap) => {
    const track = wrap.querySelector(".marquee-track");
    if (!track) return;

    const SPEED = 32; // px por segundo
    let halfWidth = 0;
    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    let pos = 0; // acumulador livre; a posição visual é sempre normalizada
    let dragging = false;
    let hovered = false;
    let lastTime = null;
    let pointerId = null;
    let startX = 0;
    let startPos = 0;

    const wrappedPos = () => {
      if (halfWidth <= 0) return 0;
      let w = pos % halfWidth;
      if (w > 0) w -= halfWidth;
      return w;
    };
    const apply = () => {
      track.style.transform = `translateX(${wrappedPos()}px)`;
    };

    const tick = (t) => {
      if (lastTime == null) lastTime = t;
      const dt = Math.min((t - lastTime) / 1000, 0.1);
      lastTime = t;
      if (!dragging && !hovered) pos -= SPEED * dt;
      apply();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    wrap.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      pointerId = e.pointerId;
      startX = e.clientX;
      startPos = pos;
      wrap.classList.add("is-dragging");
      wrap.setPointerCapture?.(pointerId);
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      pos = startPos + (e.clientX - startX);
      apply();
    });
    const endDrag = (e) => {
      if (!dragging || (pointerId !== null && e.pointerId !== pointerId)) return;
      dragging = false;
      pointerId = null;
      wrap.classList.remove("is-dragging");
    };
    wrap.addEventListener("pointerup", endDrag);
    wrap.addEventListener("pointercancel", endDrag);
    wrap.addEventListener("mouseenter", () => (hovered = true));
    wrap.addEventListener("mouseleave", () => (hovered = false));
    wrap.addEventListener("dragstart", (e) => e.preventDefault());
  });

  // --- Formulário de contato: monta a mensagem e abre no WhatsApp da Valuà ---
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      trackEvent("form_submit", { page_path: location.pathname, form_id: form.id });

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const telefone = form.telefone.value.trim();
      const servicoSelect = form.servico;
      const servicoLabel = servicoSelect.value ? servicoSelect.options[servicoSelect.selectedIndex].text : "";
      const mensagem = form.mensagem.value.trim();

      let msg = `Olá, encontrei a Valuà pelo site e gostaria de solicitar um orçamento.\nNome: ${nome}`;
      if (email) msg += `\nE-mail: ${email}`;
      if (telefone) msg += `\nTelefone: ${telefone}`;
      if (servicoLabel) msg += `\nServiço de interesse: ${servicoLabel}`;
      if (mensagem) msg += `\nMensagem: ${mensagem}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");

      let note = form.querySelector(".form-success");
      if (!note) {
        note = document.createElement("p");
        note.className = "form-success";
        note.style.marginTop = "16px";
        note.style.color = "var(--text-soft)";
        note.style.fontSize = "14.5px";
        form.appendChild(note);
      }
      note.textContent = "Abrindo o WhatsApp com sua mensagem pronta para envio...";
    });
  }

  // --- Portfólio no mobile: mostra só 3 fotos por categoria, com botão "ver mais" ---
  document.querySelectorAll(".gallery-more").forEach((btn) => {
    const gallery = btn.previousElementSibling;
    if (!gallery) return;
    btn.addEventListener("click", () => {
      const expanded = gallery.classList.toggle("expanded");
      btn.textContent = expanded ? "Ver menos fotos" : "Ver mais fotos";
    });
  });

  // --- Lightbox: amplia fotos de galeria/portfólio ao clicar ---
  // Agrupa fotos do mesmo carrossel/galeria para permitir navegar com as setas.
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Fechar">&times;</button>' +
    '<button type="button" class="lightbox-prev" aria-label="Foto anterior">&lsaquo;</button>' +
    '<img class="lightbox-img" alt="">' +
    '<button type="button" class="lightbox-next" aria-label="Próxima foto">&rsaquo;</button>';
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector(".lightbox-img");
  const lbPrev = lightbox.querySelector(".lightbox-prev");
  const lbNext = lightbox.querySelector(".lightbox-next");
  const lbClose = lightbox.querySelector(".lightbox-close");
  let lbGroup = [];
  let lbIndex = 0;

  const lbShow = (i) => {
    lbIndex = (i + lbGroup.length) % lbGroup.length;
    const img = lbGroup[lbIndex];
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || "";
    const multiple = lbGroup.length > 1;
    lbPrev.style.display = multiple ? "" : "none";
    lbNext.style.display = multiple ? "" : "none";
  };
  const lbOpen = (imgs, i) => {
    lbGroup = imgs;
    lightbox.classList.add("open");
    document.body.classList.add("lightbox-lock");
    lbShow(i);
  };
  const lbClose_ = () => {
    lightbox.classList.remove("open");
    document.body.classList.remove("lightbox-lock");
    lbImg.src = "";
  };
  lbPrev.addEventListener("click", () => lbShow(lbIndex - 1));
  lbNext.addEventListener("click", () => lbShow(lbIndex + 1));
  lbClose.addEventListener("click", lbClose_);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lbClose_();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") lbClose_();
    if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
    if (e.key === "ArrowRight") lbShow(lbIndex + 1);
  });

  document.querySelectorAll(".media-placeholder img, .auto-carousel .slide img").forEach((img) => {
    if (!img.alt || img.closest('[aria-hidden="true"]')) return; // pula fotos decorativas
    img.classList.add("lightbox-trigger");
    img.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const container = img.closest(".gallery, .auto-carousel");
      const imgs = container
        ? Array.from(container.querySelectorAll(".media-placeholder img, .slide img")).filter(
            (i) => i.alt && !i.closest('[aria-hidden="true"]')
          )
        : [img];
      const i = imgs.indexOf(img);
      lbOpen(imgs, i === -1 ? 0 : i);
    });
  });
});
