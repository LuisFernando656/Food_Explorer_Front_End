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

import testeImg from '../../assets/teste.svg'

export function DishePreview({isAdmin=true}) {
  const {isDesktop} = useResponsive()

  function formattedValueBRL(num) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(num)
  }

  const data = {
    id: 1,
    name: 'Salada Ravanello',
    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
  }

  let amount = 25
  const formattedAmount = formattedValueBRL(amount)

  return (
    <Container>
      {isDesktop ? <HeaderDesktop isAdmin={isAdmin}/> : <Header isAdmin={isAdmin}/>}
      <main>
        <BackLink/>
        {data &&
        <Content>
          <div>
            <img src={testeImg} alt="Foto do Prato" />
          </div>
          <div>
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

            {isAdmin ? <Button title='Editar Prato'/> : <div> <Count/> {isDesktop? <Button title={`incluir ∙ ${formattedAmount}`} />  : <Button icon={PiReceipt} title={`pedir ∙ ${formattedAmount}`} />}  </div>}
         </div>
        </Content>
        } 
      </main>
      <ReservedRights/>
    </Container>
  )
}