import Link from "next/link";
import Styling from "./header.module.css";

export default function header() {
  return (
    <header className={Styling.header}>
      <nav>
        <ul id="ul">
          <li id={Styling.about}>
            <Link href="/about" id={Styling.aboutLink}>
              About
            </Link>
          </li>
          <li id={Styling.home}>
            <Link href="/" id={Styling.homeLink}>
              Home
            </Link>
          </li>
          <li id={Styling.projects}>
            <Link href="/projects" id={Styling.projectsLink}>
              My projects
            </Link>
          </li>
          <li id={Styling.blog}>
            <Link href="/blog" id={Styling.blogLink}>
              Blog
            </Link>
          </li>
          <li id={Styling.services}>
            <Link href="/services" id={Styling.servicesLink}>
              Services
            </Link>
          </li>
          <li id="nightModeListItem"></li>
        </ul>
      </nav>
    </header>
  );
}
