import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../input";
import { Button } from "../Button";

import { FiSearch, FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'

import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { useEffect, useState } from "react";

export function HeaderDesktop({isAdmin}) {
  const { setSearch } = useSearch();
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeySearch = (e) => {
    if (e.key === 'Enter' && location.pathname !== '/') {
      setSearch(e.target.value)

      navigate('/')
    }
  }

  function handleLogOut() {
    const confirm = window.confirm('Tem certeza que deseja sair ?')
    
    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  const handleNavNew = () => navigate('/new')
  const handleNavHome = () => navigate('/')

  return (
    <Container>
      <Logo
      isAdmin={isAdmin} 
      onClick={handleNavHome}
      />
      <Input 
      icon={FiSearch}
      placeholder='Busque por pratos ou ingredientes' 
      onChange={handleChange}
      onKeyPress={handleKeySearch}
      />
      {isAdmin? <Button onClick={handleNavNew} title='Novo prato'/>  : <Button icon={PiReceipt} title='Pedidos (0)'/>}
      <button onClick={handleLogOut}><FiLogOut/></button>
    </Container>
  )
}