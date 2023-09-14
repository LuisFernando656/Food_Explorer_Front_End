import { Container, MenuHeader, MenuContent} from "./styles";
import { FiX, FiSearch } from 'react-icons/fi'
import { Input } from "../input";
import { ReservedRights } from '../ReservedRights'

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function MenuRetractable({onClose, isAdmin}) {
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleLogOut() {
    const confirm = window.confirm('Tem certeza que deseja sair ?')
    
    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  function handleNewDishe() {
    navigate('/new')
  }

  return (
    <Container>
      <MenuHeader>
        <button onClick={onClose}>
          <FiX/>
        </button>
        <h2>Menu</h2>
      </MenuHeader>
      <MenuContent>
        <Input type="search" placeholder='Busque por pratos ou ingredientes' icon={FiSearch} />
        <div>
        {isAdmin ? <button onClick={handleNewDishe}>Novo Prato</button> : null}
        <button onClick={handleLogOut}>Sair</button>
        </div>
      </MenuContent>
      <ReservedRights/>
    </Container>
  )
}