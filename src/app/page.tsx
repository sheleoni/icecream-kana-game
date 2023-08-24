import Image from 'next/image'
import styles from './page.module.css'
import {connectDB} from "../../utils/database";

export default function Home() {
  const db = connectDB();
  return (
    <main className={styles.main}>
      Hello There
    </main>
  )
}
