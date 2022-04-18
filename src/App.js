import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Blog,
  Checkout,
  Error404,
  Home,
  Login,
  PhotoGallery,
  Signup,
} from "./pages/index.pages";
import RequireAuth from "./requireAuth/RequireAuth";
import { Footer, Navbar } from "./shared";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
