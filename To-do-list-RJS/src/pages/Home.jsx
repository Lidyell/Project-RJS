import LinkButton from "../components/Form/LinkButton";
import styles from "./css/Home.module.css"

export default function Home() {
  return (
    <div className={styles.main_msg}>
      <h2>
        Bem vindo ao To do <span>List</span>
      </h2>

      <p>
        Anote suas tarefas para não esquecê-las!
      </p>
      
      <LinkButton titlebtn="Criar nova tarefa" to="/newtask"/>
    </div>
  );
}