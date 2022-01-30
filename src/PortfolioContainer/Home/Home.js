import React from 'react';
import Footer from './Footer';
import Profile from './Profile';
import './Home.css'


export default function Home(){
  return <div className='home-container'>
                <Profile />
                {/* <Footer /> */}
  </div>;
};
