import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { TfiAgenda } from "react-icons/tfi";
import { CgCheckR } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";


export default function Navbar() {
  const ActiveHoverPage = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };
  const [user, setUser] = useState("")

  useEffect(() =>{
    const usuariosalvo = localStorage.getItem("usuario")

    if(!usuariosalvo){
      
      setUser("N/A")
    }
    
    const usuario = JSON.parse(usuariosalvo)
    setUser(usuario.name)
    

  }, [])
  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <NavLink to="/">
          <h1 className={styles.logo}>
            <TfiAgenda className={styles.icon} size={28} />
            To do <span>List</span>
          </h1>
        </NavLink>
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={ActiveHoverPage}>
            <FaHome size={20} className={styles.icon_btn} />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tasks" className={ActiveHoverPage}>
            <CgCheckR size={20} className={styles.icon_btn} />
            <span>Minhas tarefas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={ActiveHoverPage}>
            <FiLogIn size={20} className={styles.icon_btn}/>
            <span>Entrar</span>
          </NavLink>
        </li>
        <li>
          <div className={`${styles.name_user}`}>

          <VscAccount size={20} className={styles.icon_btn}/>
          <span >{user}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
