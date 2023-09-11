import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ReservedRights } from '../../components/ReservedRights'
import { BackLink } from '../../components/BackLink'
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button"

import { useResponsive } from "../../hooks/useResponsive";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { PiUploadSimple } from 'react-icons/pi'

export function NewDishe() {
  const {isDesktop} = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}

      <main>
        <BackLink onClick={handleBack}/>

        <Form>
          {isDesktop? <h3>Adicionar Prato</h3>  : <h3>Novo prato</h3>}

          <div>
            <label htmlFor="disheImage">
              <span>imagem do prato</span>
              <div>
                <input
                type="file" 
                id='disheImage' 
                />
                <PiUploadSimple/>
                <span>Selecione imagem</span>
              </div>
            </label>

            <Input 
            type='text' 
            label='Nome' 
            id='inputNome' 
            placeholder='Ex.: Salada Ceasar'
            />
            
            <div>
            <label htmlFor="selectCategory">Categoria</label>
            <select name="Categoria" id="selectCategory">
              <option value='1'>Prato Principal</option>
              <option value='2'>Refeição</option>
              <option value='3'>Sobremesa</option>
              <option value='4'>Bebida</option>
            </select>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="ingredientInput">Ingredientes</label>
              <div>
                <IngredientItem isNew={false} value='Pão Naanmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'/>
                <IngredientItem isNew={false} value='Pão Naan'/>
                <IngredientItem isNew={false} value='Pão Naan'/>
                <IngredientItem isNew={false} value='Pão Naan'/>
                <IngredientItem isNew={true} placeholder='Adicionar'/>
              </div>
            </div>

            <Input label='Preço' id='priceInput' placeholder='R$ 00,00' type='number'/>
          </div>

          <div>
            <label htmlFor="textAreaInput">Descrição</label>
            <Textarea id='textAreaInput' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
          </div>

          <Button title='Salvar alterações'/>
        
        </Form>
      </main>

      <ReservedRights/>
    </Container>
  )
}