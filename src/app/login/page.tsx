import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "./page.module.css";
import HeaderImage from "../../assets/Images/HeaderImage.png";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

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
        <TextInput>Phone Number</TextInput>
        <TextInput>Name (Optional)</TextInput>
        <Button type="primary">Continue</Button>
      </div>
    </main>
  );
}
