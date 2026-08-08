import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "./../pages/Tasks";
import NewTask from './../pages/NewTask';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tasks" element={<Tasks />}></Route>
      <Route
        path="*"
        element={<h1>Erro 404, Página não encontrada.</h1>}
      ></Route>
      <Route
        path="/newtask"
        element={<NewTask/>}
      ></Route>
    </Routes>
  );
}
