"use client";

import ContactForm from "@/components/contactForm/contactForm.jsx";
import Styling from "./page.module.css";
import Popup from "@/components/contactForm/Popup.jsx";
import { useState } from "react";

export default function page() {
  const [popupVisible, setPopupVisible] = useState(false);

  function closePopup() {
    setPopupVisible(false);
  }

  function openPopup() {
    setPopupVisible(true);
  }

  return (
    <section>
      {popupVisible ? (
        <div>
          <h1 id={Styling.h1}>Contact</h1>
          <ContactForm openPopup={openPopup} />
          <Popup closePopup={closePopup} />
        </div>
      ) : (
        <div>
          <h1 id={Styling.h1}>Contact</h1>
          <ContactForm openPopup={openPopup} />
        </div>
      )}
    </section>
  );
}
