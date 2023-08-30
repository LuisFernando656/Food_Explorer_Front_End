import { Container } from './style'
import { useState } from 'react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

export function Count() {
  const [value, setValue] = useState(1)

  function handleInputValue(event) {
    setValue(event.target.value)
  }
  
  return(
    <Container>
      <button onClick={() => setValue(value - 1)}>
        <AiOutlineMinus/>
      </button>
      <input value={value} onChange={handleInputValue}/>
      <button onClick={() => setValue(value + 1)}>
        <AiOutlinePlus/>
      </button>
    </Container>
  )
}
