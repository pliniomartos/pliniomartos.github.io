(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const themeBtn = document.querySelector(".theme-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile navigation ---------- */
  if (toggle && nav) {
    const mobileQuery = window.matchMedia("(max-width: 860px)");

    function setNavOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav.classList.contains("is-open")) {
          setNavOpen(false);
        }
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setNavOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setNavOpen(false);
    });

    const handleBreakpoint = function (e) {
      if (!e.matches && nav.classList.contains("is-open")) {
        setNavOpen(false);
      }
    };

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleBreakpoint);
    }
  }

  /* ---------- Theme toggle ---------- */
  if (themeBtn) {
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function getEffectiveTheme() {
      const explicit = root.getAttribute("data-theme");
      if (explicit === "light" || explicit === "dark") return explicit;
      return colorSchemeQuery.matches ? "dark" : "light";
    }

    function updateThemeButton() {
      const next = getEffectiveTheme() === "dark" ? "light" : "dark";
      const label = "Switch to " + next + " theme";
      themeBtn.setAttribute("aria-label", label);
      themeBtn.setAttribute("title", label);
    }

    updateThemeButton();

    themeBtn.addEventListener("click", function () {
      const next = getEffectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {
        /* Storage unavailable; keep session-only theme */
      }
      updateThemeButton();
    });

    if (typeof colorSchemeQuery.addEventListener === "function") {
      colorSchemeQuery.addEventListener("change", function () {
        if (!root.getAttribute("data-theme")) {
          updateThemeButton();
        }
      });
    }
  }
})();
