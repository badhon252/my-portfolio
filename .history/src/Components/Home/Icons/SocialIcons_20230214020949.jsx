import "./SocialIcons.css"
export default function SocialIcons() {
  return (
    <div className='icons'> 
      <a href="mailto:dev.khalidhossain@gmail.com" target="_blank" rel="noreferrer">
         <img src="../../../Assests/icons/gmail.svg" alt="" className="img-fluid" />
      </a>
      <a href="https://www.linkedin.com/in/khalidhossainbadhon/" target="_blank" rel="noreferrer">
         <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/badhon252" target="_blank" rel="noreferrer">
         <i class="fa-brands fa-github"></i>
      </a>
    </div>
  )
}
