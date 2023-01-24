import Badhon from "../../../../Assests/Images/badhon-color.png";
import HeroSection from './HeroSection'
import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
      <div className={Classes.heroSection}>
        <div className="row my-5" >
            <div className="col-md-6">
              <HeroSection />
            </div>
            <div className="col-md-6">
              <img src={Badhon} alt="Badhon" className="img-fluid" />
            </div>

        </div>
      </div>
  )
}
