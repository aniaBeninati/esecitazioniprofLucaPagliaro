function getHeaderHTML() {
  const menuHTML = getMenuHTML();

  return `
      <header>
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  ${menuHTML}
              </div>
          </div>
      </header>
      `;
}

function getMenuItemHTML(options = {}) {
  const { label, href = "#" } = options;

  return `
      <li class="item">
          <a href="${href}">${label}</a>
      </li>
      `;
}

function getMenuHTML() {
  const menuItems = [
    { label: "About us" },
    { label: "Store", href: "https://www.apple.com/store" },
    { label: "Apple", href: "https://www.apple.com" },
    { label: "Contacts" },
  ];

  return `
      <nav class="nav">
          <ul class="list">
              ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
          </ul>
      </nav>
      `;
}

export { getHeaderHTML };
