import githubIcon from "../../../Assests/icons/github.png"

export default function Ccard_img__link() {
  return (
     <div className="card_img__link">
              <a href={props.link} className="btn btn-sm btn-dark d-block mt-4">
                <img src={githubIcon} alt="" className="img-fluid" /></a>
              
              <img src="⤴" alt="" className="img-fluid" />
    </div>
  )
}
