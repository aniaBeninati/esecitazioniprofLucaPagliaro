import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h1>CB10</h1>

          <div className="card">
            <button onClick={() => console.log("ciao")}>Click me!</button>
          </div>
        </div>
      </main>
      <Main />
      <footer className="footer"><Footer /></footer>
    </>
  );
}


export default App;
