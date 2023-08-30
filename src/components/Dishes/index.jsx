import { Container } from "./styles";
import { FiHeart, FiChevronRight } from 'react-icons/fi'
import { PiPencilSimple } from 'react-icons/pi'
import { Count } from "../Count";

import testeImg from '../../assets/teste.svg'

import { Button } from '../../components/Button'

export function Dishes({ data, isAdmin, ...rest}) {
  return (
    <Container {...rest}>
      {isAdmin ? <button><PiPencilSimple/></button> : <button><FiHeart/></button>}
     
      <img
       src={testeImg} 
       alt="Imagem do prato" 
       />

      <h3>
        {data.name}
        <FiChevronRight/>
      </h3>

      <h4>R$ {data.price}</h4>

      {isAdmin ? <></> : 
      <Count/>
      }

      {isAdmin ? <></> : <Button title='incluir'/> }
    </Container>
  )
}