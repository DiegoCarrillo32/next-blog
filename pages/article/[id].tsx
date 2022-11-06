import React from 'react'
import styles from './Id.module.css';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Id = () => {
    const router = useRouter()
    
    const { id } = router.query
    useEffect(()=> {
        const navbar = document.getElementById("navbar")
        navbar?.style.setProperty("background-color", "#3C3C3C")
    }, [])
    return (
        <div className={styles.id}>
            {id}
        </div>
    )
}
export default Id;