import { Container, Form, Content } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { useState, useEffect } from 'react'

import { useResponsive } from '../../hooks/useResponsive'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const { signIn } = useAuth()
  const { isDesktop } = useResponsive()

  function handleSignIn() {
    signIn({ email, password})
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
            onClick={handleSignIn}
            />
          </Form>
          <a href="/register">Criar uma conta</a>
        </Content>
      </main>
    </Container>
  )
}