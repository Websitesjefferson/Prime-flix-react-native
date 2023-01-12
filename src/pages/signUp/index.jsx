import { useState, useContext } from "react"
import { Container, Input, SubmitButton, SubmitText,Link, LinkText } from "../signIn/styles"

import { AuthContext } from '../../contexts/auth'
import { ActivityIndicator } from 'react-native'

export function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { signUp } = useContext(AuthContext)

    function handleSignUp(){
        setLoading(true)
        signUp(name, email, password)
    }
    return(
        <Container>

           
           <Input 
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={ (text) => setName(text)}
            />

            <Input 
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text)}
            />

            <Input 
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={ (text) => setPassword(text)}
            />

            <SubmitButton onPress={handleSignUp}>
                <SubmitText>
                    {loading ? <ActivityIndicator size="large" color="#131313"/> : 'Cadastrar'}
                </SubmitText>
            </SubmitButton>

          




        </Container>
    )
}