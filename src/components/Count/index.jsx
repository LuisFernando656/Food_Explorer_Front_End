import { Container } from './style'
import { useState } from 'react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

export function Count(props) {
  const [value, setValue] = useState(1)

  function handleSubValue() {
    if(value > 1) {
      setValue(value -1)
      props.handleSubValue(value - 1 )
    }
  }

  function handleSumValue() {
    if(value >= 99) {
      return
    }

    setValue(value +1)
    props.handleSumValue(value + 1)
  }

  const formattedValue = value < 10 ? `0${value}` : value
  
  return(
    <Container>
      <button onClick={handleSubValue}>
        <AiOutlineMinus/>
      </button>
      <div>
        <span>{formattedValue}</span>
      </div>
      <button onClick={handleSumValue}>
        <AiOutlinePlus/>
      </button>
    </Container>
  )
}
