import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom'; 
import styles from './Home.module.css'
import SwiperC from '../../components/SwiperC'
import Zen from '../../components/Zen'

function Home({setNavStyle}) {
  // 监听滚动，根据scrollTop 滚动值设置navStyle
  const handleScroll = e =>{
    const scrollTop = document.documentElement.scrollTop
    console.log('scrollTop',scrollTop);
    if(scrollTop>130){
      setNavStyle({background:'white',color:'black',postion:'sticky'})
    }else{
      setNavStyle({background:'',color:'white',position:'fixed' })
    }
  }
  // useEffect(() => {
  //   setTransparent({background:'',color:'white' })
  // },[])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  })
  
  return (
    <div className={styles.container}>
      <SwiperC />
      <Zen />

    </div>
  );
}

export default Home;