import React from 'react'
import SideNav from '../Components/Side-Nav'
import { Outlet } from 'react-router-dom'

function Navigation() {
  return (
    <div className='relative flex w-full gap-4'>
    <SideNav />
    <Outlet/>
    </div>
  )
}

export default Navigation