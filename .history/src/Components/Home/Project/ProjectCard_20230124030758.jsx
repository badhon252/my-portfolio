import CardImgLink from "./Card_img__link"
import "./Projects.css"

export default function ProjectCard(props) {

  function stacks(){
    return props.stack.map((item, index) => {
      return <span className="stack" key={index}>#{item},</span>
    })
  }

  return (
    <div className="card" id="card">
          <div className="card-img">
            <a href={props.img}>
              <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
            </a>
            
          </div> 
        <div className="card-body">
          <div className="stacks">
             {stacks()}
          </div>
       
            <h5 className="card-title my-2">{props.title}</h5>
            <span className="card-text">{props.text}</span>
            
        </div>
          <CardImgLink preview={props.preview} link={props.link}/>
    </div>
  )
}
