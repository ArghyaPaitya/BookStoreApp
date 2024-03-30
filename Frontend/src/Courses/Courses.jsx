import React from 'react'
import Header from '../components/Navigation'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from '../../public/list.json'
function Courses() {
  return (
    <>
    <Header/>
    <div className="min-h-screen">
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses