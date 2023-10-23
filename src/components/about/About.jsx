import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Contact from '@/components/contact/Contact'

const about = () => {
  return (
    <div className={styles.container}>

      <div className={styles.info}>
        <h1> All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores your most important files in one secure location. 
           Access them wherever you need, share and collaborate with friends, 
           family, and co-workers.</p>
        <Contact />
      </div>
      <div className={styles.image}>
      <Image src="/illustration-1.png" width={950} height={950}/>
      </div>

    </div>
  )
}

export default about