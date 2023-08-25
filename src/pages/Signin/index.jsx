import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    alert('vc clicou')
  }

  return (
    <Container>
      <Logo/>
      <Form>
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
        <a href="/">Criar uma conta</a>
    </Container>
  )
}