import { useRouter } from "next/navigation";
import MessageSent from "../../svg/MessageSent";
import Close from "../../svg/Close";
import Styling from "./popup.module.css";
export default function Popup({ closePopup }) {
  const router = useRouter();
  function redirect() {
    router.push("/");
  }

  return (
    <div id={Styling.page}>
      <div id={Styling.container}>
        <div id={Styling.header}>
          <div id={Styling.titleContainer}>
            <h1 id={Styling.title}>Message sent succesfully!</h1>
          </div>
          <div id={Styling.close}>
            <button id={Styling.closeButton} onClick={closePopup}>
              <Close />
            </button>
          </div>
        </div>
        <div id={Styling.mainSvg}>
          <MessageSent />
        </div>
        <button id={Styling.continue} onClick={redirect}>
          Go home
        </button>
      </div>
    </div>
  );
}
