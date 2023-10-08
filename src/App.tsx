import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProductListing from "./components/ProductListing/ProductListing";
function App() {
  return (
    <Router>
      <Header /> {/* Regardless of the page it is on, the Header is always present */}
      <Routes>
        <Route path="/product/:productId" element={<ProductListing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
