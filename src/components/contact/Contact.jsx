'use client'
import React, { useState } from 'react'
import styles from './contact.module.css'

const contact = () => {

  const [email, setEmail] = useState("")
  return (
    <div className={styles.container}>
        <div className={styles.form}>
        <form >
            <input 
                type="email"
                placeholder='Enter your email...'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className={styles.input}
                />
        </form>
        </div>
        <div className={styles.button}>
            <button className={styles.customButton}>Get Started</button>
        </div>
    </div>
  )
}

export default contact