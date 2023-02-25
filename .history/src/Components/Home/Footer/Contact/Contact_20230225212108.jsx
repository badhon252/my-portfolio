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
          <span>Let's create something together 🤙  </span>
          <div className="contactMail">
            <a href="mailto:dev.khalidhossain@gmail.com">
              Mail me at <br />
              <span>dev.khalidhossain@gmail.com</span>
            </a>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contactForm">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" name="" id="" value="checkedValue" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
