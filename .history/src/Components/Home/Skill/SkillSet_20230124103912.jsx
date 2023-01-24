import "./Skill.css"
import reactIcon from "../../../Assests/icons/react.svg"
import jsIcon from "../../../Assests/icons/javascript.svg"
import htmlIcon from "../../../Assests/icons/html-5.svg"
import cssIcon from "../../../Assests/icons/css3.svg"
import scssIcon from "../../../Assests/icons/sass.svg"
import bsIcon from "../../../Assests/icons/bootstrap.svg"
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
import webIcon from "../../../Assests/icons/web-design.svg"
import codeFileIcon from "../../../Assests/icons/code-file.svg"
import codeIcon from "../../../Assests/icons/code.svg"

export default function SkillSet() {
  return (
      <ul className="skills row">
                     <div className="skillSet">
                        <div className="skillSet__title__text">Technology & Tools</div>
                            <li> <img src={reactIcon} alt="icon"/> ReactJs</li>
                            <li><img src={jsIcon} alt="icon"/>JavaScript</li>
                            <li><img src={htmlIcon} alt="icon"/>HTML5</li>
                            <li><img src={cssIcon} alt="icon"/>Css3</li>
                            <li><img src={scssIcon} alt="icon"/>Scss</li>
                            <li><img src={bsIcon} alt="icon"/>Bootstrap</li> 
                            <li><img src={gitIcon} alt="icon"/>Git & GitHub</li>
                            <li><img src={apiIcon} alt="icon"/>RestAPI</li>
                            <li><img src={npmIcon} alt="icon"/>npm</li>
                            <li><img src={eslintIcon} alt="icon"/>Eslint</li>
                    </div>

                    <div className="skillSet">
                        <div className="skillSet__title__text">Also Worked with</div>
                            <li><img src={firebaseIcon} alt="icon"/>Firebase</li>
                            <li><img src={nodejsIcon} alt="icon"/>Nodejs</li>
                            <li><img src={expressjsIcon} alt="icon"/>ExpressJs</li>
                            <li><img src={webpackIcon} alt="icon"/>Webpack</li> 
                            <li><img src={reduxIcon} alt="icon"/>Redux</li>
                    </div>
                    
                    <div className="skillSet">
                         <div className="skillSet__title__text">My Services</div>
                            <li><img src={webIcon} alt="icon"/>Responsive Web Design</li>
                            <li><img src={codeFileIcon} alt="icon"/>Pixel Perfect Design</li>
                            <li><img src={codeIcon} alt="icon"/>Modern Web App Development</li>
                    </div>
                        
                    <div className="skillSet">
                        <div className="skillSet__title__text">Curently Learning</div>
                            <li><img src={reduxIcon} alt="icon"/>Redux</li>
                            <li><img src={firebaseIcon} alt="icon"/>Firebase</li>
                            <li><img src={typescriptIcon} alt="icon"/>TypeScript</li>
                            <li><img src={nodejsIcon} alt="icon"/>NodeJs</li>
                    </div>
                    
                    </ul>

  )
}
