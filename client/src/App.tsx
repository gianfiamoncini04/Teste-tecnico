import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { Header } from "./components/header";
import "./reset.css";
import "./lato-font.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
