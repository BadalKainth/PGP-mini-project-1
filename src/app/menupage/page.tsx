import { Inter } from "next/font/google";
import classes from "./page.module.css";
import Image from "next/image";
import HeroImage from "../../assets/Images/HeroImage.png";
import TextInput from "../components/TextInput";
import Image1 from "../../assets/Images/Image1.png";
import Image2 from "../../assets/Images/Image2.png";
import Image3 from "../../assets/Images/Image3.png";
import Image4 from "../../assets/Images/Image4.png";
import Image5 from "../../assets/Images/Image5.png";
import Image6 from "../../assets/Images/Image6.png";

const inter = Inter({ subsets: ["latin"] });

export default function MenuPage() {
  return (
    <section className={classes.MenuPage}>
      <h2 className={classes.Header}>Cafe Di Milano</h2>
      <Image className={classes.HeroImage} src={HeroImage} alt="HeroImage" />
      <div className={classes.MenuCard}>
        <TextInput>
          <p>Start Typing to search</p>
          <p>X</p>
        </TextInput>
        <div className={classes.MenuItems}>
          <div className={classes.MenuItem}>
            <Image src={Image1} alt=""></Image>
            <p className={classes.title}>Wraps</p>
          </div>
          <div className={classes.MenuItem}>
            <Image src={Image2} alt=""></Image>
            <p className={classes.title}>Pasta</p>
          </div>
        </div>
        <div className={classes.MenuItems}>
          <div className={classes.MenuItem}>
            <Image src={Image3} alt=""></Image>
            <p className={classes.title}>Soups</p>
          </div>
          <div className={classes.MenuItem}>
            <Image src={Image4} alt=""></Image>
            <p className={classes.title}>Burgers</p>
          </div>
        </div>
        <div className={classes.MenuItems}>
          <div className={classes.MenuItem}>
            <Image src={Image3} alt=""></Image>
            <p className={classes.title}>Soups</p>
          </div>
          <div className={classes.MenuItem}>
            <Image src={Image4} alt=""></Image>
            <p className={classes.title}>Burgers</p>
          </div>
        </div>
        <div className={classes.MenuItems}>
          <div className={classes.MenuItem}>
            <Image src={Image3} alt=""></Image>
            <p className={classes.title}>Soups</p>
          </div>
          <div className={classes.MenuItem}>
            <Image src={Image4} alt=""></Image>
            <p className={classes.title}>Burgers</p>
          </div>
        </div>
        <div className={classes.MenuItems}>
          <div className={classes.MenuItem}>
            <Image src={Image3} alt=""></Image>
            <p className={classes.title}>Soups</p>
          </div>
          <div className={classes.MenuItem}>
            <Image src={Image4} alt=""></Image>
            <p className={classes.title}>Burgers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
