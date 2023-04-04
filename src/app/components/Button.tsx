import classes from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "primary" | "success" | "error" | "default" | "text";
}

export default function Button({ children, type }: ButtonProps) {
  if (type === "primary")
    return <button className={classes.PrimaryButton}>{children}</button>;

  if (type === "success")
    return <button className={classes.TextButton}>{children}</button>;

  if (type === "error")
    return <button className={classes.TextButton}>{children}</button>;

  if (type === "default")
    return <button className={classes.TextButton}>{children}</button>;

  if (type === "text")
    return <button className={classes.TextButton}>{children}</button>;

  return <button>{children}</button>;
}
