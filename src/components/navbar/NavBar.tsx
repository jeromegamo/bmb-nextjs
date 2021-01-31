import {useState} from 'react'
import style from './NavBar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nav from './navigation.config'
import {NavMenu, ParentNav, NavProvider, useNavContext} from './NavMenu'

export default NavBar

function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <header style={{position: 'sticky', top: 0}}>
      <nav className={style.navbar}>
        <Logo />
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      </nav>
      { isMenuOpen &&
        <NavProvider>
          <Nav />
        </NavProvider>
      }
    </header>
  )
}

function Nav(): JSX.Element {
  return (
    <ul className={`${style.menu}`}>
      {nav.map(menu => createMenuItem(menu))}
    </ul>
  )
}

function Logo(): JSX.Element{
  return <img src="/img/bmb-logo.png" alt="bmb logo"
              className={style['company-logo']}/>
}

function MenuButton({onClick}:{ onClick:() => void }): JSX.Element {
  return <FontAwesomeIcon 
            icon="bars" 
            className={style['menu-button']} 
            onClick={() => onClick()}
          />
}

function WithSubmenu({menuItem}:{menuItem: ParentNav}): JSX.Element {
  const {activeMenuKey, setActiveMenuKey} = useNavContext()
  const isOpen = activeMenuKey === menuItem.label
  return (
    <li className="menu__item has-submenu">
      <div onClick={() => setActiveMenuKey(menuItem.label)}>{menuItem.label}</div>
      { isOpen &&
        <ul className={`${style.menu} ${style.submenu}` }>
          { menuItem.children.map(subMenu => createMenuItem(subMenu)) } 
        </ul>
      }
    </li>
  )
}

function createMenuItem(menuItem: NavMenu): JSX.Element {
  switch (menuItem.discriminator) {
    case 'parent': {
      return (
        <WithSubmenu key={menuItem.label} menuItem={menuItem} />
      )      
    }
    case 'child': {
      return (
        <li key={menuItem.label} className="menu__item">
          <Link href={menuItem.link}>
            <a>{menuItem.label}</a> 
          </Link>
        </li>
      )
    }
    default:
      return assertNever(menuItem)
  }
}

function assertNever(x: never): never {
    throw new Error(`Menu does not exist ${x}`)
}
