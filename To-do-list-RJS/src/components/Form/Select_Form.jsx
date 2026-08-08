import styles from "./css/Select_Form.module.css";

export default function Select_Form({ text, name, options, onChange }) {
  return (
    <div className={styles.div_select}>
      <label htmlFor={name} className={styles.label_select}>
        {text}
      </label>
      <select className={styles.select_form} name={name} onChange={onChange}>
        <option value="" >Selecione uma opção</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
          
        ))}
      </select>
    </div>
  );
}
