import { Container } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/input'

export function SignUp() {
  return (
    <Container>
      <Logo/>
      <Input label="Seu nome" id='InputNome' type='text' placeholder='Exemplo: Maria da Silva'/>
      <Input label="Email" id='InputEmail' type='email' pattern=".+@globex\.com" size="30" required placeholder='Exemplo: exemplo@exemplo.com.br'/>
      <Input label="Senha" id='InputSenha' type='password' placeholder='No mínimo 6 caracteres'/>
    </Container>
  )
}