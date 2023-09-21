import { Container, MenuButton} from './styles'
import { Logo } from '../Logo'
import Requestsicon from '../../assets/requestsIcon.svg'
import { FiMenu } from 'react-icons/fi'
import { MenuRetractable } from '../MenuRetractable'

import { useState } from 'react'

export function Header({isAdmin}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () =>  {
    setMenuOpen(!menuOpen)
  }

  return (
   <Container>  
    <div>
    <MenuButton onClick={toggleMenu}>
      <FiMenu/>
    </MenuButton>
    
    <Logo isAdmin={isAdmin}/>
    
    {isAdmin ? <div></div> :  <button>  <img src={Requestsicon} alt="Icone de Pedidos" /> </button>} 

    </div>
    <MenuRetractable isAdmin={isAdmin} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
   </Container>
  )
}