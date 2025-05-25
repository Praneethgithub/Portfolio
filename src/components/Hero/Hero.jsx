import React from 'react';
import styles from "./Hero.module.css"
import CSPOLogo from '../../assets/logos/CSPO.png';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Praneeth Manchal</h1>
            <a 
              href="https://drive.google.com/file/d/1eKyU5QNNSGA-Yd3COf1Y-fm056DoCMmu/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.cspoLink}
            >
              <img src={CSPOLogo} alt="CSPO Certified" className={styles.cspoLogo} />
            </a>
        </div>
        <p className={styles.description}>
        Product manager with 4 years of experience in handling customer facing products, combining expertise in business analytics, software engineering, and project management. Certified Scrum Product Owner and skilled in driving product improvement, technical troubleshooting and customer experience optimization through data-driven strategies. 
        </p>
        <a href="#contact" className={styles.contactBtn}>Contact me</a>
    </div>
  </section>
  );
};

