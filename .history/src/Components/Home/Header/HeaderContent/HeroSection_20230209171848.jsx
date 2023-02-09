import Classes from "./Header.module.css";
import "./HeaderContent.css"
import AnimatedText from 'react-animated-text-content';

export default function HeroSection() {
  return (
    <div className="heroSection">
          <h2 className={Classes.h2}>Hi, I'm</h2>
          <h1 className={Classes.myName}>Khalid Hossain.</h1>
          <div className={Classes.bio}>
            I’m a <span>Frontend Developer with a constant desire to grow, learn, and explore the world!</span> Passionate about crafting intuitive and engaging user experiences, 
            I am always looking for new challenges and opportunities to grow as an engineer.
          </div>
         
          <a className={Classes.resume} href="https://drive.google.com/file/d/1dNWfd7X8CYs_9THDZo58HHKVKzD8WfeY/view?usp=share_link" target="_blank" rel="noreferrer">
              See my Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          
    </div>
  );
}