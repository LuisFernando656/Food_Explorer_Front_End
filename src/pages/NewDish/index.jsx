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
import { currencyMask } from "../../hooks/useCurrencyMask";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { PiUploadSimple } from 'react-icons/pi'

export function NewDish() {
  const [dishImage, setDishImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState(1)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [buttonActive, setButtonActive] = useState(true)
  const [names, setNames] = useState([])
  const [prefix, setPrefix] = useState('')
  
  const { isDesktop } = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  
  const navigate = useNavigate()

  function handleChangeDishImage(event){
    const file = event.target.files[0]
    setDishImage(file)
  }  
  
  function handleAddIngredient() {
    if(!newIngredient) {
      return
    }
    
    if(!ingredients.includes(newIngredient)) {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('')
    }else {
      alert('Esse ingrediente ja está adicionado')
    }
  }
  
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDishe() {
    if (names.includes(name)) {
      return alert('Esse ingrediente ja foi criado')
    }

    const priceNumber = parseFloat(price.replace(',', '.'))

    if ((priceNumber * 100) % 1 !== 0) {
      return alert('O preço não pode ter mais de duas casas decimais.')
    }

    if(newIngredient) {
      return alert('Você deixou uma ingrediente sem confirmar')
    }

    const formData = new FormData();
    formData.append('image', dishImage); 
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category_id', category)

    ingredients.forEach((ingredient) => {
      formData.append('ingredients[]', ingredient);
    })

    await api.post('/dishes', formData,{ headers: {
      'Content-Type': 'multipart/form-data',
    }})

    alert('Prato criado com sucesso')
    navigate('/')
  }
  
  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNames() {
      const response = await api.get('/dishes?name')
      const fetchedNames = response.data.map(dishe => dishe.name)
      setNames(fetchedNames)
    }
    
    fetchNames()
  },[])

  useEffect(() => {
    function PrefixChange() {
      if(!price) {
        setPrice(0)
        setPrefix('')
      }
    }

    PrefixChange() 
  },[price])
  
  useEffect(() => {
    if(
      name && 
      dishImage && 
      category && 
      ingredients.length > 0 && 
      price && 
      description
    ) {
      setButtonActive(false)
    }else {
      setButtonActive(true)
    }
  }, [[name, dishImage, category, ingredients, price, description]])

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}

      <main>
        <BackLink onClick={handleBack}/>

        <Form onSubmit={(e) => e.preventDefault()}>
          {isDesktop? <h3>Adicionar Prato</h3>  : <h3>Novo prato</h3>}

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
            placeholder='Ex.: Salada Ceasar'
            onChange={e => setName(e.target.value)}
            />
            
            <div>
            <label htmlFor="selectCategory">Categoria</label>
            <select name="Categoria" id="selectCategory" onChange={e => setCategory(e.target.value)}>
              <option value={1}>Prato Principal</option>
              <option value={2}>Refeição</option>
              <option value={3}>Sobremesa</option>
              <option value={4}>Bebida</option>
            </select>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="ingredientInput">Ingredientes</label>
              <div>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }
                <IngredientItem
                isNew 
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
            placeholder='R$ 00,00' 
            type='text'
            prefix={prefix}
            onKeyUp={(e) => currencyMask(e.target, setPrice, setPrefix)}
            />
          </div>

          <div>
            <label htmlFor="textAreaInput">Descrição</label>
            <Textarea
            id='textAreaInput' 
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button
          title='Salvar alterações'
          loading={buttonActive}
          onClick={handleNewDishe}
          />
        
        </Form>
      </main>

      <ReservedRights/>
    </Container>
  )
}