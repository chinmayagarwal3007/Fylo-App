import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <Image src="/logo.png" width={150} height={150}/>
      </div>
      <div className={styles.links}>
        <Link href='/' className={styles.xyz}>Features</Link>
        <Link href='/' className={styles.xyz}>Team</Link>
        <Link href='/' className={styles.xyz}>Sign In</Link>
      </div>

    </div>
  )
}

export default Navbar