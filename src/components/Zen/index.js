import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Zen.module.css';
import zen from '../../assets/img/jew/zen.jpg';
import rArrow from '../../assets/img/arrow-long-right.svg'
function Zen(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={`${styles.card} ${styles.bg}`}></div>
        <div className={styles.card}>
          <img 
            src={zen} 
            alt=""  
            className={styles.img}/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Zen</h1>
        <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div>
          <Link to='/products'>
            <>
            Find out more <img src={rArrow} alt="" /> 
            </>
          </Link>
        </div>  
      </div>
    </div>
  );
}

export default Zen;