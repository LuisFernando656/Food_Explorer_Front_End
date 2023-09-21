import { Container } from "./styles";
import * as HiIcons from 'react-icons/hi'
import { PiPencilSimple } from 'react-icons/pi'
import { Count } from "../Count";

import TextTruncate from "react-text-truncate";

import { api } from "../../services/api";

import {useResponsive} from '../../hooks/useResponsive'
import { useState } from "react";

import { Button } from '../../components/Button'

import { useNavigate } from "react-router-dom";

export function Dishes({ data,  isAdmin, ...rest}) {
  const [value, setValue] = useState(1)
  const [fav, setFav] = useState(false)

  const {isDesktop} = useResponsive()
  const navigate = useNavigate()

  const ImageURL = `${api.defaults.baseURL}/files/${data.image}`
  const priceBD = data.price
  const finalPrice = priceBD * value
  let formattedPrice = 0

  const receiveValue = (value) => setValue(value)
  
  const toggleFav = () => setFav(!fav)
  
  function handleNavigateEditDish() {
    navigate(`/edit/${data.id}`)
  }

  function handleNavigateDishPreview(event) {
    if (event.target === event.currentTarget) {
      navigate(`/dishpreview/${data.id}`)
    }
  }
  
  function priceFormat() {
    formattedPrice = finalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedPrice
  }

  priceFormat()

  return (
    <Container {...rest} onClick={handleNavigateDishPreview}>
      {isAdmin ? <button onClick={handleNavigateEditDish}><PiPencilSimple/></button> : <button onClick={toggleFav}>{fav ? <HiIcons.HiHeart/> : <HiIcons.HiOutlineHeart/>}</button>}
     
      <div >
      <img
      onClick={handleNavigateDishPreview}
       src={ImageURL} 
       alt="Imagem do prato" 
       />

     </div>

      <h3 onClick={handleNavigateDishPreview}>
        {data.name} &nbsp; &#x276F;
      </h3>

      {isDesktop && <p onClick={handleNavigateDishPreview}>{data.description}</p>}

      <h4 onClick={handleNavigateDishPreview}>{formattedPrice}</h4>

      <div>
        {isAdmin ? <></> : 
        <Count handleSubValue={receiveValue} handleSumValue={receiveValue}/>
        }

        {isAdmin ? <></> : <Button title='incluir'/> }
      </div>
    </Container>
  )
}