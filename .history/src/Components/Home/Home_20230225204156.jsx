import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Projects from "./Project/Projects";
import Skill from "./Skill/Skill";


export default function Home() {
  return (
    <div id="home">
        <Header />
        <Skill/>
        <Projects/>
        <AboutMe/>
        <Footer/>

    </div>
  )
}
