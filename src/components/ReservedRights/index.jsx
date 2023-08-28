import { Container } from "./styles";
import { Logo } from '../Logo'

export function ReservedRights({Desktop, ...rest}) {
  return (
    <Container>
      <Logo/>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}