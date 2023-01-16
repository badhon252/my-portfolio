import "./Skill.css"
const SkillEfficiency = () => {
    return (
       <div id="skill" className="skillSet container">
            <div className="skillSet__title">
                <h2>My Skills Set</h2>

                <div className="skillSet__title__line">
                     I Have 2+ years of web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience.
                   <span>  I am adaptable and able to learn newtechnologies as needed.</span>
                </div>

                    <ul className="skills">
                        <div>
                        <div className="skillSet__title__text">Tools & Technology</div>
                        <li>ReactJs</li>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                        </div>
                    </ul>

            </div>
       </div>
    );
}

export default SkillEfficiency;
