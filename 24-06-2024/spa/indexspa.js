import { getHeaderHTML } from "./header.js";
import { getMainHTML } from "./main.js";
import { getFooterHTML } from "./footer.js";

const appEl = document.querySelector("#app");

if (appEl) {
  renderPage(appEl);
}

function renderPage(appEl) {
  const header = getHeaderHTML();
  const footer = getFooterHTML();
  const main = getMainHTML();

  const html = header + main + footer;
  appEl.innerHTML = html;

  const asideEl = document.querySelector("aside");
  const h1El = document.createElement("h1");
  h1El.textContent = "Hello World!";
  asideEl.append(h1El);
  const h2El = document.createElement("h2");
  h2El.textContent = "Word!";
  asideEl.append(h2El);
  const pEl = document.createElement("p");
  pEl.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna";
  asideEl.append(pEl);
}
