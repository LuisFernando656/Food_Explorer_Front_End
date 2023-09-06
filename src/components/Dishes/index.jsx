import { Container } from "./styles";
import { FiHeart } from 'react-icons/fi'
import { PiPencilSimple } from 'react-icons/pi'
import { Count } from "../Count";

import testeImg from '../../assets/teste.svg'

import {useResponsive} from '../../hooks/useResponsive'

import { Button } from '../../components/Button'

export function Dishes({ data, isAdmin, ...rest}) {
  const {isDesktop} = useResponsive()

  return (
    <Container {...rest}>
      {isAdmin ? <button><PiPencilSimple/></button> : <button><FiHeart/></button>}
     
      <img
       src={testeImg} 
       alt="Imagem do prato" 
       />

      <h3>
        {data.name} &nbsp; &#x276F;
      </h3>

      {isDesktop && <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>}

      <h4>R$ {data.price}</h4>

      <div>
        {isAdmin ? <></> : 
        <Count/>
        }

        {isAdmin ? <></> : <Button title='incluir'/> }
      </div>
    </Container>
  )
}