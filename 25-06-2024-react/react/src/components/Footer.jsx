import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="wrapper">
          <div class="logo">Logo</div>
          <nav class="nav">
            <FooterMenu />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterMenu() {
  return (
    <nav class="menu">
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
      <li class="item">
        <a href="wwww.google.it">Google</a>
      </li>
    </nav>
  );
}

export { Footer };
