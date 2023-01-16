import "./Skill.css"
import reactIcon from "../../../Assests/icons/reactV1.svg"
import jsIcon from "../../../Assests/icons/javascript.svg"
import htmlIcon from "../../../Assests/icons/html-5.svg"
import cssIcon from "../../../Assests/icons/css3.svg"
import scssIcon from "../../../Assests/icons/sass.svg"
import bsIcon from "../../../Assests/icons/css3.svg"
import gitIcon from "../../../Assests/icons/git.svg"
import apiIcon from "../../../Assests/icons/rest-api.svg"
import npmIcon from "../../../Assests/icons/npmV1.svg"
import eslintIcon from "../../../Assests/icons/eslint.svg"
import firebaseIcon from "../../../Assests/icons/firebase.svg"
import nodejsIcon from "../../../Assests/icons/node-js.svg"
import expressjsIcon from "../../../Assests/icons/express.svg"
import webpackIcon from "../../../Assests/icons/webpack.svg"
import reduxIcon from "../../../Assests/icons/redux.svg"
import typescriptIcon from "../../../Assests/icons/typescript.svg"

export default function SkillSet() {
  return (
      <ul className="skills">
                     <div className="skillSet">
                        <div className="skillSet__title__text">Technology & Tools</div>
                            <li> <img src={reactIcon} alt="React-icon"/> ReactJs</li>
                            <li><img src={jsIcon} alt="React-icon"/>JavaScript</li>
                            <li><img src={htmlIcon} alt="React-icon"/>HTML5</li>
                            <li><img src={cssIcon} alt="React-icon"/>Css3</li>
                            <li><img src={scssIcon} alt="React-icon"/>Scss</li>
                            <li><img src={bsIcon} alt="icon"/>Bootstrap</li> 
                            <li><img src={gitIcon} alt="React-icon"/>Git & GitHub</li>
                            <li><img src={apiIcon} alt="React-icon"/>RestAPI</li>
                            <li><img src={npmIcon} alt="React-icon"/>npm</li>
                            <li><img src={eslintIcon} alt="React-icon"/>Eslint</li>
                            
                    </div>
                    <div className="skillSet">
                        <div className="skillSet__title__text">Also Worked with</div>
                            <li><img src={firebaseIcon} alt="React-icon"/>Firebase</li>
                            <li><img src={nodejsIcon} alt="React-icon"/>Nodejs</li>
                            <li><img src={expressjsIcon} alt="React-icon"/>ExpressJs</li>
                            <li><img src={webpackIcon} alt="React-icon"/>Webpack</li> 
                            <li><img src={reduxIcon} alt="React-icon"/>Redux</li>
                        
                    </div>
                    <div className="skillSet">
                    <div className="skillSet__title__text">Curently Learning</div>
                        <li><img src={reduxIcon} alt="React-icon"/>Redux</li>
                        <li><img src={firebaseIcon} alt="React-icon"/>Firebase</li>
                        <li><img src={typescriptIcon} alt="icon"/>TypeScript</li>
                        <li><img src={nodejsIcon} alt="React-icon"/>NodeJs</li>
                    </div>
                        
                    </ul>

  )
}
