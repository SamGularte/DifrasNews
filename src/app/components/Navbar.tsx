import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={styles.linksContainer}>
            <Link href="/world">World</Link>
            <Link href="/business">Business</Link>
            <Link href="/science">Science</Link>
            <Link href="/health">Health</Link>
            <Link href="/sports">Sports</Link>
            <Link href="/brazil">Brazil</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
