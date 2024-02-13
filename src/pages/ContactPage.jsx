import { useState } from "react";
import emailjs from "@emailjs/browser";
import sadDog from "../assets/images/puppy-waiting.jpg";
import "./ContactPage.css"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs // this function returns a promise
      .sendForm(
        // function from the library "emailjs"
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setIsSubmitting(false);
      })
      .catch((err) => {
        setIsSubmitting(false);
        setError(err);
      });

    e.target.reset(); // Clears the form after sending the email
  };

  if (isSubmitting) return <div> Loading...</div>; // Show the message "loading" when the email is being sent
  if (error) return (
    <>
    <h1>Woofsy daisy, something went wrong...please try again.</h1>
      <img className="sad-dog" src={sadDog} alt="sad dog" />
    </>
  );

  return (
    <div className="contact-page">
    <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name:</label>
        <input
          type="text"
          name="user_name"
          placeholder="enter your name"
          pattern="[A-Za-z\s]{1,100}"
          title="Please enter a valid name (up to 100 characters, letters and spaces only)"
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          placeholder="123@gmail.com"
          pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address (e.g., 123@gmail.com)"
          required
        />
        <label>Mobile:</label>
        <input
          type="tel"
          name="user_tel"
          placeholder="enter your phone number"
          pattern="0[0-9]{11}"
          title="Please enter a German phone number with 12 digits starting with 0 (e.g., 015221341410)"
          required
        />
        <label>Message:</label>
        <textarea
          className="contact-textarea"
          rows={10}
          name="message"
          required
        />
        <input
          className="contact-submit-button"
          type="submit"
          value="Send"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}
