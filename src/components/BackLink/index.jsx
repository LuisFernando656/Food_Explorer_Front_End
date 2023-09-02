import { Container } from "./styles";
import { FiChevronLeft } from 'react-icons/fi'

export function BackLink({addres, ...rest}) {
  return (
    <Container {...rest}>
      <a href={addres}>
      <FiChevronLeft/>
      voltar
      </a>
    </Container>
  )
}