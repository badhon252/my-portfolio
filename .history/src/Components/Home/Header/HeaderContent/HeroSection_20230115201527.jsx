import Classes from "./Header.module.css";
import Badhon from "../../../../Assests/Images/badhon.jpg";

export default function HeroSection() {
  return (
    <div>
      <div className={Classes.heroSection}>
        <div className={Classes.heroText}>
          <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
          <p>
            A passionate <span>Frontend Developer </span> Based in Bangladesh.
          </p>
        </div>

        <div className={Classes.heroContent}>

          <div className="info">
             <div className="aboutMe">
               <h2 className={Classes.h2}>ABOUT ME</h2>
               <p>
                 A Computer Science & Engineering student with a <br /> constant
                 desire to grow, learn, and explore the <br /> world! I am
                 passionate about JavaScript and ReactJs.
               </p>
             </div>

           <div className="contactMe">
               <h2 className={Classes.h2}>CONTACT</h2>
             <p>dev.khalidhossain@gmail.com</p>
               <p>+88 01706107019</p>
             </div>

             <div className="services">
              <h2 className={Classes.h2}>SERVICES</h2>

               <p>Frontend Development</p>

               <p>Functional Website Design</p>

              <p>ReactApp Development</p>
            </div>
          </div>
          <div className={Classes.heroImage}>
            <img src='{Badhon}' alt="{Badhon}" className={Classes.imgFluid}/>
          </div>
          
          <div className={Classes.myWorks}> 
          <div className={Classes.myWorks}>
    //         <h2 className="h2">CLIENTS</h2>
    //         <p>2</p>
    //         <h2 className="h2">PROJECTS</h2>
    //         <p>100+</p>
    //         <h2 className="h2">EXPERIENCE</h2>
    //         <p>2+ Years</p>

    //         <h2 className="h2">SATISFACTION GUARANTEE</h2>
    //         <p>100%</p>
    //       </div>
          </div>


        </div>

      </div>
    </div>

    // <div className={Classes.heroSection}>
    //     <div className={Classes.heroText}>
    //       <h1 className={Classes.h1}>Khalid Hossain Badhon</h1>
    //       <p>
    //         A passionate <span>Frontend Developer </span> Based in Bangladesh.
    //       </p>
    //     </div>

    //     <div className={Classes.heroContent}>
    //      

    //       <img
    //         src={Badhon}
    //         className={Classes.img}
    //         alt="Khalid Hossain Badhon"
    //       />

    //       
    //     </div>
    //   </div>
  );
}