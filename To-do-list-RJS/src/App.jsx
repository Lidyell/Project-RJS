import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Rotas";
import Navbar from "./components/Navbar/Navbar";
import FooterTDL from "./components/Footer/FooterTDL";
import styles from './App.module.css'
export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />

        <main className={styles.main}>
          <Rotas />
        </main>
        <FooterTDL />
      </div>
    </BrowserRouter>
  );
}