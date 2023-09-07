import { Container } from './style'
import { useState } from 'react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

export function Count() {
  const [value, setValue] = useState(1)
  const [valueFinal, setValueFinal] = useState(0)

  function handleSubValue() {
    if(value > 1) {
      setValue(value -1)
    }
  }

  function handleSumValue() {
    if(value >= 100) {
      return
    }

    setValue(value +1)
  }

  const formattedValue = value < 10 ? `0${value}` : value
  
  return(
    <Container>
      <button onClick={handleSubValue}>
        <AiOutlineMinus/>
      </button>
      <div>
        <input type='number' maxLength='2' value={formattedValue} readOnly/>
      </div>
      <button onClick={handleSumValue}>
        <AiOutlinePlus/>
      </button>
    </Container>
  )
}
