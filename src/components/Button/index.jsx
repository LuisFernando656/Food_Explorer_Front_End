import { Container } from './styles'

export function Button({icon: Icon, title, loading = false, ...rest}) {
  return (
    <Container disabled={loading} {...rest}>
      {Icon && <Icon size={20}/>}{loading ? 'Carregando' : title}
    </Container>
  )
}