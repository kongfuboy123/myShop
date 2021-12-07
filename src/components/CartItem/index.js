import React from 'react';
import ShortQuantity from '../ShortQuantity'
import RemoveItem from '../RemoveItem'

import styles from './CartItem.module.css'
function CartItem({item}) {
  console.log(item)
  return (
    <div className={styles. container}>
      <div className={styles.wrapper}>
        <img src={item.image.url} alt="" width='100px' />
        <h1 className={styles.name}>{item.name}</h1>
        <ShortQuantity quantity={item.quantity} id={item.id}/>
        <h1 className={styles.price}>${item.price.raw * item.quantity}</h1>
        <RemoveItem id={item.id}/>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default CartItem;