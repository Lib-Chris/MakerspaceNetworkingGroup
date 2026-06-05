// =============================================================
// nav.js — EDIT THIS FILE to update the menu on every page.
// Add, remove, or rename links here and all pages update at once.
// =============================================================
(function () {
  const links = [
    { href: "index.html",           label: "Home", logo: true },
    { href: "meetings.html",        label: "Meetings" },
    { href: "resources.html",       label: "Resources" },
    { href: "faqs.html",            label: "FAQs" },
    { href: "lesson-plans.html",    label: "Lesson Plans?" },
    { href: "equipment-guides.html",label: "Equipment Guides?" },
  ];

  // Work out which file we're on so the active link can be highlighted
  const currentFile = location.pathname.split("/").pop() || "index.html";

  const items = links.map(({ href, label, logo }) => {
    const isCurrent = href === currentFile;
    const ariaCurrent = isCurrent ? ' aria-current="page"' : "";
    const img = logo
      ? '<img src="logo-notext.svg" alt="" aria-hidden="true">'
      : "";
    return `<li><a href="${href}"${ariaCurrent}>${img}${label}</a></li>`;
  }).join("\n      ");

  const nav = `<nav class="home-nav" aria-label="Main navigation">
    <ul>
      ${items}
    </ul>
  </nav>`;

  document.currentScript.insertAdjacentHTML("afterend", nav);
})();
