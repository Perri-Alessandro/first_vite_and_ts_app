import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import Details from "../src/components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
