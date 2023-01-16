import Badhon from "../../../../Assests/Images/badhon.jpg";
import HeroSection from './HeroSection'
import Classes from "./HeaderContent.module.css";

export default function HeaderContent() {
  return (
    <div>
      <div className={Classes.heroSection}>
          <div className={Classes.row}>
          
            <HeroSection/>
           
            <div className="col-md-6">
              <h1>image</h1>
              {/* <img src={Badhon} alt="Badhon" className={Classes.bannerImg} /> */}
            </div>

        </div>
      </div>
    </div>
  )
}
