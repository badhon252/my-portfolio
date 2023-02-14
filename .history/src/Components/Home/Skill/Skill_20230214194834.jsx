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
                    I'm a experienced Frontend Web Application developer with more than 2 years of hands on experience. <br />
                    I am adaptable and able to learn newtechnologies as needed.
                </div>
            </div>
            <SkillSet/>
        </div>
       </section>
    );
}

export default SkillEfficiency;
