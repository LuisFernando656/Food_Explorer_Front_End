import { Container, MenuButton } from './styles'
import { Logo } from '../Logo'
import Requestsicon from '../../assets/requestsIcon.svg'
import { FiMenu } from 'react-icons/fi'

export function Header({isAdmin=false}) {
  return (
   <Container>  
    <MenuButton>
      <FiMenu/>
    </MenuButton>
    
    <Logo isAdmin={isAdmin}/>
    
    {isAdmin ? <div></div> :  <button>  <img src={Requestsicon} alt="Icone de Pedidos" /> </button>} 
   </Container>
  )
}