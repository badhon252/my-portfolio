import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import Projects from "./Project/Projects";
import Skill from "./Skill/Skill";


export default function Home() {
  return (
    <div>
        <Header/>
        <Skill/>
        <Projects/>
        <AboutMe/>

    </div>
  )
}
