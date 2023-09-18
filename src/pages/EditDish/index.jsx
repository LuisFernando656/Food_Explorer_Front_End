import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ReservedRights } from '../../components/ReservedRights'
import { BackLink } from '../../components/BackLink'
import { Input } from "../../components/input";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button"

import { PiUploadSimple } from 'react-icons/pi'
import { useEffect, useState } from 'react'

import { api } from "../../services/api";

import { useNavigate, useParams } from "react-router-dom";

import { useResponsive } from '../../hooks/useResponsive'
import { useAuth } from "../../hooks/auth";
import { currencyMask } from "../../hooks/useCurrencyMask";
import { useFetchDish } from '../../hooks/useFetchDish';

export function EditDish() {
  const [prefix, setPrefix] = useState('')
  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState(0)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [buttonActive, setButtonActive] = useState(true)
  
  const {isDesktop} = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  
  const navigate = useNavigate()
  const params = useParams()
  const {dishData, loading} = useFetchDish(params.id)
  
  function handleBack() {
    navigate(-1)
  }
  
  function handleChangeDishImage(event){
    const file = event.target.files[0]
    setDishImage(file)
  }  
  
  function handleAddIngredient() {
    if(!newIngredient) {
      return
    }

    const newIngredientObject = {
      id: ingredients.length > 0 ? Math.max(...ingredients.map((ingredient) => ingredient.id)) + 1 : 1,
      name: newIngredient,
    };
    
    if(!ingredients.some((ingredient) => ingredient.name === newIngredient)) {
      setIngredients(prevState => [...prevState, newIngredientObject])
      setNewIngredient('')
    }else {
      alert('Esse ingrediente ja está adicionado')
    }
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleDeleteDish() {
    await api.delete(`/dishes/${params.id}`)
    alert('Prato excluido')
    navigate('/')
  }
  
  async function handleUpdateDish() {
    try{
      if(newIngredient) {
        return alert('Você deixou uma ingrediente sem confirmar')
      }

      if(dishImage) {
        const formDataImage = new FormData();
        formDataImage.append('image', dishImage); 
        
        await api.patch(`/dishes/image/${params.id}`, formDataImage)
      }

      if(name && price && category && description){

        const unformattedPrice = parseFloat(price.replace(/[^0-9,.-]/g, '').replace(',', '.'))
  
        const formattedIngredients = ingredients.map(ingredient => ingredient.name)
  
        const updated = {
          name,
          category_id: category,
          price: unformattedPrice,
          description,
          ingredients: formattedIngredients
        }

        const dishUpdated = updated
        
        await api.put(`/dishes/${params.id}`, dishUpdated)
        
        alert('Prato atualizado')
        navigate('/')
      }else{
        return alert('Faltam itens no prato')
      }
    }catch(error){
      if(error.response){
        return alert(error.response.data.message)
      }else {
        return alert('Não foi possivel atualizar o prato')
      }
    }
  }
  
  useEffect(() => {
    function DataInsert() {
      if(!loading) {
        const priceFormatted = dishData.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
        
        setPrice(priceFormatted)
        setName(dishData.name)
        setCategory(dishData.category_id)
        setDescription(dishData.description)
        setIngredients(dishData.ingredients)
      }
    }
    
    
    function ButtonActive() {
      if(!loading){
        setButtonActive(false)
      }
    }
    
    ButtonActive()
    DataInsert()
  },[loading])
  
  useEffect(() => {
    function PrefixChange() {
      if(!loading) {
        const priceFormatted = dishData.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
  
        if(!price) {
          setPrice(priceFormatted)
          setPrefix('')
        }
      }
    }

    
    PrefixChange() 
  },[price, loading])

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}

      <main>
        <BackLink onClick={handleBack}/>

        <Form onSubmit={(e) => e.preventDefault()}>
          <h3>Editar Prato</h3>

          <div>
            <label htmlFor="dishImage">
              <span>imagem do prato</span>
              <div>
                <input
                type="file" 
                id='dishImage' 
                onChange={handleChangeDishImage}
                />
                <PiUploadSimple/>
                <span>Selecione imagem</span>
              </div>
            </label>

            <Input 
            type='text' 
            label='Nome' 
            id='inputNome' 
            placeholder={name}
            onChange={e => setName(e.target.value)}
            />
            
            <div>
            <label htmlFor="selectCategory">Categoria</label>
            <select name="Categoria" value={category} id="selectCategory" onChange={e => setCategory(e.target.value)}>
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
                {
                  ingredients.map(ingredient => (
                    <IngredientItem
                    isNew={false} 
                    value={ingredient.name} 
                    key={ingredient.id} 
                    onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }
                <IngredientItem
                isNew={true} 
                placeholder='Adicionar'
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
                />
              </div>
            </div>

            <Input 
            label='Preço' 
            id='priceInput' 
            placeholder={price}  
            type='text'
            prefix={prefix}
            onKeyUp={(e) => currencyMask(e.target, setPrice, setPrefix)}/>
          </div>

          <div>
            <label htmlFor="textAreaInput">Descrição</label>
            <Textarea 
            id='textAreaInput' 
            placeholder={description}
            onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Button 
            title='Excluir Prato'
            onClick={handleDeleteDish}
            />
            <Button 
            title='Salvar alterações' 
            loading={buttonActive}
            onClick={handleUpdateDish}
            />
          </div>
        
        </Form>
      </main>

      <ReservedRights/>
    </Container>
  )
}