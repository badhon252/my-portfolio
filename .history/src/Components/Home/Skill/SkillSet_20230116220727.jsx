import "./Skill.css"
import reactIcon from "../../../Assests/icons/reactV1.svg"

export default function SkillSet() {
  return (
      <ul className="skills">
                     <div className="skillSet">
                        <div className="skillSet__title__text">Technology & Tools</div>
                            <li> <img src={reactIcon} alt="React-icon"/> ReactJs</li>
                            <li><img src={reactIcon} alt="React-icon"/>JavaScript</li>
                            <li><img src={reactIcon} alt="React-icon"/>HTML5</li>
                            <li><img src={reactIcon} alt="React-icon"/>Css3</li>
                            <li><img src={reactIcon} alt="React-icon"/>Scss</li>
                            <li><img src={reactIcon} alt="React-icon"/><img src="https://img.icons8.com/color/48/null/bootstrap.png"/>Bootstrap</li> 
                            <li><img src={reactIcon} alt="React-icon"/>Git & GitHub</li>
                            <li><img src={reactIcon} alt="React-icon"/>RestAPI</li>
                            <li><img src={reactIcon} alt="React-icon"/>npm</li>
                            <li><img src={reactIcon} alt="React-icon"/>Eslint</li>
                            
                    </div>
                    <div className="skillSet">
                        <div className="skillSet__title__text">Also Worked with</div>
                            <li><img src={reactIcon} alt="React-icon"/>Firebase</li>
                            <li><img src={reactIcon} alt="React-icon"/>Nodejs</li>
                            <li><img src={reactIcon} alt="React-icon"/>ExpressJs</li>
                            <li><img src={reactIcon} alt="React-icon"/>Webpack</li> 
                            <li><img src={reactIcon} alt="React-icon"/>Redux</li>
                        
                    </div>
                    <div className="skillSet">
                    <div className="skillSet__title__text">Curently Learning</div>
                        <li><img src={reactIcon} alt="React-icon"/>Redux</li>
                        <li><img src={reactIcon} alt="React-icon"/>Firebase</li>
                        <li><img src={reactIcon} alt="React-icon"/>TypeScript</li>
                        <li><img src={reactIcon} alt="React-icon"/>NodeJs</li>
                    </div>
                        
                    </ul>

  )
}
