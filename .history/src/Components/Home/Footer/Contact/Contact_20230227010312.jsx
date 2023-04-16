import "./Contact.css";
import gmail from "../../../../Assets/icons/gmail.svg";

export default function Contact() {
  return (
    <div id="contact" className="my-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="contactInfo">
              <p>
                Let's chat. <br />
                Tell me about your project
              </p>
              <div className="contactMoto py-3">
                Let's create something together 💼{" "}
              </div>
              <div className="contactMail px-3 py-3 my-3">
                <img src={gmail} alt="gmail" className="img-fluid me-3" />
                <a href="mailto:dev.khalidhossain@gmail.com">
                  Mail me at: <br />
                  <span>dev.khalidhossain@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="contactForm card p-5">
              <h1 className="m-3">Send me a messege!</h1>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Type your name here*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Type your email here*"
                  />
                  <div id="emailHelp" className="form-text pb-3 ">
                    I'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Tell me more about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onSubmit={(e) => console.log(e)}
                  className="btn footerBtn"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
