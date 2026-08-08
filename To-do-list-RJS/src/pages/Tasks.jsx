import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import styles from "./css/Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const buscarTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/tasks", {
          method: "GET",
        });
        const dados = await response.json();

        setTasks(dados);
      } catch (err) {
        console.log(err);
      }
    };
    buscarTasks();
  }, []);
  return (
    <section className={styles.tasks}>
      <div className={styles.section}>
        <h2>Tarefas Em andamento</h2>
      </div>
      
      <div className={styles.container}>
        {tasks.map((task) => {
          return(
            <TaskCard task={task}/>
          )
        })}
      </div>

      <div className={styles.section}>
        <h2>Tarefas Concluidas</h2>
        <div className={styles.container}>...</div>
      </div>
    </section>
  );
}
