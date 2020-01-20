import React from 'react'
import { Link } from 'gatsby'
import { centered } from '../../assets/css/app.module.css'
import partnerz_logo from '../../assets/images/partnerz_logo.svg'
import {
  nav,
  nav_content,
  nav_menu,
  nav_item,
  nav_icon,
} from './navbar.module.css'

function NavBar() {
  let menu

  const handleMenuClick = async () => {
    console.log('menu')
  }

  return (
    <nav className={nav}>
      <div
        className={`${nav_content} ${centered}`}
      >
        <div
          className={`${nav_menu} ${nav_item} ${centered}`}
        >
          <img
            src="https://api.iconify.design/jam:menu.svg?color=white"
            alt="menu button"
            className={nav_icon}
            onClick={handleMenuClick}
          />
        </div>
        <div
          className={`${nav_item} ${centered}`}
        >
          <Link
            to="/#"
            className={`${nav_item} ${centered}`}
          >
            <img
              src={partnerz_logo}
              alt="Partnerz FP logo"
              className={nav_icon}
            />
          </Link>
        </div>
        <div
          className={`${nav_item} ${centered}`}
        >
          <Link
            to="/form"
            className={`${nav_item} ${centered}`}
          >
            <img
              src="https://api.iconify.design/jam:files.svg?color=white"
              alt="menu button"
              className={nav_icon}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
