import React from "react";
import "./ContactForm.css"
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_7qfngxm",
        e.target,
        "user_DiLDlKOfWYUYnRwvQfszO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
  
    <form className="contact-form" onSubmit={sendEmail}>
      <TextField
        className="inputs"
        label="Name"
        margin="dense"
        name="name"
        required="true"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        label="Email"
        className="inputs"
        name="email"
        margin="dense"
        required="true"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        label="Message"
        name="message"
        className="inputs message-input"
        required="true"
        margin="dense"
        multiline
        rows={4}
        placeholder="Type a Message"
        variant="outlined"
      />
      <Button
      className="submit-button"
        size="small"
        type="submit"
        value="Send"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
