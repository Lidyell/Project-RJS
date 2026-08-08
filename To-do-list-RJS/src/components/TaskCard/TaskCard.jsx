import styles from "./TaskCard.module.css"

export default function TaskCard({ task, onComplete }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskInfo}>
        <h3>{task.title}</h3>

        <span className={styles.type}>
          {task.type}
        </span>

        <p>{task.description}</p>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.btn_concluir}
          onClick={() => onComplete(task.id)}
        >
          {task.completed ? "Concluída" : "Concluir"}
        </button>
      </div>
    </div>
  );
}