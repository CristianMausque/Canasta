import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="imgs">
        <img src='../public/gifcanasta.gif' className="gif"></img>
        <div className="slogan">
          <p>Attitude,</p>
          <p>TeamWork:</p>
          <p>"The difference"</p>
        </div>
      </div>
    </>
  );
}

export default App;
