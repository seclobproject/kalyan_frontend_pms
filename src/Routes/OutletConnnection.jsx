import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar_left from '../layouts/Sidebar_left'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Rightbar from '../layouts/Rightbar'

function OutletConnnection() {
  const [drawer,setDrawer]=useState(true)



  return (
    <div>
        <div id="wrapper">
        <Header />
        <Sidebar_left  />
        <div className="content-page">
        <Outlet />
        </div>
        {/* <Rightbar/> */}
        {/* <Footer /> */}
        </div>
    </div>
  )
}

export default OutletConnnection