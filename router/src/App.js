import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Abaut from "./Abaut.js";
import IndexPage from "./IndexPage.js";
import NotFound from "./NotFound.js";

const lang = window.navigator.language.substring(0, 2)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <span>     </span>
          <Link to={`/abaut?ln=${lang}`}>Abaut</Link>
        </header>
        <Routes>
          <Route path={`/`} element={<IndexPage lng={lang} />} />
          <Route path="/abaut" element={<Abaut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
