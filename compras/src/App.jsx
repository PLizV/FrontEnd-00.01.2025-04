// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartOffcanvas from "./components/CartOffcanvas";
import FabCart from "./components/FabCart";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container py-5">
                <Categories />
                <Featured />
                <Benefits />
                <Testimonials />
                <Newsletter />
              </div>
            </>
          }
        />
        <Route path="/productos" element={<ProductsPage />} />
      </Routes>

      <Footer />
      <CartOffcanvas />
      <FabCart />
    </>
  );
}


