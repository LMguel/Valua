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
});
