import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../input";
import { Button } from "../Button";

import { FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function HeaderDesktop({isAdmin}) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleLogOut() {
    const confirm = window.confirm('Tem certeza que deseja sair ?')
    
    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  function handleNavNew() {
    navigate('/new')
  }

  function handleNavHome() {
    navigate('/')
  }

  return (
    <Container>
      <Logo isAdmin={isAdmin} onClick={handleNavHome}/>
      <Input icon={FiSearch} placeholder='Busque por pratos ou ingredientes'/>
      {isAdmin? <Button onClick={handleNavNew} title='Novo prato'/>  : <Button icon={PiReceipt} title='Pedidos (0)'/>}
      <button onClick={handleLogOut}><FiLogOut/></button>
    </Container>
  )
}