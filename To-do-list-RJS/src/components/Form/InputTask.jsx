import styles from "./css/InputTask.module.css";

export default function InputTask({ name, text, type = "text", placeholder }) {
  return (
    <div className={styles.div_form}>
      <label htmlFor={name} className={styles.label_form}>
        {text}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
