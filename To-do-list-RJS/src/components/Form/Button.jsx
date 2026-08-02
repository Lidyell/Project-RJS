import styles from "./css/Button.module.css"

export default function Button({ titlebtn , ...props}) {
  return <button className={styles.link}  {...props}>{titlebtn}</button>;
}
