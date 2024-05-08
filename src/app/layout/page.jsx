import React from 'react'
import Home from '../components/pages/home';
import Header from '../components/common/Header';
import Footer from "../components/common/Footer";
// import { BsBagPlusFill, BsListNested } from 'react-icons/bs'

export default function page() {
  return (
    <div>
    <Header/>
    <Home/>
    <Footer />
  </div>
  )
}
