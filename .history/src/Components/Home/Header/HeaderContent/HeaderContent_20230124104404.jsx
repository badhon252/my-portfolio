import Badhon from "../../../../Assests/Images/badhon-color.png";
import HeroSection from './HeroSection'
import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
    <div>
      <div className={Classes.heroSection}>
          <div className="row">
              <HeroSection className="col-md-6"/>
              <div className="col-md-6">
                <img src={Badhon} alt="Badhon" className={Classes.heroImage} />
              </div>

        </div>
      </div>
    </div>
  )
}
