'use client'
import React, { useState } from 'react'
import styles from './info.module.css'

const info = () => {

  const [email, setEmail] = useState("")
  return (
    <div className={styles.container}>
        <div className={styles.form}>
        <form >
            <input 
                type="email"
                placeholder='email@example.com'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className={styles.input}
                />
        </form>
        </div>
        <div className={styles.button}>
            <button className={styles.customButton}>Get Started For Free</button>
        </div>
    </div>
  )
}

export default info