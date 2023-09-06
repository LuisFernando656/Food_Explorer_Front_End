import { Container, IntroDescription } from "./styles";
import { Header } from '../../components/Header'
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { ReservedRights } from '../../components/ReservedRights'
import { FoodSection } from "../../components/FoodSection";
import { Dishes } from "../../components/Dishes";

import { useState, useEffect } from "react";

import { useResponsive } from "../../hooks/useResponsive";

import introImageMobile from '../../assets/introImageMobile.png'
import introImageDesktop from '../../assets/IntroImageDesktop.png'

export function Home({isAdmin=false, data}) {
  const { isDesktop } = useResponsive()
  
  const disheData = {
    name: 'Salada Ravanello',
    price: '49,97'
  }

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
          <FoodSection data={data={category_id: 'Refeições'}}>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
          </FoodSection>
          <FoodSection data={data={category_id: 'Refeições'}}>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>

          </FoodSection>

          <FoodSection data={data={category_id: 'Refeições'}}>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
          </FoodSection>
          <FoodSection data={data={category_id: 'Refeições'}}>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
            <Dishes isAdmin={isAdmin} data={disheData}/>
          </FoodSection>
        </div>
      </main>

      <ReservedRights/>
    </Container>
  )
}