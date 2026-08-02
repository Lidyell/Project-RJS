import { Link } from "react-router-dom";
import styles from "./css/LinkButton.module.css"

export default function LinkButton({ titlebtn , ...props}) {
  return <Link className={styles.link}  {...props}>{titlebtn}</Link>;
}
