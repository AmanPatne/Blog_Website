import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function Layout() {
  return (
    <>
   <div className="bg-yellow-600">
   <Header/>
   <Outlet />
   <Footer/>
   </div>
    </>
  )
}

export default Layout