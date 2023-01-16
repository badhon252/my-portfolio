import "./Skill.css"
const SkillEfficiency = () => {
    return (
       <div id="skill" className="skillSet container">
            <div className="skillSet__title">
                <h2>My Skills Set</h2>
            </div>
                <div className="skillSet__title__line">
                     I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience.
                   <span>  I am adaptable and able to learn newtechnologies as needed.</span>
                </div>

                    <ul className="skills">
                     <div>
                        <div className="skillSet__title__text">Technology & Tools</div>
                            <li>ReactJs</li>
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
                    <div>
                        <div className="skillSet__title__text">Also Worked with</div>
                            <li>Webpack</li> 
                            <li>Firebase</li>
                            <li>nodejs</li>
                            <li>ExpressJs</li>
                            <li></li>
                        
                        </div>
                    <div>
                        <div className="skillSet__title__text">Curently Learning</div>
                            <li>Firebase</li>
                            <li>TypeScript</li>
                            <li>NodeJs</li>
                            <li>DevOps</li>
                        </div>
                        
                    </ul>

          
       </div>
    );
}

export default SkillEfficiency;
