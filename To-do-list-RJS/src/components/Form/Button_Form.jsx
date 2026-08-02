import styles from "./css/Button_Form.module.css"

export default function Button_Form({ titlebtn , ...props}) {
  return <button className={styles.link}  {...props}>{titlebtn}</button>;
}
