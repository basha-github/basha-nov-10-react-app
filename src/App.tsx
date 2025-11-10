
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./basha/Home";
import AboutUs from "./basha/AboutUs";
import Contact from "./basha/Contact";
import Movies from "./basha/Movies";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
