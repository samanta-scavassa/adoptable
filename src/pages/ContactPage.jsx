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

  if (isSubmitting) return <div> loading...</div>; // Show the message "loading" when the email is being sent
  if (error) return (
    <>
    <h1>Woofsy daisy, something went wrong...please try again.</h1>
      <img className="sad-dog" src={sadDog} alt="sad dog" />
    </>
  );

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="enter your name"
          pattern="[A-Za-z\s]{1,100}"
          title="Please enter a valid name (up to 100 characters, letters and spaces only)"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="123@gmail.com"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
          required
        />
        <label>Mobile</label>
        <input
          type="tel"
          name="user_tel"
          placeholder="enter your phone number"
          pattern="0[1-9][0-9]{1,4}[0-9]{6,10}"
          title="Please enter a valid phone number (e.g., 015221341410)"
          required
        />
        <label>Message</label>
        <textarea
          className="contact-textarea"
          rows={10}
          name="message"
          placeholder="Please briefly explain why you want to adopt this dog or cat."
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
