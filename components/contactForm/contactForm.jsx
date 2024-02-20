"use client";

import Styling from "./contactForm.module.css";
import { useState } from "react";

export default function contactForm() {
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

    if (success) {
      setFullName("");
      setMessage("");
      setEmail("");
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
        </div>
        <div id={Styling.buttonDiv}>
          <button id={Styling.button} type="submit">
            Send
          </button>
        </div>

        <div className={Styling.messages}>
          {error &&
            error.map((e, i) => (
              <div
                className={`${Styling.message} ${
                  success ? Styling.green : Styling.red
                }`}
                key={i}
              >
                <div className={Styling.iconDiv}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                    height={36}
                    width={36}
                  >
                    <circle
                      cx="11"
                      cy="-1041.36"
                      r="8"
                      transform="matrix(1 0 0-1 0-1030.36)"
                      opacity=".98"
                      fill="#da4453"
                    />
                    <path
                      d="m-26.309 18.07c-1.18 0-2.135.968-2.135 2.129v12.82c0 1.176.948 2.129 2.135 2.129 1.183 0 2.135-.968 2.135-2.129v-12.82c0-1.176-.946-2.129-2.135-2.129zm0 21.348c-1.18 0-2.135.954-2.135 2.135 0 1.18.954 2.135 2.135 2.135 1.181 0 2.135-.954 2.135-2.135 0-1.18-.952-2.135-2.135-2.135z"
                      transform="matrix(.30056 0 0 .30056 18.902 1.728)"
                      fill="#fff"
                      stroke="#fff"
                    />
                  </svg>
                </div>
                <div className={Styling.textDiv}>{e}</div>
              </div>
            ))}
        </div>
      </form>
    </section>
  );
}
