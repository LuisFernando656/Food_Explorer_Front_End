import { Container } from "./styles";

export function FoodSection({data, children}) {
  return (
    <Container>
      <h3>{data.category_id}</h3>
      <div>
        <div>
          {children}
        </div>
      </div>
    </Container>
  )
}