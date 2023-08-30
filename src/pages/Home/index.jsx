import { Container, IntroDescription } from "./styles";
import { Header } from '../../components/Header'
import { ReservedRights } from '../../components/ReservedRights'
import { FoodSection } from "../../components/FoodSection";
import { Dishes } from "../../components/Dishes";

import introImage from '../../assets/pngegg 2.png'

export function Home({isAdmin=false, data}) {
  
  const disheData = {
    name: 'Salada Ravanello',
    price: '49,97'
  }

  return (
    <Container>
      <Header isAdmin={isAdmin}/>
      <IntroDescription>
        <img src={introImage} alt="Imagem de introdução a Home Page" />
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
        </FoodSection>
        <FoodSection data={data={category_id: 'Refeições'}}>
          <Dishes isAdmin={isAdmin} data={disheData}/>
          <Dishes isAdmin={isAdmin} data={disheData}/>

        </FoodSection>
      </div>

      <ReservedRights/>
    </Container>
  )
}