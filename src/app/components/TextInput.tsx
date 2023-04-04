import classes from "./TextInput.module.css";

interface TextInputProps {
  children?: React.ReactNode;
}

export default function TextInput({ children }: TextInputProps) {
  return <button className={classes.TextInput}>{children}</button>;
}
