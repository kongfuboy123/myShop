import React,{useState} from 'react';
import logo from '../../assets/img/logo.png'
import styles from './Carouse.module.css'
function Carouse({assets}) {

  const initState = assets?assets[0].url:logo
  const [currentIndex,setCurrentIndex] = useState(0)
  const [url,setUrl]= useState(initState)
  const handleClick = (e)=>{
    setCurrentIndex(Number(e.target.alt));
    setUrl(e.target.src)
   
  }
  return (
   
      <div className={styles.container}>
        
        <img className={styles.show} src={url} alt="" />
        
       
        <ul className={styles.imgList}>
          { 
          assets.map((asset,i) =>
            <li className={`${styles.li} ${currentIndex === i  ? styles.active: ''}`} key={asset.id}  onClick={(e)=>handleClick(e)} > <img className={styles.img}  src={asset.url} alt={i}/></li>   
            // <li className={currentIndex === i  ? styles.active: ''} key={asset.id}  onClick={(e)=>handleClick(e)} > <img className={styles.img}  src={asset.url} alt={i}/></li>   
          )
          }
        </ul>
      </div>)

  
}  
 


export default Carouse;