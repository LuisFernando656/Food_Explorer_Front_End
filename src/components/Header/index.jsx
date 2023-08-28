import { Container, MenuButton} from './styles'
import { Logo } from '../Logo'
import Requestsicon from '../../assets/requestsIcon.svg'
import { FiMenu } from 'react-icons/fi'
import { MenuRetractable } from '../MenuRetractable'

import { useState } from 'react'

export function Header({isAdmin=true}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () =>  {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
   <Container>  
    <MenuButton onClick={toggleMenu}>
      <FiMenu/>
    </MenuButton>
    
    <Logo isAdmin={isAdmin}/>
    
    {isAdmin ? <div></div> :  <button>  <img src={Requestsicon} alt="Icone de Pedidos" /> </button>} 
    {menuOpen ? <MenuRetractable isAdmin={isAdmin} menuOpen={menuOpen} onClose={closeMenu}/>: null}
   </Container>
  )
}