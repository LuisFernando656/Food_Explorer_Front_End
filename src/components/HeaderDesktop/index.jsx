import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../input";
import { Button } from "../Button";

import { FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'

export function HeaderDesktop({isAdmin}) {

  return (
    <Container>
      <Logo isAdmin={isAdmin}/>
      <Input icon={FiSearch} placeholder='Busque por pratos ou ingredientes'/>
      {isAdmin? <Button title='Novo prato'/>  : <Button icon={PiReceipt} title='Pedidos (0)'/>}
      <a href="#"><FiLogOut/></a>
    </Container>
  )
}