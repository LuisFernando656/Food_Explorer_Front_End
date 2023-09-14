import { Container, IntroDescription } from "./styles";
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

import introImageMobile from '../../assets/introImageMobile.png'
import introImageDesktop from '../../assets/IntroImageDesktop.png'

export function Home( data) {
  const [dishes, setDishes] = useState([])
  const [categorys, setCategorys] = useState([])

  const { isDesktop } = useResponsive()
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${''}`)
      setDishes(response.data)
    }

    async function fetchCategory() {
      const response = await api.get('/category')
      setCategorys(response.data)
    }

    fetchDishes()
    fetchCategory()
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
            categorys.map(category => {
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
      </main>

      <ReservedRights/>
    </Container>
  )
}