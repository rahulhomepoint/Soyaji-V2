import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Benefits } from "./Components/Benefits";
import { AboutProduct } from "./Components/AboutProduct";
import { AboutCompany } from "./Components/AboutCompany";
import { FutureProducts } from "./Components/FutureProducts";
import { PopulerProducts } from "./Components/PopulerProducts";
import { PopulerProducts_1 } from "./Components/PopulerProducts_1";
import { Franchise } from "./Components/Franchise";
import { Subscribe } from "./Components/Subscribe";
import { Footer } from "./Components/Footer";
import { PatnerWithus } from "./Components/PatnerWithUs";
import { ContactUs } from "./Components/ContactUs";

function App() {
  return (
    <div className="">
      <Hero />
      <Benefits />
      <AboutProduct />
      <AboutCompany />
      <FutureProducts />
      <PopulerProducts />
      <PopulerProducts_1 />
      <Franchise />
      <PatnerWithus />
      <ContactUs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
