import MyContext from './context.manage'
import {useState,useEffect} from 'react'
import commerce from './lib/commerce'
import Home from './pages/Home'
import About from './pages/About'

import Cart from './pages/Cart'
import Login from './pages/Login/index'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Routes,Route,Outlet,useLocation} from 'react-router-dom'
import Products from './pages/Products'
import Product from './pages/Product'
import Category from './pages/Category'
require('dotenv').config()

function App() {
  const { pathname } = useLocation();
  console.log('pathname',pathname)
  const [cart, setCart] = useState({});
  const [apiCategories,setApiCategories] = useState([])
  const [apiData,setApiData]= useState()
  // 设置导航栏透明，配合轮播图全屏显示，滚动后设置背景色为白色
  const [navStyle,setNavStyle] = useState()
  const [subNavStyle,setSubNavStyle] = useState()
  // 读取全部商品原始数据，传入products页面，配合Categories进行数据过滤
  const fetchApiData = ()=>{
    commerce.products.list().then(products =>
      setApiData(products.data)).catch(error => 
      console.log('There was an error fetching the products', error))
  }
    
  // 读取全部目录原始数据，传入导航栏跟侧边栏，过滤后展示需要的目录
  const fetchApiCate = () => {
    commerce.categories.list().then((category) => setApiCategories(category.data)).catch((error) => {
      console.log('There was an error fetching the category', error);
    });
  }
  // 读取购物车
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchCart();
    fetchApiCate();
    fetchApiData();
  }, []);
  //根据页面地址设置导航栏样式
  useEffect(() => {
    if(pathname==='/'){
      setSubNavStyle({display:'none'})
      setNavStyle({background:'',color:'white',position:'fixed'})
    }else {
      if(pathname==='/login'||pathname==='/about'){
        setSubNavStyle({display:'none'})
        setNavStyle({background:'white',color:'black',postion:'sticky',borderBottom:'1px solid black'})
      }else{
        setSubNavStyle({display:'flex'})
        setNavStyle({background:'white',color:'black',postion:'sticky',borderBottom:'1px solid black'})
      }
      
    }
  },[pathname])
  return (
    <MyContext.Provider value={{cart, setCart}}>
      <div className="App">
        <Nav cart={cart} apiCategories={apiCategories} navStyle={navStyle} subNavStyle={subNavStyle} />
        <Routes>
          <Route path="/" element={<Home setNavStyle={setNavStyle} />} />
          <Route exact path="products" element={<Products apiData={apiData} apiCategories={apiCategories} />} />
          <Route path="products/:pid" element={<Product />} />
          <Route path="category/:cid" element={<Category apiData={apiData} apiCategories={apiCategories} />} />
          <Route path="cart" element={<Cart />}  />
          <Route path="login" element={<Login />}  />
          <Route path="about" element={<About />}  />
        </Routes>

        <Outlet />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}


export default App;
