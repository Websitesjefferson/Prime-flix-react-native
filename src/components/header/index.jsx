import { useContext, useState } from 'react';


import { Container } from './styles'
import { TouchableOpacity, View, Text, ActivityIndicator} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'



export function Header(){
 
    const { signOut, user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    function handleSignOut(){
        setLoading(true)
        signOut()
    }
  
    return(
        <Container>
            <View >
               <Text style={{fontSize: 20, fontWeight: 'bold'}}> 
               <Text style={{fontSize: 22}}>Olá,</Text> {user && user.name}</Text>
            </View>

          
            <TouchableOpacity onPress={handleSignOut}>
            {loading ? <ActivityIndicator size="large" color="#131313"/> : <FontAwesome5 name="power-off" size={30} color="black" />}
            </TouchableOpacity>
            
        </Container>
    )
}