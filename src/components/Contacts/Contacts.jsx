import "./Contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from "react";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1jd5ue",
        "template_p2er3ri",
        form.current,
        "7PiuQr9RsOcIZHHh6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>Abuayubabduselam@gmail.com</h5>
            <a href="mailto:Abuayubabduselam@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaTelegram className="contact_option_icon" />
            <h4>Telegram</h4>
            <h5>Abuayub</h5>
            <a href="https://t.me/Abuayub90" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>0923500914</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+251923500914"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
