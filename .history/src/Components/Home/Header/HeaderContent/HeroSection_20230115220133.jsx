import Classes from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div>
          <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
          <p>
            A passionate <span>Frontend Developer </span> Based in Bangladesh.
          </p>

          <div className={Classes.socialIcons}>
              <a href="https://www.facebook.com/badhon252" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/khalidhossianbadhon/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.github.com/badhon252" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>

          </div>

    </div>
           
  

  );
}