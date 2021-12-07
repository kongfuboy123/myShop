import React,{useState,useEffect} from 'react';
import Google from '../../assets/img/google.png'
import Github from '../../assets/img/github.png'
import styles from './login.module.css'

function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a Login Method</h1>
      
      <div className={styles.wrapper}>
        <div className={styles.left}>

          <div className={`${styles.loginBtn} ${styles.google}`} onClick={()=>{window.open("", "_self")}}>
            <img src={Google} alt="" className={styles.icon} />
            <h1 className={styles.googleTitle} >Google</h1>
          </div>


          <div className={`${styles.loginBtn} ${styles.github}`} onClick={()=>{window.open("", "_self")}}>
            <img src={Github} alt="" className={styles.icon} />
            <h1 className={styles.githubTitle}>Github</h1>
          </div>

        </div>
        <div className={styles.center}>
          <div className={styles.line} />
          <div className={styles.or}>OR</div>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text"  placeholder='username'/>
            <input type="password"  placeholder='password'/>
            <button className={styles.btn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;