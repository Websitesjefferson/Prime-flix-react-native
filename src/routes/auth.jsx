import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../pages/signIn'
import { SignUp } from '../pages/signUp'
import { Home } from '../pages/home'

export function AuthApp(){
  const  AuthStack = createStackNavigator()
    return(
        <AuthStack.Navigator>

            <AuthStack.Screen name='SignIn' component={SignIn} options={{
                headerShown: false
            }}/>

            <AuthStack.Screen name='SignUp' component={SignUp} options={{
                 headerStyle:{
                 backgroundColor: '#131313',
                 borderBottomWidth: 1
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}/>

            <AuthStack.Screen name='home' component={Home}/>

        </AuthStack.Navigator>

    )

}