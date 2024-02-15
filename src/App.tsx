import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
