import codingGif from "../../../Assests/Images/coding.gif"

const AboutMe = () => {
    return (
        <div className='container'>
            <h1>AboutMe</h1>
            <div className="about-me">
                <div className="row">
                    <div className="col-md-8">
                            <p>As a software engineer, I possess strong problem-solving skills, attention to detail, and excellent communication skills.
                            </p>
                            <p>I am adaptable and able to learn new technologies as needed. </p>
                            <p> My time management skills and passion for learning keep me up-to-date in the constantly evolving field of software engineering.</p>
                            <p>I Have 2+ years of experience in web design, And 1.5+ years of JavaScript & ReactJs practical hands-on experience.</p>
                            <p> I’m confident in my ability to approach complex problems with logic and deliver reliable solutions.</p>
                            <p>I think i’m a Google(search) power user.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={codingGif} alt="Software engineer's Avater" border="0" />
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default AboutMe;
