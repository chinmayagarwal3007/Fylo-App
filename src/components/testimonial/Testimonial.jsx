import React from 'react'
import styles from './testimonial.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Statement from '@/components/statement/Statement'

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.mainContainer}>
        <div className={styles.testimonial}>
          <h1> Stay productive, wherever you are</h1>

          <p>Never let location be an issue when accessing your files. Fylo has you 
             covered for all of your file storage needs.</p>

          <p>Securely share files and folders with friends, family and colleagues for 
            live collaboration. No email attachments required!</p>

          <Link href='/' className={styles.customLink}>
            <span className={styles.linkText}>See how Fylo works</span>
            <Image src='/icon-arrow.png' width={20} height={20} style={{ display: 'inline-block', marginLeft:'5px' }}/>  
          </Link> 

          <Statement />

        </div>
        <div className={styles.image}>
          <Image src='/illustration-2.png' width={800} height={800} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial