import "./Skill.css"
import SkillSet from "./SkillSet";
const SkillEfficiency = () => {
    return (
       <section id="skill" className="container">
                 <h2 className="skillSet__title"> <span>
                     My Skills Set 
                    </span></h2>
                <div className="skillSet__title__line">
                    <div className="skillSet__title__line__inner">
                        I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience. <br /> 
                        <span> I am adaptable and able to learn newtechnologies as needed.</span>
                    </div>
                </div>
                  <SkillSet/>
       </section>
    );
}

export default SkillEfficiency;
