"use client";

import Styling from "./contactForm.module.css";
import { useState } from "react";

export default function contactForm({ openPopup }) {
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    console.log(msg);

    if (success) {
      openPopup();
      setFullName("");
      setMessage("");
      setEmail("");
      console.log("success");
    }
  };

  return (
    <section id={Styling.page}>
      <form onSubmit={handleSubmit} id={Styling.form}>
        <div className={Styling.div}>
          <label htmlFor="name" className={Styling.label}>
            Full Name
          </label>
          <input
            type="text"
            id={Styling.name}
            placeholder="Alex"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          {success ? (
            <div></div>
          ) : (
            <div className={Styling.error}>{error.fullname}</div>
          )}
        </div>

        <div className={Styling.div}>
          <label htmlFor="email" className={Styling.label}>
            Email
          </label>
          <input
            type="text"
            id={Styling.email}
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {success ? (
            <div></div>
          ) : (
            <div className={Styling.error}>{error.email}</div>
          )}
        </div>

        <div className={Styling.div}>
          <label htmlFor="message" className={Styling.label}>
            Your Message
          </label>
          <textarea
            id={Styling.message}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {success ? (
            <div></div>
          ) : (
            <div className={Styling.error}>{error.message}</div>
          )}
        </div>
        <div id={Styling.buttonDiv}>
          <button id={Styling.button} type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
