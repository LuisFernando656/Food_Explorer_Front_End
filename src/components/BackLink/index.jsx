import { Container } from "./styles";
import { FiChevronLeft } from 'react-icons/fi'

export function BackLink() {
  return (
    <Container>
      <a href="#">
      <FiChevronLeft/>
      voltar
      </a>
    </Container>
  )
}