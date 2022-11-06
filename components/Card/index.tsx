import Image from 'next/image';
import React from 'react'
import styles from './card.module.css';
interface Card {
    title: string;
    description: string;
    image: string;
    link: string;
    type:string;
}
export const Card = ( {title, description, image, link, type}:Card ) => {
  return (
    
    
        type === "small" ? (
            <article className={styles["card-sm"]}>
                <div className={styles["img-container-sm"]}>
                    <Image src={image} alt={title}   layout='fill'  />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={link}>Read more</a>
            </article>
        ) : (
            <a href={link} className={styles["card-md"]}>
                    <div className={styles["img-container-md"]}>
                        <Image src={image} alt={title}   layout='fill'  />
                    </div>
                    <div className={styles["text-md"]}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                
            </a>
        )
    
  )
}
