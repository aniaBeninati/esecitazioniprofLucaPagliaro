import React from 'react';
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Button } from "./components/Button.jsx";

import "./styles/layout.css";

function App() {


  return (
    <>
      {/* Content projection - proiezione del contenuto */}
      <Header brand={{ name: "Edgemony" }} className="header" />

      <div className="container">
        <form style={{ marginTop: "100px" }}>
          <Button type="button">Sono un button</Button>
        </form>
      </div>

      <Main />

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
