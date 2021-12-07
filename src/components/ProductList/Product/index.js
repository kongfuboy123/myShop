import React from 'react';
import styles from './Product.module.css';

function Product({product}) {
  // console.log('product',product);
  return (
    <div className={styles.container}>
      <img src={product.image.url} alt='' width='300px' height='200px' />
      <div styles={styles.productDetail}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>{product.price.formatted_with_symbol}</p>
      </div>

    </div>
  );
}

export default Product;