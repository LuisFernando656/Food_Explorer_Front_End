import { Container, Form, Content } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { useState, useEffect } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize(){
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  function handleSubmit() {
    alert('vc clicou')
  }

  return (
    <Container>
      <main>
        <Logo/>
        <Content>
          <Form>
            {windowWidth > 768 && <h3>Faça login</h3>}
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
        </Content>
      </main>
    </Container>
  )
}