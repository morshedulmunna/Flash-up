import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Blog,
  Home,
  Login,
  PhotoGallery,
  Signup,
} from "./pages/index.pages";
import { Footer, Navbar } from "./shared";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
