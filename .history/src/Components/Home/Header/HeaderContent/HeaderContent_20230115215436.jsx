import Badhon from "../../../../Assests/Images/badhon.jpg";
import HeroSection from './HeroSection'
import Classes from "./HeroSection.module.css";

export default function HeaderContent() {
  return (
    <div>
      <div className={Classes.heroSection}>
        

          <div className="row">
            <HeroSection/>
            
            <div className="col-md-6">
              <img src={Badhon} alt="Badhon" className={Classes.bannerImg} />
            </div>

        </div>
      </div>
    </div>
  )
}
