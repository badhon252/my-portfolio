import codingGif from "../../../Assests/Images/programming.gif"
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className='container' id="about">
            <h2 className="aboutMe_titile">AboutMe</h2>
            <div className="about-me">
                <div className="row">
                    <div className="col-md-8">

                        <div className="params my-3">
                            <p>I’m a Frontend Developer with a constant desire to grow, learn, and explore the world! Passionate about crafting intuitive and engaging user experiences, I am always looking for new challenges and opportunities to grow as an engineer.</p>
                            <p>As a software engineer, I possess strong problem-solving skills, attention to detail, and excellent communication skills.
                            </p>
                            <p>I am adaptable and able to learn new technologies as needed. </p>
                            <p> My time management skills and passion for learning keep me up-to-date in the constantly evolving field of software engineering.</p>
                            <p>I Have 2+ years of experience in web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience.</p>
                            <p> I’m confident in my ability to approach complex problems with logic and deliver reliable solutions.</p>
                            <p>I think i’m a Google(search) power user.</p>
                        </div>

                        <div className="homeTown">
                            <h3 className="homeTown_title">HOME TOWN:</h3>
                            <p>Barishal, Bangladesh</p>
                        </div>

                        <div id="edu" className="my-5">
                        <h3 className="edu_title">EDUCATION:</h3>
                            <h4 className="my-3">Currently pursuing Bachelor's Degree in Computer Science & Engineering <br />
                                <span> - Global University Bangladesh, Bangladesh | (Sep-2019)-(Aug-2023)</span> 
                            </h4>
                            <h4 className="my-3">Higher Secondary Certificate (HSC) <br />
                                <span> - Govt. Bakergonj College, Barishal, Bangladesh</span> 
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={codingGif} alt="Software engineer's Avater" />
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default AboutMe;
