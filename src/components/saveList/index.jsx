import { Container, TextList,ContainerButton, Button, ButtonText, } from "./styles"

export function SaveList({data, deleteMovie, ...rest}){

    return(
        <Container>

            <TextList>
                {data.title}
            </TextList>

        <ContainerButton>
            <Button>
                <ButtonText onPress={ deleteMovie }>
                    Ver detalhes
                </ButtonText>
            </Button>

            <Button {...rest}>
                <ButtonText >
                    Excluir
                </ButtonText>
            </Button>
        </ContainerButton>
        </Container>

    )
}