import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6 justify-content-center">
          <div className="contactInfo">
          <p>
            Let's chat. <br />
            Tell me about your project
          </p>
          <div className="contactMoto py-3">Let's create something together 🤙  </div>
          <div className="contactMail px-5 py-3 my-3">
           <i class="fa-solid fa-envelope"></i>
            <a href="mailto:dev.khalidhossain@gmail.com">
              Mail me at <br />
              <span>dev.khalidhossain@gmail.com</span>
            </a>
          </div>
          </div>
        </div>
        <div className="col-md-6 justify-content-center">
          <div className="contactForm card p-5">
          <h1 className="m-3">Send me a messege!</h1>
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Type your name here*"/>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your email here*"/>
                <div id="emailHelp" class="form-text">I'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send message</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
