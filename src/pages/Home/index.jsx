import { Container, IntroDescription, EmptyDishesMessage } from "./styles";
import { Header } from '../../components/Header'
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ReservedRights } from '../../components/ReservedRights'
import { FoodSection } from "../../components/FoodSection";
import { Dishes } from "../../components/Dishes";

import { useState, useEffect } from "react";

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { api } from '../../services/api'

import { useResponsive } from "../../hooks/useResponsive";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

import introImageMobile from '../../assets/introImageMobile.png'
import introImageDesktop from '../../assets/IntroImageDesktop.png'

export function Home() {
  const [ dishes, setDishes ] = useState([])
  const { search , setSearch } = useSearch()
  const [ categories, setCategorys ] = useState([])

  const { isDesktop } = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`)

      const fetchedDishes = response.data

      setDishes(fetchedDishes)
    }

    async function fetchCategory() {
      const response = await api.get('/category')
      setCategorys(response.data)
    }
    
    fetchDishes()
    fetchCategory()
  },[search])

  useEffect(() => {
    setSearch('')
  },[])

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}
      <main>
        <IntroDescription>
          {isDesktop ? <img src={introImageDesktop} alt="Imagem de introdução a Home Page" />  : <img src={introImageMobile} alt="Imagem de introdução a Home Page" />}
          <div>
            <div>
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </IntroDescription>
        
        <div>
          {
            categories.map(category => {
              const categoryDishes = dishes.filter(dishe => dishe.category_id === category.id) 

              if(categoryDishes.length > 0) {
                return (
                <FoodSection data={category} dishes={categoryDishes} key={String(category.id)}>
                  {isDesktop ? (
                    categoryDishes.map(dishe => (
                    <SwiperSlide key={String(dishe.id)}> 
                        <Dishes data={dishe} isAdmin={isAdmin} key={String(dishe.id)}/>
                    </SwiperSlide>
                    ))
                    ) : (  
                      categoryDishes.map(dishe => (
                      <Dishes data={dishe} isAdmin={isAdmin} key={String(dishe.id)}/>
                    ))
                    )}
                </FoodSection>
                )
              }
            })
          } 
          
        </div>
        
          {
            dishes.length === 0 && (
              <div>
                {isAdmin ? (
                  <EmptyDishesMessage>Nenhum prato encontrado, adicione um novo ou tente outra consulta</EmptyDishesMessage>
                ) : (
                  <EmptyDishesMessage>Nenhum prato encontrado, tente outra consulta</EmptyDishesMessage>
                )}
              </div>
            )
          }
      </main>

      <ReservedRights/>
    </Container>
  )
}