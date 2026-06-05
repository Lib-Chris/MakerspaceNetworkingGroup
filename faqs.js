// =============================================================
// faqs.js — EDIT THIS FILE to add, remove, or update FAQs.
// Changes here update the FAQ page automatically.
//
// HOW TO ADD A NEW FAQ:
//   1. Copy one { q: "...", a: "..." } block below
//   2. Paste it before the closing ];
//   3. Fill in your question and answer
//   4. Save the file
//
// You can use basic HTML in answers, e.g.:
//   <a href="meetings.html">Meetings page</a>
// =============================================================

(function () {
  const faqs = [
    {
      q: "What is the Makerspace Networking Group?",
      a: "The Makerspace Networking Group (MNG) is an informal network of library makerspace staff based in Illinois. Our goal is to share resources, lesson plans, equipment knowledge, and professional support across member libraries."
    },
    {
      q: "Who can join MNG?",
      a: "MNG is open to any library staff in Illinois who work with or are interested in makerspaces. This includes public, academic, school, and special libraries. There is no cost to participate."
    },
    {
      q: "How do I join the MNG Discord?",
      a: 'Use this invite link: <a href="https://discord.gg/ucCBwN6cuN">discord.gg/ucCBwN6cuN</a>. Once you join, introduce yourself in the #introductions channel and let us know which library you\'re from.'
    },
    {
      q: "How do I join the MNG e-mail list?",
      a: 'Visit the <a href="https://railslibraries.org/networking/groups" target="_blank" rel="noopener noreferrer">RAILS networking groups page</a>, search for "Makerspace" or scroll to the M section, and look for <strong>Makerspace Networking Group (MNG)</strong> to subscribe.'
    },
    {
      q: "When do MNG meetings take place?",
      a: 'Check the <a href="meetings.html">Meetings page</a> for the current schedule. Meetings are held virtually and meeting links are posted in the MNG Discord.'
    },
    {
      q: "How do I contribute a lesson plan or equipment guide?",
      a: 'Share your materials in the MNG Discord or contact a group organizer. Once reviewed, it can be added to the <a href="lesson-plans.html">Lesson Plans</a> or <a href="equipment-guides.html">Equipment Guides</a> pages on this site.'
    },
    {
      q: "How do I update or correct information on this site?",
      a: "This site is hosted on GitHub Pages. Any MNG staff member with access to the repository can edit the files directly in the GitHub web interface — no coding experience required. Contact your site administrator for access."
    },

    // ----- ADD NEW FAQs ABOVE THIS LINE -----
    // Copy one { q: "...", a: "..." } block and paste it here.
  ];

  const items = faqs.map(({ q, a }) => `
    <li>
      <details>
        <summary>${q}</summary>
        <div class="faq-answer"><p>${a}</p></div>
      </details>
    </li>`).join("");

  const html = `<ul class="faq-list" role="list">${items}</ul>`;

  document.currentScript.insertAdjacentHTML("afterend", html);
})();
