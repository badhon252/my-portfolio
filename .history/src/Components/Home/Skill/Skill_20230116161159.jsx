import "./Skill.css"
const SkillEfficiency = () => {
    return (
       <div id="skill" className="container">
            <div className="skillSet__title">
                <h2>My Skills Set</h2>
            </div>
                <div className="skillSet__title__line">
                    <div className="skillSet__title__line__inner">I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience. <span> I am adaptable and able to learn newtechnologies as needed.</span></div>
                   
                </div>

                    <ul className="skills">
                     <div className="skillSet">
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
                        <li>DevOps</li>
                    </div>
                        
                    </ul>

          
       </div>
    );
}

export default SkillEfficiency;
