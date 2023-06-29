import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products";
import Home from "./components/home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Nav from "./components/nav";
import Notfound from "./components/Notfounds";
import Noida from "./components/child/Noida";
import Mumbai from "./components/child/Mumbai";
import Bengaluru from "./components/child/Bengaluru";
import Category from "./components/category";
import ValidationOne from "./components/ValidationOne";
import Mymemo from "./components/Mymemo";
import Myref from "./components/Myref";

export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />}>
              <Route path="Noida" element={<Noida />} />
              <Route path="Mumbai" element={<Mumbai />} />
              <Route path="Bengaluru" element={<Bengaluru />} />
            </Route>

            <Route path="Counter" element={<Counter />} />
            <Route path="Myref" element={<Myref />} />
            <Route path="Mymemo" element={<Mymemo />} />
            <Route path="Valione" element={<ValidationOne />} />
            <Route path="Products" element={<Products />} />
            <Route path="category/:cname" element={<Category />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </section>
      </Router>
    </main>
  );
}
