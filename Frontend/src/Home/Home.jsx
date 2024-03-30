import React from 'react'
import Header from '../components/Navigation'
import Banner from '../components/Banner'
import FreeBooks from '../components/FreeBooks'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Header/>
    <Banner/> 
    <FreeBooks />
    <Footer/>
    </>
  )
}

export default Home