import React from 'react';
import {Link,Outlet} from 'react-router-dom'
import Product from './Product'
import styles from './ProductList.module.css'
function ProductList({products}) {
  
  return (
    <div className={styles.container}>
     
        {products?
          products.map(product =>(
            <Link key={product.id} to={`/products/${product.id}`} >
              <Product  product={product} />
            </Link>
          )):<>loading....</>
        }
        {/* <Outlet /> */}
    </div>
  );
}

export default ProductList;