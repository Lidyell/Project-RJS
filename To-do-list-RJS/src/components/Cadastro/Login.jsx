import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = async (e) => {
    e.preventDefault();
    const usuario = {
      name,
      email,
      senha,
    };
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(usuario))
        navigate("/");
      }
      else{
        alert("Cadastro não encontrado")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <header>Login</header>
      <form onSubmit={entrar} method="post">
        <label htmlFor="">Nome</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="" >Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="">Senha</label>
        <input type="text" onChange={(e) => setSenha(e.target.value)}/>

        <button type="submit">Enviar</button>
        <button onClick={() => localStorage.removeItem("usuario")}>tirar </button>
      </form>
    </div>
  );
}
