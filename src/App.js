import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
