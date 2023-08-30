import { Container, Content } from "./styles";

import { Header } from '../../components/Header'
import { BackLink } from '../../components/BackLink'
import { ReservedRights } from '../../components/ReservedRights'
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { Count } from "../../components/Count";
import { PiReceipt } from 'react-icons/pi'

import testeImg from '../../assets/teste.svg'

export function DishePreview({isAdmin=false}) {

  const data = {
    id: 1,
    name: 'Salada Ravanello',
    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
  }

  let amount = 25

  return (
    <Container>
      <Header isAdmin={isAdmin}/>
      <main>
        <BackLink/>
        {data &&
        <Content>
         <img src={testeImg} alt="Foto do Prato" />
         <h3>{data.name}</h3>
         <p>{data.description}</p>

          {/* {data.ingredents && 
            // <div>
            //   {
            //     data.ingredents.map(ingredent => (
            //       <div key={ingredent.name}> 
            //         {ingredent.name}
            //       </div> 
            //     ))
            //   }
            // </div>
          } */}

          <div>
            <Ingredient title='alface'/>
            <Ingredient title='cebola'/>
            <Ingredient title='pão naan'/>
            <Ingredient title='pepino'/>
            <Ingredient title='rabanete'/>
            <Ingredient title='tomate'/>
          </div>

          {isAdmin ? <Button title='Editar Prato'/> : <div> <Count/> <Button icon={PiReceipt} title={`pedir ∙ R$ ${amount}`}/> </div>}
        </Content>
        } 
      </main>
      <ReservedRights/>
    </Container>
  )
}