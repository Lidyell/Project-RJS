import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import styles from "./css/Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const buscarTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "GET",
      });
      if (response.ok) {
        const dados = await response.json(); 
        setTasks(dados);
      }
  
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    const AsyncFunctions = async () => {
      await buscarTasks();
    };
    AsyncFunctions();
  }, []);

  const onCompleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          completed: true,
        }),
      });
      buscarTasks();
    } catch (err) {
      console.log(err);
    }
  };
  const onDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      alert("Tarefa apagada com sucesso");
      buscarTasks();
    } catch (err) {
      console.log(err);
    }
  };
  const completeTask = tasks.filter((task) => task.completed);
  const pendingTask = tasks.filter((task) => !task.completed);
  return (
    <section className={styles.tasks}>
      <div className={styles.section}>
        <h2>Tarefas Em andamento</h2>
      </div>

      <div className={styles.container}>
        {pendingTask.map((task) => {
          return (
            <TaskCard
              task={task}
              onComplete={onCompleteTask}
              onDelete={onDeleteTask}
            />
          );
        })}
      </div>

      <div className={styles.section}>
        <h2>Tarefas Concluidas</h2>
        <div className={styles.container}>
          {completeTask.map((task) => {
            return (
              <TaskCard
                task={task}
                onComplete={onCompleteTask}
                onDelete={onDeleteTask}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
