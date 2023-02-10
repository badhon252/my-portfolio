import "./Skill.css"
import SkillSet from "./SkillSet";
const SkillEfficiency = () => {
    return (
       <div id="skill" className="container">
                <h2 className="skillSet__title"> <span>My Skills Set</span> </h2>
                <div className="skillSet__title__line">
                   
                    <div className="skillSet__title__line__inner">
                        I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience. <br /> 
                         I am adaptable and able to learn newtechnologies as needed.
                    </div>
                </div>
                  <SkillSet/>
       </div>
    );
}

export default SkillEfficiency;
