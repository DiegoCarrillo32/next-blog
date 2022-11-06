import { Card } from "../components/Card";
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>      
      <div className={styles.container}>
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="" />
        <section className={styles['card-container']}>
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        </section>
      </div>
    </div>
  )
}
