import { Routes, Route } from "react-router-dom";

// custom components:
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// pages:
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
