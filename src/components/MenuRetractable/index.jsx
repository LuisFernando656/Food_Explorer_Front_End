import { Container, MenuHeader, MenuContent} from "./styles";
import { FiX, FiSearch } from 'react-icons/fi'
import { Input } from "../input";
import { ReservedRights } from '../ReservedRights'

import { useNavigate} from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

import { useEffect, useState } from "react";

export function MenuRetractable({setMenuOpen, isAdmin, menuOpen}) {
  const { setSearch } = useSearch();
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleLogOut() {
    const confirm = window.confirm('Tem certeza que deseja sair ?')
    
    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeySearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)

      setMenuOpen(false)

      navigate('/')
    }
  }

  function handleMenuOpen() {
    setMenuOpen(false)
  }

  function handleNewDishe() {
    navigate('/new')
  }

  useEffect(() => {
    if (!menuOpen) {
      document.body.classList.remove("menu-open")
      document.body.style.overflow = 'auto'
    } else {
      document.body.classList.add("menu-open")
      document.body.style.overflow = 'hidden'
    }
  }, [menuOpen])

  return (
    <Container>
      <div className={`menu-retractable ${menuOpen ? "open" : ""}`}>
        <MenuHeader>
          <button onClick={() => handleMenuOpen()}>
            <FiX/>
          </button>
          <h2>Menu</h2>
        </MenuHeader>
        <MenuContent>
          <Input
          type="search" 
          placeholder='Busque por pratos ou ingredientes' 
          icon={FiSearch} 
          onChange={handleChange}
          onKeyPress={handleKeySearch}
          />
          <div>
          {isAdmin ? <button onClick={handleNewDishe}>Novo Prato</button> : null}
          <button onClick={handleLogOut}>Sair</button>
          </div>
        </MenuContent>
        <ReservedRights/>
      </div>
    </Container>
  )
}