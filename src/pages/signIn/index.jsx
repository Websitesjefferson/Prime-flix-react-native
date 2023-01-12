import { useNavigation} from '@react-navigation/native'
import { useState, useContext } from 'react'
import { Container, Input, SubmitButton, SubmitText,Link, LinkText, Logo } from "./styles"

import { AuthContext } from '../../contexts/auth'
import { ActivityIndicator } from 'react-native'
export function SignIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const navigation = useNavigation()
    const { signIn } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    function handleSignIn(){
        setLoading(true)
        signIn(email, password)

       
    }
    return(
        
        
        <Container>

            <Logo>
                Prime Flix
            </Logo>

            <Input 
            placeholder='Email'
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text)}/>

            <Input 
            placeholder='Senha'
            secureTextEntry={true}
            value={password}
            onChangeText={ (text) => setPassword(text)}/>

            <SubmitButton onPress={handleSignIn}>
                <SubmitText>
                    {loading ? <ActivityIndicator size="large" color="#131313"/> : 'Acessar'}
                </SubmitText>
            </SubmitButton>

            <Link>
               <LinkText onPress={ () => navigation.navigate('SignUp')}>
                 Criar uma conta!
               </LinkText>
            </Link>




        </Container>
        
        
    )
}