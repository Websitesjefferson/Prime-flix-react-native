import { FontAwesome } from '@expo/vector-icons'

import {Container, Button, TextContainer } from './styles'

export function HeaderBack({...rest}){
    return(
        <Container>
            <Button {...rest}>
            <FontAwesome name="chevron-left" size={24} color="black" />
            

            <TextContainer>Voltar</TextContainer>
            </Button>
        </Container>
  )
}