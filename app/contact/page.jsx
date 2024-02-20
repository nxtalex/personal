import ContactForm from "../../components/contactForm/contactForm.jsx";
import Styling from "./page.module.css";

export default function page() {
  return (
    <section>
      <h1 id={Styling.h1}>Contact</h1>
      <ContactForm />
    </section>
  );
}
