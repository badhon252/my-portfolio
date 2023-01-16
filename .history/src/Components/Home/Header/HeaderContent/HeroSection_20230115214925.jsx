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
                  <a href="https://www.facebook.com/badhon252" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.github.com/badhon252" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/khalidhossianbadhon/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  </div>
                  </div>
                  
            </div>

            <div className="col-md-6">
              <img src={Badhon} alt="Badhon" className={Classes.bannerImg} />
            </div>

        </div>
      </div>
    </div>

  );
}