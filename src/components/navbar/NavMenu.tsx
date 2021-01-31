import {createContext, useContext, ReactNode, useState} from 'react'
export type {
  NavMenu,
  ParentNav,
  ChildNav,
}

export {
  NavProvider,
  useNavContext
}

type ChildNav = {
  discriminator: 'child';
  label: string;
  link: string;
}

type ParentNav = {
    discriminator: 'parent';
    label: string;
    children: ChildNav[];
}

type NavMenu = 
  | ParentNav
  | ChildNav;

const NavContext = createContext({activeMenuKey: "", setActiveMenuKey:(key: string) => {}})

function useNavContext() {
  const context = useContext(NavContext)
  if (!context) throw new Error("Component must be have a NavProvider")
  return context
}

function NavProvider(props: {children: ReactNode}) {
  const [activeMenuKey, setActiveMenuKey] = useState("")
  const value = {activeMenuKey, setActiveMenuKey}
  return <NavContext.Provider value={value} {...props}/>
}