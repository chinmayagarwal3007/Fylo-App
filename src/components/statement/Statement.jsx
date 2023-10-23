import React from "react";
import styles from "./statement.module.css";
import Image from "next/image";

const Statement = () => {
  return (
    <div className={styles.container}>

      <div className={styles.first}>
        <Image src="/icon-quotes.png" height={15} width={15} className={styles.quotes}/>
      </div>

      <div className={styles.testimony}>
        <p >
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
      </div>

      <div className={styles.third}>
        <div className={styles.image}>
          <Image src="/avatar-testimonial.png" height={50} width={50} className={styles.person} /> 
        </div>

        <div className={styles.user}>
          <h1>Kyle Burton</h1>
          <p>Founder & CEO, Huddle</p>
        </div>
      
      </div>
    </div>
  );
};

export default Statement;
