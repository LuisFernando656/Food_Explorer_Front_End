import { Container, MenuHeader, MenuContent} from "./styles";
import { FiX, FiSearch } from 'react-icons/fi'
import { Input } from "../input";
import { ReservedRights } from '../ReservedRights'

import { useAuth } from "../../hooks/auth";

export function MenuRetractable({onClose, isAdmin}) {
  const {signOut} = useAuth()

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
        {isAdmin ? <a href="#">Novo Prato</a> : null}
        <button onClick={signOut}>Sair</button>
        </div>
      </MenuContent>
      <ReservedRights/>
    </Container>
  )
}