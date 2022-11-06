import React from 'react'
import styles from './Id.module.css';
import { useRouter } from 'next/router'

const Id = () => {
    const router = useRouter()
    const { id } = router.query
  
    return (
        <div className={styles.id}>
            {id}
        </div>
    )
}
export default Id;