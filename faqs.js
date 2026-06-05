// =============================================================
// faqs.js — EDIT THIS FILE to add, remove, or update FAQs.
//
// HOW TO ADD A FAQ:
//   1. Copy one { ... } block below and paste before the ]; line
//   2. Fill in: id, category, q (question), a (answer)
//
//   id       — short kebab-case slug used for direct links
//              e.g. id: "joining-discord"
//              Link to it with: faqs.html#joining-discord
//              Keep it stable — changing it breaks existing links.
//   category — group heading shown above the FAQ (e.g. "General")
//              FAQs in the same category appear together.
//   q        — the question text
//   a        — the answer; basic HTML is allowed (links, <strong>, etc.)
// =============================================================

(function () {
  const faqs = [
    {
      id: "what-is-mng",
      category: "General",
      q: "What is the Makerspace Networking Group?",
      a: "The Makerspace Networking Group (MNG) is an informal network of library makerspace staff based in Illinois. Our goal is to share resources, lesson plans, equipment knowledge, and professional support across member libraries."
    },
    {
      id: "who-can-join",
      category: "General",
      q: "Who can join MNG?",
      a: "MNG is open to any library staff in Illinois who work with or are interested in makerspaces. This includes public, academic, school, and special libraries. There is no cost to participate."
    },
    {
      id: "join-discord",
      category: "General",
      q: "How do I join the MNG Discord?",
      a: 'Use this invite link: <a href="https://discord.gg/ucCBwN6cuN">discord.gg/ucCBwN6cuN</a>. Once you join, introduce yourself in the #introductions channel and let us know which library you\'re from.'
    },
    {
      id: "join-email-list",
      category: "General",
      q: "How do I join the MNG e-mail list?",
      a: 'Visit the <a href="https://railslibraries.org/networking/groups" target="_blank" rel="noopener noreferrer">RAILS networking groups page</a>, search for "Makerspace" or scroll to the M section, and look for <strong>Makerspace Networking Group (MNG)</strong> to subscribe.'
    },
    {
      id: "meetings",
      category: "General",
      q: "When do MNG meetings take place?",
      a: 'MNG meets quarterly in person. Virtual meetings may be scheduled on an as-needed basis. Check the <a href="meetings.html">Meetings page</a> for the current schedule, and keep an eye on the Discord and e-mail list for announcements.'
    },
    {
      id: "contribute-materials",
      category: "General",
      q: "How do I contribute a lesson plan or equipment guide?",
      a: 'Share your materials in the MNG Discord or contact a group organizer. Once reviewed, it can be added to the <a href="lesson-plans.html">Lesson Plans</a> or <a href="equipment-guides.html">Equipment Guides</a> pages on this site.'
    },
    {
      id: "update-site",
      category: "General",
      q: "How do I update or correct information on this site?",
      a: "This site is hosted on GitHub Pages. Any approved MNG member with access to the repository can edit the files directly in the GitHub web interface — no coding experience required. Contact your site administrator for access."
    },

    // ----- ADD NEW FAQs ABOVE THIS LINE -----
  ];

  const linkIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  // Group FAQs by category, preserving insertion order
  const groups = [];
  const seen = {};
  faqs.forEach(faq => {
    if (!seen[faq.category]) {
      seen[faq.category] = [];
      groups.push({ category: faq.category, items: seen[faq.category] });
    }
    seen[faq.category].push(faq);
  });

  const html = groups.map(({ category, items }) => {
    const listItems = items.map(({ id, q, a }) => `
    <li>
      <details id="${id}">
        <summary>
          <span class="faq-q-text">${q}</span>
          <button class="faq-copy-btn" data-id="${id}" aria-label="Copy link to this question">${linkIcon}</button>
        </summary>
        <div class="faq-answer"><p>${a}</p></div>
      </details>
    </li>`).join("");

    return `<h3 class="faq-category">${category}</h3>
<ul class="faq-list" role="list">${listItems}
</ul>`;
  }).join("\n");

  document.currentScript.insertAdjacentHTML("afterend", html);

  document.addEventListener("DOMContentLoaded", function () {
    // Auto-open and scroll if URL has a hash on load
    const hash = location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el && el.tagName === "DETAILS") {
        el.open = true;
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }

    // Update URL bar when a question is opened
    document.querySelectorAll(".faq-list details").forEach(details => {
      details.addEventListener("toggle", function () {
        if (this.open) {
          history.replaceState(null, "", "#" + this.id);
        } else if (location.hash === "#" + this.id) {
          history.replaceState(null, "", location.pathname);
        }
      });
    });

    // Copy link button
    document.querySelectorAll(".faq-copy-btn").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation(); // don't toggle the details open/closed
        e.preventDefault();
        const url = location.origin + location.pathname + "#" + this.dataset.id;
        navigator.clipboard.writeText(url).then(() => {
          this.classList.add("faq-copy-btn--copied");
          setTimeout(() => this.classList.remove("faq-copy-btn--copied"), 1500);
        });
      });
    });
  });
})();
