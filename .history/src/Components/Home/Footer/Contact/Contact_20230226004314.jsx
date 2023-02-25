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
          <div className="contactMoto">Let's create something together 🤙  </div>
          <div className="contactMail mx-5">
           <i class="fa-solid fa-envelope"></i>
            <a href="mailto:dev.khalidhossain@gmail.com">
              Mail me at <br />
              <span>dev.khalidhossain@gmail.com</span>
            </a>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contactForm">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Type your name here*"/>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your email here*"/>
                <div id="emailHelp" class="form-text">I'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <input type="Textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your messege here*"/>
              </div>
              <button type="submit" class="btn btn-primary">Send</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
