function getFooterHTML() {
  const menuHTML = getMenuHTML();

  return `<footer class="footer">
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  <nav class="nav">
                      ${menuHTML}
                  </nav>
              </div>
          </div>
      </footer>`;
}

function getMenuItemHTML(options) {
  const { label, href = "#", children = [] } = options;
  const subitemsHTML = children
    .map((item) => `<li class="item subitem">${item.label}</li>`)
    .join("");
  const subMenuHTML = "<ul>" + subitemsHTML + "</ul>";
  return `<li class="item">
    <a href="${href}">${label}</a>
    ${children.length > 0 ? subMenuHTML : ""}
  </li>`;
}

function getMenuHTML() {
  const menuItems = [
    {
      label: "Shop and Learn",
      children: [
        { label: "Store" },
        { label: "Mac" },
        { label: "IPhone" },
        { label: "Watc" },
      ],
    },

    {
      label: "Apple Wallet",
      children: [
        { label: "Wallet" },
        { label: "Apple Card" },
        { label: "Apple Pay" },
        { label: "Apple Cash" },
      ],
    },
    {
      label: "Apple Store",
      children: [
        { label: "Find a Store" },
        { label: "Genius Bar" },
        { label: "Today at Apple" },
        { label: "Group Reservations" },
      ],
    },
    {
      label: "Entertainment",
      children: [
        { label: "Apple One" },
        { label: "Apple TV+" },
        { label: "Apple Music" },
        { label: "Apple Arcade" },
      ],
    },
    {
      label: "Apple Values",
      children: [
        { label: "Accessibility" },
        { label: "Environment" },
        { label: "Environment" },
        { label: "Inclusion and Diversity" },
      ],
    },
  ];

  return `
      <ul class="menu">
          ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
      </ul>
      `;
}

export { getFooterHTML };
