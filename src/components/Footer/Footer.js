import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => <div className={styles.footer}>
<div className={styles.counter}> {count} items left</div>
  <div className={styles.filter}>
    <button className={styles.all}>All</button>
    <button className={styles.active}>Active</button>
    <button className={styles.completed}>Completed</button>
  </div>
  <button className={styles.clear}>Clear Completed</button>  
</div>;

export default Footer;