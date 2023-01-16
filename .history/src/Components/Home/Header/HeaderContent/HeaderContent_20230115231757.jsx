import Badhon from "../../../../Assests/Images/badhon-color.jpg";
import HeroSection from './HeroSection'
import Classes from "./Header.module.css";

export default function HeaderContent() {
  return (
    <div>
      <div className={Classes.heroSection}>
          <div className={Classes.row}>
            <HeroSection col={Classes.col}/>
            <div className={Classes.col}>
              <img src={Badhon} alt="Badhon" className={Classes.heroImage} />
            </div>

        </div>
      </div>
    </div>
  )
}
