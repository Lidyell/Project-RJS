import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTask from "../components/Form/InputTask";
import Select_Form from "../components/Form/Select_Form";
import Button_Form from "../components/Form/Button_Form";
import styles from "./css/NewTask.module.css";

export default function NewTask() {
  const navigate = useNavigate();
  const [newtask, setNewTask] = useState({
    completed: false,
  });

  const addTask = (e) => {
    setNewTask({
      ...newtask,
      [e.target.name]: e.target.value,
    });
  };

  const sendTaskForAPI = async (task) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        console.log("Erro no servidor");
      }

      const dados = await response.json();

      console.log(dados);
      alert("Tarefa enviada com sucesso");
      setNewTask({
        completed: false,
      });
      navigate("/tasks");
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
      alert("Erro ao enviar a tarefa");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newtask.title || !newtask.description || !newtask.type) {
      alert("Campos não preenchidos")
      return;
    }
    await sendTaskForAPI(newtask);
  };

  return (
    <main className={styles.container}>
      <h1>
        Crie sua <span>Tarefa</span>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputTask
          name="title"
          text="Título da tarefa"
          placeholder="Digite o título da tarefa"
          onChange={addTask}
        />

        <InputTask
          name="description"
          text="Descrição"
          placeholder="Digite a descrição da tarefa"
          onChange={addTask}
        />

        <Select_Form
          name="type"
          text="Tipo da tarefa"
          options={["Escola", "Trabalho", "Casa", "Outros"]}
          onChange={addTask}
        />

        <Button_Form titlebtn="Adicionar Tarefa" type="submit" />
      </form>
    </main>
  );
}
