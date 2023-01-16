import Classes from "./Header.module.css";


export default function HeroSection({col}) {
  return (
    <div className={col}>
          <h1 className={Classes.h1}>Khalid Hossain</h1>
          <p>
            A passionate <span>Frontend Developer </span> From in Bangladesh.
          </p>
    </div>
  );
}