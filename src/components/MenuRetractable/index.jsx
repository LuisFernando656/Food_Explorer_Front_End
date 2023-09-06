import { Container, MenuHeader, MenuContent} from "./styles";
import { FiX, FiSearch } from 'react-icons/fi'
import { Input } from "../input";
import { ReservedRights } from '../ReservedRights'

export function MenuRetractable({onClose, isAdmin}) {
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
        <a href="#">Sair</a>
        </div>
      </MenuContent>
      <ReservedRights/>
    </Container>
  )
}