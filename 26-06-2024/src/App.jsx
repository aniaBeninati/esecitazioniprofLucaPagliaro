import React from 'react';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Button } from "./components/Button.jsx";

import "./styles/layout.css";

function App() {
  return (
    <>
      <Header brand={{ name: "Edgemony" }} className="header" />

      <Main />

      <footer className="footer">
        <Footer />
        <div className="container">
          <form style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Button type="button">Clicca qui</Button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default App;
