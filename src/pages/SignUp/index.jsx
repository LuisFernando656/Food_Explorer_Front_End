import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { useState } from 'react'

export function SignUp() {
  const [name, setName] = useState('')
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
        label="Seu nome" 
        id='InputNome' 
        type='text' placeholder='Exemplo: Maria da Silva'
        onChange={e => setName(e.target.value)}
        />
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

        <Button type='submit' title='Criar conta' onClick={handleSubmit}/>
      </Form>
    </Container>
  )
}