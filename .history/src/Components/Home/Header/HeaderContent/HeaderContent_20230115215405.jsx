import Badhon from "../../../../Assests/Images/badhon.jpg";
import HeroSection from './HeroSection'
import Classes from "./HeroSection.module.css";

export default function HeaderContent() {
  return (
    <div><div className={Classes.heroSection}>
        <div className={Classes.heroText}>
          <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
          <p>
            A passionate <span>Frontend Developer </span> Based in Bangladesh.
          </p>
        </div>

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
