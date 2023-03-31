import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "./page.module.css";
import HeaderImage from "./HeaderImage.png";

const inter = Inter({ subsets: ["latin"] });

export default function LogIn() {
  return (
    <main className={classes.LogIn}>
      <Image
        className={classes.Header_Img}
        src={HeaderImage}
        alt="Header-Image"
      />
      <div className={classes.LogIn_section}>
        <div className={classes.HeaderStyler}>
          <div className={classes.line}></div>
          <h1 className={classes.Header}>Log in or sign up</h1>
          <div className={classes.line}></div>
        </div>
        <input
          className={classes.PhoneInput}
          placeholder="Phone Number"
        ></input>
        <input
          className={classes.NameInput}
          placeholder="Name (Optional)"
        ></input>
        <button className={classes.LogIn_Btn}>Continue</button>
      </div>
    </main>
  );
}
