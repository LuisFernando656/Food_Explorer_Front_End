import { Container } from './styles'

export function Input({icon: Icon, prefix, label, ...rest}) {
  return(
    <Container>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <div>
        {prefix && <span>{prefix}</span>}
        {Icon && <Icon size={20}/>}
        <input {...rest}/>
      </div>
    </Container>
  )
}