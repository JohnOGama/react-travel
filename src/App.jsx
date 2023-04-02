import Hero from "./components/Hero";
import NavbarHeader from "./components/NavbarHeader";
import Packages from "./components/Packages";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Footer3 from "./components/Footer3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarHeader />
      <Hero />
      <Packages />
      <PhotoGallery />
      <Footer />
      <Footer2 />
      <Footer3 />
    </>
  );
}

export default App;
