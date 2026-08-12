import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import styles from "./HomePage.module.css";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>projeto0808</span>
        <Button variant='ghost' onClick={() => navigate("/login")}>
          Entrar
        </Button>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.title}>Projeto 0808</h1>
        <p className={styles.subtitle}>
          Projeto base para gestao de leads - Fluxo Kanban - Produtos
        </p>
        <div className={styles.actions}>
          <Button onClick={() => navigate("/login")}>Fazer login</Button>
          <Button variant='ghost' onClick={() => navigate("/editor")}>
            Ver o editor
          </Button>
        </div>
      </section>
    </div>
  );
}
