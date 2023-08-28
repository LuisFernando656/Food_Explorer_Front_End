import { Container } from "./styles";
import { Header } from '../../components/Header'
import { ReservedRights } from '../../components/ReservedRights'

export function Home() {
  return (
    <Container>
      <Header/>
      <ReservedRights/>
    </Container>
  )
}