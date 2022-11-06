import { useEffect, useRef } from "react";
import { Card } from "../components/Card";
import styles from '../styles/Home.module.css'
import { useInView, motion } from 'framer-motion';
export default function Home() {
  const aboveImg = useRef(null);
  const isInViewAbove = useInView(aboveImg);
  useEffect(()=>{
      const navbar = document.getElementById("navbar")
      const ul = document.getElementById("ul")
      if(isInViewAbove){
        console.log('arriba');
        
          navbar?.style.setProperty("background", "none")
          ul?.style.setProperty("color", "white")
          navbar?.style.setProperty("height", "100px")
          navbar?.style.removeProperty("box-shadow")
      }else{
          navbar?.style.setProperty("background-color", "#3C3C3C")
          ul?.style.setProperty("color", "white")
          navbar?.style.setProperty("height", "80px")
          navbar?.style.setProperty("box-shadow", "0 0 10px 0 rgba(0,0,0,0.5)")
          
      }
  }, [isInViewAbove])
  return (
    <div> 
      <div className={styles.main} id="top">
        <motion.h1
          transition={{type:'spring', duration:1.1}}
          whileHover={{scale:1.01}}
        >
          Welcome to my blog!
        </motion.h1>

      </div>
      <div ref={aboveImg}></div>
      <div className={styles.container}>
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="" />
        <section className={styles['card-container']}>
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        <Card description="Lee sobre esta tecnologia que está explotando en el mercado" image="/block.webp" link="/article/1" title="Que es blockchain y porqué tienes que aprenderlo" type="small" />
        
        </section>
      </div>
    </div>
  )
}
