import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "./page.module.css";
import Background from "../assets/Images/Background.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={classes.Home}>
      <Image
        className={classes.Background_Img}
        src={Background}
        alt="backgound-image"
      />
      <Link href="./Log_in/">
        <button className={classes.Guest_btn}>Continue As Guest</button>
      </Link>

      <Link href="./Log_in/">
        <p className={classes.Login_link}>Create Or Login to Account</p>
      </Link>
    </main>
  );
}
