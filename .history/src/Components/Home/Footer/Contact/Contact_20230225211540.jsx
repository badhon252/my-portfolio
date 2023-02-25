import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="contactInfo">
          <p>
            Let's chat. <br />
            Tell me about your project
          </p>
          <span>Let's create something together</span>
          <div className="contactMail">
            <a href="mailto:dev.khalidhossain@gmail.com"></a>
          </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
    </div>
  )
}
