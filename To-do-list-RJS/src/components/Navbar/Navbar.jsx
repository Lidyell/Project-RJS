import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { TfiAgenda } from "react-icons/tfi";
import { CgCheckR } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const ActiveHoverPage = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <h1 className={styles.logo}>
          <TfiAgenda className={styles.icon} size={28}/>
          To do <span>List</span>
        </h1>
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={ActiveHoverPage}>
            <FaHome size={20} className={styles.icon_btn}/>
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tasks" className={ActiveHoverPage}>
            <CgCheckR size={20} className={styles.icon_btn}/>
            <span>Minhas tarefas</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}