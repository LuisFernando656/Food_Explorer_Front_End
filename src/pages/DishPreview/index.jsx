import { Container, Content } from "./styles";

import { Header } from '../../components/Header'
import { HeaderDesktop } from '../../components/HeaderDesktop'
import { BackLink } from '../../components/BackLink'
import { ReservedRights } from '../../components/ReservedRights'
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { Count } from "../../components/Count";
import { PiReceipt } from 'react-icons/pi'

import {useResponsive} from '../../hooks/useResponsive'
import { useAuth } from "../../hooks/auth";

import { useNavigate, useParams } from "react-router-dom";
import { useFetchDish } from '../../hooks/useFetchDish';

import testeImg from '../../assets/teste.svg'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function DishPreview() {
  const [price, setPrice] = useState('')
  const [imagePreview, setImagePreview] = useState()
  const [value, setValue] = useState(1)

  const {isDesktop} = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  const navigate = useNavigate()
  const params = useParams()
  const {dishData, loading} = useFetchDish(params.id)

  function handleBack() {
    navigate(-1)
  }

  const receiveValue = (value) => {
    setValue(value)
  }

  function handleNavigateEditDish() {
    navigate(`/edit/${dishData.id}`)
  }

  useEffect(() => {
    function dataInsert() {
      if(!loading) {

        const finalPrice = dishData.price * value
  
        const priceFormatted = finalPrice.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })

        const imageUrl = `${api.defaults.baseURL}/files/${dishData.image}`
        setImagePreview(imageUrl)
  
        setPrice(priceFormatted)
      }
    }

    dataInsert()
  },[loading, value])

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}
      <main>
        <BackLink onClick={handleBack}/>
        {dishData &&
        <Content>
          <div>
            <img src={imagePreview} alt="Foto do Prato" />
          </div>
          <div>
            <h3>{dishData.name}</h3>
            <p>{dishData.description}</p>

              {dishData.ingredients && dishData.ingredients.length > 0 && 
                <div>
                  {
                    dishData.ingredients.map(ingredent => (
                      <Ingredient key={ingredent.id} title={ingredent.name}/>
                    ))
                  }
                </div>
              }

            {isAdmin ? <Button title='Editar Prato' onClick={handleNavigateEditDish}/> : <div> <Count handleSubValue={receiveValue} handleSumValue={receiveValue}/> {isDesktop? <Button title={`incluir ∙ ${price}`} />  : <Button icon={PiReceipt} title={`pedir ∙ ${price}`} />}  </div>}
         </div>
        </Content>
        } 
      </main>
      <ReservedRights/>
    </Container>
  )
}