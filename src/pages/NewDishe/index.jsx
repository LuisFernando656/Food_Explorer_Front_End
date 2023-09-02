import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { ReservedRights } from '../../components/ReservedRights'
import { BackLink } from '../../components/BackLink'
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button"

import { PiUploadSimple } from 'react-icons/pi'


export function NewDishe(isAdmin=true) {
  return (
    <Container>
      <Header isAdmin={isAdmin}/>

      <main>
        <BackLink/>

        <Form>
          <h3>Novo prato</h3>
          
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
            <option value='1'>Pratos Principais</option>
            <option value='2'>Refeições</option>
            <option value='3'>Sobremesas</option>
            <option value='4'>Bebidas</option>
          </select>
          </div>

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