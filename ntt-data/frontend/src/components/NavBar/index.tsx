import React from 'react'
import './navbar.scss'
import { Bar, Icon } from "@ui5/webcomponents-react/dist";

function NavBar() {
  return (
    <>
      <Bar startContent={<><Icon name="home" showTooltip accessible-name="Go Home" /></>} className='navbar' >
        Movie Card
      </Bar>
    </>
  )
}

export default NavBar