import { Container } from './styles' 
import LogoIcon from '../../assets/logoIcon.svg'

export function Logo() {
  return (
    <Container>
      <img src={LogoIcon} alt="Imagem da logo Food Explorer" />
      <h1>food explorer</h1>
    </Container>
  )
}