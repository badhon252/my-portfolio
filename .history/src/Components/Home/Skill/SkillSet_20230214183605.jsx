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
        <div className="skills row">
                     <ul className="skillSet col-md-3">
                        <div className="skillSet__title__text"> <h2>Technology & Tools</h2> </div>
                            <li> <img src={reactIcon} alt="ReactJs icon"/> ReactJs</li>
                            <li><img src={jsIcon} alt="JavaScript icon"/>JavaScript</li>
                            <li><img src={htmlIcon} alt="HTML5 icon"/>HTML5</li>
                            <li><img src={cssIcon} alt="Css3 icon"/>Css3</li>
                            <li><img src={scssIcon} alt="Scss icon"/>Scss</li>
                            <li><img src={bsIcon} alt="Bootstrap icon"/>Bootstrap</li> 
                            <li><img src={gitIcon} alt="Git & GitHub icon"/>Git & GitHub</li>
                            <li><img src={apiIcon} alt="RestAPI icon"/>RestAPI</li>
                            <li><img src={npmIcon} alt="npm icon"/>npm</li>
                            <li><img src={eslintIcon} alt="Eslint icon"/>Eslint</li>
                    </ul>

                    <ul className="skillSet col-md-3">
                        <div className="skillSet__title__text"><h2>Also Worked with</h2></div>
                            <li><img src={firebaseIcon} alt="Firebase icon"/>Firebase</li>
                            <li><img src={nodejsIcon} alt="Nodejs icon"/>Nodejs</li>
                            <li><img src={expressjsIcon} alt="ExpressJs icon"/>ExpressJs</li>
                            <li><img src={webpackIcon} alt="Webpack icon"/>Webpack</li> 
                            <li><img src={reduxIcon} alt="Redux icon"/>Redux</li>
                    </ul>
                    
                    <div className="skillSet col-md-3">
                         <div className="skillSet__title__text"><h2>My Services</h2></div>
                            <li><img src={webIcon} alt="Responsive Web Design"/>Responsive Web Design</li>
                            <li><img src={codeFileIcon} alt="Pixel Perfect Design"/>Pixel Perfect Design</li>
                            <li><img src={codeIcon} alt="Modern Web App Development"/>Modern Web App Development</li>
                    </div>
                        
                    <ul className="skillSet col-md-3">
                        <div className="skillSet__title__text"><h2> Curently Learning</h2> </div>
                            <li><img src={reduxIcon} alt="Redux icon"/>Redux</li>
                            <li><img src={firebaseIcon} alt="Firebase icon"/>Firebase</li>
                            <li><img src={typescriptIcon} alt="TypeScript icon"/>TypeScript</li>
                            <li><img src={nodejsIcon} alt="NodeJs icon"/>NodeJs</li>
                    </ul>
                    
        </div>

  )
}
