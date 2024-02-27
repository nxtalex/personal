"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Styling from "./header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={Styling.header}>
      <nav>
        <ul>
          <li className={pathname === "/" ? Styling.current : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === "/about" ? Styling.current : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === "/projects" ? Styling.current : ""}>
            <Link href="/projects">My projects</Link>
          </li>
          <li className={pathname === "/blog" ? Styling.current : ""}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={pathname === "/services" ? Styling.current : ""}>
            <Link href="/services">Services</Link>
          </li>
          <li className={pathname === "/contact" ? Styling.current : ""}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
