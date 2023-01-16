import "./Skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SkillSet() {
  return (
      <ul className="skills">
                     <div className="skillSet">
                        <div className="skillSet__title__text">Technology & Tools</div>
                            <li> <FontAwesomeIcon icon="fa-solid fa-facebook"/> ReactJs</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>Css3</li>
                            <li>Scss</li>
                            <li>Bootstrap</li> 
                            <li>Git & GitHub</li>
                            <li>RestAPI</li>
                            <li>npm</li>
                            <li>Eslint</li>
                            
                    </div>
                    <div className="skillSet">
                        <div className="skillSet__title__text">Also Worked with</div>
                            <li>Firebase</li>
                            <li>Nodejs</li>
                            <li>ExpressJs</li>
                            <li>Webpack</li> 
                            <li>Redux</li>
                        
                    </div>
                    <div className="skillSet">
                    <div className="skillSet__title__text">Curently Learning</div>
                        <li>Redux</li>
                        <li>Firebase</li>
                        <li>TypeScript</li>
                        <li>NodeJs</li>
                    </div>
                        
                    </ul>

  )
}
