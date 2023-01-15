import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Projects from "./Project/Projects";
import Skill from "./Skill/Skill";
import Classes from "./Home.module.css"


export default function Home() {
  return (
    <div>
        <Header className={Classes.flexRow} />
        <Skill/>
        <Projects/>
        <AboutMe/>
        <Footer/>

    </div>
  )
}
