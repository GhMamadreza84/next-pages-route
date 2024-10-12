import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Ghmamadreza.ir</h1>
      <ul>
        <li>
          <Link href="/courses">Go to courses page</Link>
        </li>
        <li>
          <Link href="/users">Go to users page</Link>
        </li>
      </ul>
    </div>
  );
}
