import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import commerce from '../../lib/commerce'
import ProductList from '../../components/ProductList'
import Sidebar from '../../components/Sidebar'
import styles from './index.module.css'


function Category({apiData,apiCategories}) {

  const params = useParams();
  console.log(params.cid);
  const [filterData,setFilterData] = useState()
  const [products,setProducts] = useState()
 
  const [categories,setCategories]=useState()
  const getCategories = () => {
    if(apiCategories.length > 0) {
      const cate = apiCategories.filter(categories => categories.slug!=='types')
      console.log('cate',cate);
      setCategories(cate)
    }
  }
  const getProducts = () =>{
    if(apiData){
      const filter = apiData.filter(product =>
        product.categories.map(category =>category.id).includes(params.cid))
      console.log('filter',filter);
      setFilterData(filter)
      setProducts(filter);
    }
  }
  useEffect(() => {
    getProducts()
    getCategories()
  }, [params])
  
  return (

      <div className={styles.container}>
        
         <div className={styles.left}>
          <Sidebar cates={categories} setProducts={setProducts} apiData={filterData} />
         </div>

         <div className={styles.right}>
           <ProductList products={products}  />
        </div>
       
       </div>
      
   
  );
}

export default Category;