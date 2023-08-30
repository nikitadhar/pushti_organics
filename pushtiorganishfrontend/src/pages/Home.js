import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Packedcart from "../components/packedcart/Packedcart";
import Reviews from "../components/reviews/Reviews";
import VegitableCart from "../components/vegitablecart/VegitableCart";
import Catelog from "../components/catelog/Catelog";
import SpiceCart from "../components/spicecart/SpiceCart";
import GheeCart from "../components/gheecart/GheeCart";
import Certification from "../components/certification/Certification";
import Blog from "../components/blog/Blog";

export default function Home() {
  return (
    <div>
        <Header/>
  <VegitableCart/>
    <Packedcart/>
    <Reviews/>
    <Catelog/>
    <SpiceCart/>
     <GheeCart/>
     <Certification/>
     <Blog/>
     <Footer/>
    </div>
  )
}
