import { Container } from "./styles";

import { useResponsive } from "../../hooks/useResponsive";

import { FiChevronRight , FiChevronLeft} from 'react-icons/fi'

export function FoodSection({data, children}) {
  const { isDesktop } = useResponsive()

  return (
    <Container>
      <h3>{data.name}</h3>
      <div>
      {isDesktop && <div>
        <button>
         <FiChevronLeft/>
        </button>
      </div>}
      {isDesktop && <div>   
        <button>
          <FiChevronRight/>
        </button>
      </div> }

      <div>
        <div>
          {children}
        </div>
      </div>
      </div>
    </Container>
  )
}