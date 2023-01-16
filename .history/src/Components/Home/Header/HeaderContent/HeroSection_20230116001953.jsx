import Classes from "./Header.module.css";


export default function HeroSection({col}) {
  return (
    <div className={col}>
          <h1 className={Classes.h1}>Khalid Hossain</h1>
          <p>
            I’m a <span>Frontend Developer with a constant desire to grow, learn, and explore the world!</span> Passionate about crafting intuitive and engaging user experiences, 
            I am always looking for new challenges and opportunities to grow as an engineer.
          </p>
          <a href="#" rel="noreferr">Resume</a>
    </div>
  );
}