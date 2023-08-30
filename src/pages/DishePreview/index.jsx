import { Container } from "./styles";
import { Header } from '../../components/Header'
import { BackLink } from '../../components/BackLink'
import { ReservedRights } from '../../components/ReservedRights'


export function DishePreview() {
  return (
    <Container>
      <Header/>
      <main>
        <BackLink/>
      </main>
      <ReservedRights/>
    </Container>
  )
}