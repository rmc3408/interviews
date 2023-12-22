import React from 'react'
import NavBar from '../components/NavBar';

function Layout({ children }: any) {
  return (
    <div className="page">
        <NavBar />
        <div className='main'>{children}</div>
    </div>
  )
}

export default Layout