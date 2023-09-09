import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../input";
import { Button } from "../Button";

import { FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";

export function HeaderDesktop({isAdmin}) {
  const { signOut } = useAuth()

  return (
    <Container>
      <Logo isAdmin={isAdmin}/>
      <Input icon={FiSearch} placeholder='Busque por pratos ou ingredientes'/>
      {isAdmin? <Button title='Novo prato'/>  : <Button icon={PiReceipt} title='Pedidos (0)'/>}
      <button onClick={signOut}><FiLogOut/></button>
    </Container>
  )
}