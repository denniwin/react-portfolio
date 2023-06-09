import React from 'react'
import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/btnDarkMode'
import './Navbar.scss'

function Navbar () {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row"> 
                <NavLink to='/' className="logo">
                    <strong>portfolio</strong> 
                </NavLink>
                <BtnDarkMode/>
                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink className={({isActive})=> isActive ? activeLink : normalLink} to='/'>Home</NavLink></li>
                    <li className="nav-list__item"><NavLink className={({isActive})=> isActive ? activeLink : normalLink} to='projects/'>Projects</NavLink></li>
                    <li className="nav-list__item"><NavLink className={({isActive})=> isActive ? activeLink : normalLink} to='/contacts'>Contacts</NavLink></li>
                </ul>
            </div>
        </div>
</nav>
  )
}

export default Navbar;