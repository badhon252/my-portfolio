import Badhon from "../../../../Assests/Images/badhon-color.png";
import HeroSection from './HeroSection'
// import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
      <div className="container">
        <div className="row my-5" >
            <div className="col-md-4">
              <img src={Badhon} alt="Badhon" className="img-fluid w-100 px-2" />
            </div>
            <div className="col-md-8 py-5 d-flex flex-column ">
              <HeroSection />
            </div>
        </div>
      </div>
  )
}
