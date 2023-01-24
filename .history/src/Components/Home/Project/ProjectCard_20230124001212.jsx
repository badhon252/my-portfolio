
export default function ProjectCard(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/badhon252" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
