import { Card } from "../components/Card";
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>      
      <div className={styles.container}>
        <Card description="It is all an illusion" image="/forest.webp" link="" title="Does your brushing actually help your cellulitis?" type="" />
        <section className={styles['card-container']}>
          <Card description="It is all an illusion" image="/forest.webp" link="" title="Does your brushing actually help your cellulitis?"  type="small" />
          <Card description="It is all an illusion" image="/forest.webp" link="" title="Does your brushing actually help your cellulitis?"  type="small" />
        </section>
      
      </div>
    </div>
  )
}
