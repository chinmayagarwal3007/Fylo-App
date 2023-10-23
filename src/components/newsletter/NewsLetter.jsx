import React from 'react'
import styles from './newsletter.module.css'
import Info from '@/components/info/Info'

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.access}>
          <h1>Get early access today</h1>

          <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.</p>
      </div>
      
      <div>
            <Info />
      </div>
    </div>
  )
}

export default NewsLetter