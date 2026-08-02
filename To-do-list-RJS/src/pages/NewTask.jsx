import InputTask from "../components/Form/InputTask";
import Btn from "../components/Form/Button_Form";

import styles from "./css/NewTask.module.css";
import Button_Form from "../components/Form/Button_Form";
import Select_Form from "../components/Form/Select_Form";

export default function NewTask() {
  function handleSubmit(e) {
    e.preventDefault();
  }

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
        />

        <InputTask
          name="description"
          text="Descrição"
          placeholder="Digite a descrição da tarefa"
        />
        <Select_Form text="Tipo da tarefa" options={["Escola", "Trabalho", "Casa", "Outros"]}/>
        <Button_Form titlebtn="Adicionar Tarefa" name="Criar Tarefas" />
      </form>
    </main>
  );
}
