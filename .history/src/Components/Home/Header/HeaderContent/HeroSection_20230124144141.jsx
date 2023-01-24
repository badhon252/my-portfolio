import Classes from "./Header.module.css";
import "./HeaderContent.css"

export default function HeroSection() {
  return (
    <div className="heroSection">
          
          <h1 className="name">Khalid Hossain. <br /><h2 className="badge">Hi, I'm</h2></h1>
          <p>
            I’m a <span>Frontend Developer with a constant desire to grow, learn, and explore the world!</span> Passionate about crafting intuitive and engaging user experiences, 
            I am always looking for new challenges and opportunities to grow as an engineer.
          </p>
         
          <a className={Classes.resume} href="https://drive.google.com/file/d/1dNWfd7X8CYs_9THDZo58HHKVKzD8WfeY/view?usp=share_link" target="_blank" rel="noreferrer">
              See my Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          
    </div>
  );
}