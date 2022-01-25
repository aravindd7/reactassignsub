import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Home from './components/Home';

function App() {
  console.log("In app");
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/testimonial" element={<Testimonial />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
