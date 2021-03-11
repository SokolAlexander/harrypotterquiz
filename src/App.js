import logo from "./logo.svg";
import "./App.css";
import Router from "./components/Router";
import Map from "./components/Map";
import './speech/artyom';

function App() {
  if (navigator.userAgent.indexOf("Chrome") === -1) {
    return (
      <div className="App">
        <h3 style={{ color: "white" }}>Нужен Chrome :(</h3>
      </div>
    );
  }

  if (window.screen.width < 768) {
    return (
      <div className="App">
        <h3 style={{ color: "white" }}>Тесновато на мелком экране</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <Map />
      <Router />
    </div>
  );
}

export default App;
