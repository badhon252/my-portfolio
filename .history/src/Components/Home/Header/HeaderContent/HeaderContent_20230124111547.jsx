import Badhon from "../../../../Assests/Images/badhon-color.png";
import HeroSection from './HeroSection'
// import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
      <div className="container">
        <div className="row my-5" >
            <div className="col-lg-6 mx-2">
              <img src={Badhon} alt="Badhon" className="img-fluid w-50" />
            </div>
            <div className="col-lg-6 py-5">
              <HeroSection />
            </div>
        </div>
      </div>
  )
}
