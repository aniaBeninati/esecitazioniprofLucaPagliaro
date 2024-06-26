import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo</div>
          <nav className="nav">
            <FooterMenu />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterMenu() {
  const items = [
    { label: "Google", url: "https://www.google.it" },
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Instagram", url: "https://www.instagram.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com" },
    { label: "GitHub", url: "https://www.github.com" },
  ];

  return (
    <nav className="menu">
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="item">
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Footer };
