import Image from "next/image";
import classes from "./page.module.css";
import Background from "../assets/Images/Background.png";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className={classes.Home}>
      <Image
        className={classes.Background_Img}
        src={Background}
        alt="backgound-image"
      />
      <Link href="/menupage">
        <Button type="primary">Continue as Guest</Button>
      </Link>

      <Link href="/login">
        <Button type="text">Create Or Login to Account</Button>
      </Link>
    </main>
  );
}
