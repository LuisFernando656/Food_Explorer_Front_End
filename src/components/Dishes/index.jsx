import { Container } from "./styles";
import { FiHeart } from 'react-icons/fi'
import { PiPencilSimple } from 'react-icons/pi'
import { Count } from "../Count";

import testeImg from '../../assets/teste.svg'
import { api } from "../../services/api";

import {useResponsive} from '../../hooks/useResponsive'

import { Button } from '../../components/Button'

import { useNavigate } from "react-router-dom";

export function Dishes({ data,  isAdmin, ...rest}) {
  const {isDesktop} = useResponsive()
  const navigate = useNavigate()

  const ImageURL = `${api.defaults.baseURL}/files/${data.image}`
  const priceBD = data.price
  let formattedPrice = 0
  
  function handleNavigateEditDishe() {
    navigate(`/edit/${data.id}`)
  }
  
  function priceFormat() {
    formattedPrice = priceBD.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedPrice
  }

  priceFormat()

  return (
    <Container {...rest}>
      {isAdmin ? <button onClick={handleNavigateEditDishe}><PiPencilSimple/></button> : <button><FiHeart/></button>}
     
     <div>
      <img
       src={ImageURL} 
       alt="Imagem do prato" 
       />

     </div>

      <h3>
        {data.name} &nbsp; &#x276F;
      </h3>

      {isDesktop && <p>{data.description}</p>}

      <h4>{formattedPrice}</h4>

      <div>
        {isAdmin ? <></> : 
        <Count/>
        }

        {isAdmin ? <></> : <Button title='incluir'/> }
      </div>
    </Container>
  )
}