import Classes from "./HeroSection.module.css";
import Badhon from "../../../../Assests/Images/badhon.jpg";

export default function HeroSection() {
  return (
    <div>
      <div className={Classes.heroSection}>
        <div className={Classes.heroText}>
          <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
          <p>
            A passionate <span>Frontend Developer </span> Based in Bangladesh.
          </p>
        </div>

          <div className="row">
            <div className="col-md-6">
              <div className={Classes.heroText}>
                <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
                <p>
                  A passionate <span>Frontend Developer </span> Based in Bangladesh.
                </p>

                <div className={Classes.socialIcons}>
                  <a href="https://www.facebook.com/khalid.hossain.581" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/khalid-hossain-badhon-0b1b1b1b9/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
            </div>
            <div className="col-md-6">
              <img src={Badhon} alt="Badhon" className={Classes.bannerImg} />
            </div>

        </div>
      </div>
    </div>

  );
}