import  Classes from "./Skill.module.css"
const SkillEfficiency = () => {
    return (
       <div id="skill" className="skillSet container">
            <div className="skillSet__title">
                <h2>My Skills Set</h2>

                <div className="skillSet__title__line">
                     I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience.
                   <span>  I am adaptable and able to learn newtechnologies as needed.</span>
                </div>
                <div className="skillSet__title__text">
                    <div className={Classes.tools}'>Front-end Development</div>
                    
                </div>
            </div>
       </div>
    );
}

export default SkillEfficiency;
