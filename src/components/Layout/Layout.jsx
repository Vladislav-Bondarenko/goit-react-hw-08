import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}
