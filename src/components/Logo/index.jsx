import { Container } from './styles' 
import {BsHexagonFill} from 'react-icons/bs'

export function Logo({isAdmin, ...rest}) {
  return (
    <Container {...rest}>
      <BsHexagonFill/>
      <div>
      <h2>food explorer</h2>
      {isAdmin ? <p>admin</p> : <></>}
      </div>
    </Container>
  )
}