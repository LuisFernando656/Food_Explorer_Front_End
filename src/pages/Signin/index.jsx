import { Container, Form, Content } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { useState, useEffect } from 'react'

import { useResponsive } from '../../hooks/useResponsive'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isDesktop } = useResponsive()

  function handleSubmit() {
    alert('vc clicou')
  }

  return (
    <Container>
      <main>
        <Logo/>
        <Content>
          <Form>
            {isDesktop && <h3>Faça login</h3>}
            <Input 
            label="Email" 
            id='InputEmail' 
            type='email' 
            pattern=".+@.+\.com\.br" 
            placeholder='Exemplo: exemplo@exemplo.com.br'
            onChange={e => setEmail(e.target.value)}
            />
            <Input 
            label="Senha" 
            id='InputSenha' 
            type='password' 
            placeholder='No mínimo 6 caracteres'
            onChange={e => setPassword(e.target.value)}
            />

            <Button 
            type='button' 
            title='Entrar' 
            onClick={handleSubmit}
            />
          </Form>
          <a href="/register">Criar uma conta</a>
        </Content>
      </main>
    </Container>
  )
}