import Badhon from "../../../../Assests/Images/badhon-color.png";
import HeroSection from './HeroSection'
import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
      <div className={Classes.heroSection}>
        <div className="row my-5" >
            <div className="col-lg-6" style={{marginTop: "-92px", marginBottom: "182px"}}>
              <img src={Badhon} alt="Badhon" className="img-fluid w-75" />
            </div>
            <div className="col-lg-6">
              <HeroSection />
            </div>
        </div>
      </div>
  )
}
