import React from 'react';
import styles from './Quantity.module.css'
function Quantity({props}) {
  
  const {quantity,setQuantity} = props
  if(quantity<1){
    setQuantity(1)
  }
  console.log('quantity',quantity);
  return (
    
    <div className={styles.container}>
      <span className={styles.title}>Quantity</span>
      <div className={styles.quantity}>
        <button className={`${styles.btn} ${quantity===1?styles.disabled:''}`} onClick={()=>setQuantity(quantity-1)}>-</button>
        <input className={styles.input} type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
        <button className={styles.btn} onClick={()=>setQuantity(quantity+1)}>+</button>
      </div>
    </div>
  );
}

export default Quantity;