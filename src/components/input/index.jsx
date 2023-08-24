import { Container } from './styles'

export function Input({icon: Icon, label, ...rest}) {
  return(
    <Container>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <div>
        {Icon && <Icon size={20}/>}
        <input {...rest}/>
      </div>
    </Container>
  )
}