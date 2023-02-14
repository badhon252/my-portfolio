import "./Skill.css"
import SkillSet from "./SkillSet";
const SkillEfficiency = () => {
    return (
       <section id="skill" >
        <div className="container">
            <div className="d-flex justify-content-center">
                    <h1 className="skillSet__title"> My Skills Set </h1>
            </div>
            <div className="skillSet__title__line">
                <div className="skillSet__title__line__inner">
                    I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience. <br /> 
                    <span> I am adaptable and able to learn newtechnologies as needed.</span>
                </div>
            </div>
            <SkillSet/>
        </div>
       </section>
    );
}

export default SkillEfficiency;
