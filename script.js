(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll(".page"));
  var nav = document.getElementById("primaryNav");
  var menuToggle = document.getElementById("menuToggle");

  function showPage(name) {
    pages.forEach(function (p) { p.classList.toggle("is-active", p.dataset.page === name); });
    Array.prototype.slice.call(document.querySelectorAll("nav.primary button")).forEach(function (b) {
      if (b.dataset.goto === name) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    if (nav.classList.contains("is-open")) closeMenu();
    window.scrollTo({ top: 0 });
    history.replaceState(null, "", "#" + name);
    revealVisible();
  }

  Array.prototype.slice.call(document.querySelectorAll("[data-goto]")).forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); showPage(b.dataset.goto); });
  });

  function openMenu() { nav.classList.add("is-open"); menuToggle.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; }
  function closeMenu() { nav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
  menuToggle.addEventListener("click", function () { nav.classList.contains("is-open") ? closeMenu() : openMenu(); });

  Array.prototype.slice.call(document.querySelectorAll(".faq-item")).forEach(function (item) {
    var q = item.querySelector(".faq-q");
    q.addEventListener("click", function () {
      var open = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", open ? "false" : "true");
      q.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  var themeToggle = document.getElementById("themeToggle");
  var root = document.documentElement;
  themeToggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = !current ? (prefersDark ? "light" : "dark") : (current === "dark" ? "light" : "dark");
    root.setAttribute("data-theme", next);
  });

  var counted = false;
  function animateCounters() {
    if (counted) return;
    counted = true;
    Array.prototype.slice.call(document.querySelectorAll("[data-count]")).forEach(function (el) {
      var target = parseInt(el.dataset.count, 10);
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / 900, 1);
        el.textContent = Math.round(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    Array.prototype.slice.call(document.querySelectorAll("[data-count]")).forEach(function (el) { el.textContent = el.dataset.count; });
    counted = true;
  } else {
    setTimeout(animateCounters, 400);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
  }, { threshold: 0.15 });
  function revealVisible() {
    Array.prototype.slice.call(document.querySelectorAll(".page.is-active .reveal")).forEach(function (el) { io.observe(el); });
  }

  var initial = (location.hash || "#inicio").slice(1);
  if (!pages.some(function (p) { return p.dataset.page === initial; })) initial = "inicio";
  showPage(initial);
})();
