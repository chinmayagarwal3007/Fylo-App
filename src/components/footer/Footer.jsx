import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.logo}>
        <Image src="/logo.png" width={150} height={150} style={{ filter: 'brightness(0) invert(1)' }}/>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <Image src='/icon-phone.png'  width={15} height={12} />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className={styles.email}>
          <Image src='/icon-email.png'  width={15} height={12} />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className={styles.second}>
          <Link href='/' className={styles.xyz}>About Us</Link>
          <Link href='/' className={styles.xyz}>Jobs</Link>
          <Link href='/' className={styles.xyz}>Press</Link>
          <Link href='/' className={styles.xyz}>Blog</Link>
        </div>
        <div className={styles.third}>
          <Link href='/' className={styles.xyz}>Contact Us</Link>
          <Link href='/' className={styles.xyz}>Terms</Link>
          <Link href='/' className={styles.xyz}>Privacy</Link>
        </div>
        <div className={styles.socials}>
        <Image src="/facebook.ico" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }}/>
        <Image src="/twitter.ico" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }}/>
        <Image src="/instagram.ico" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }}/>
        </div>
      </div>
    </div>
  )
}

export default footer