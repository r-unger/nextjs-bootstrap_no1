import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          Main content
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          Footer line
        </div>
      </footer>
    </div>
  );
}
