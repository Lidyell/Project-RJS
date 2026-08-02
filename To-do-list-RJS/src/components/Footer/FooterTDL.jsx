import { FaInstagram, FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import styles from "./Footer.module.css";

export default function FooterTDL() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <h3>
          To do <span>List</span> 
        </h3>
        <p>Organize suas tarefas e aumente sua produtividade.</p>
      </div>

      <div className={styles.social}>
        <a href="https://github.com/Lidyell/Project-RJS" aria-label="Github" target="_blank">
          <FaGithub className={styles.icon}  size={20}/>
        </a>

        <a href="#" aria-label="Instagram" target="_blank">
          <FaInstagram className={styles.icon} size={20}/>
        </a>

        <a href=""
        target="_blank" aria-label="Contato">
          <IoMdContact className={styles.icon} size={20}/>
        </a>
      </div>

      <div className={styles.bottom}>
        <p>
          Todos os direitos reservados &copy; Projeto-RJS
        </p>
      </div>
    </footer>
  );
}