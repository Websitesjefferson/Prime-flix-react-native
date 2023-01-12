import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {Home} from '../pages/home'
import { Favorites } from  '../pages/favorites'
import { Details } from '../pages/details';

const AuthTab = createBottomTabNavigator()

export function AppRoutes(){
    return(
        <AuthTab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                position: 'absolute',
                height: 60,
                borderTopWidth: 0,
                backgroundColor: '#dfdfdf',
            
                
            },
            tabBarIconStyle: {
                position: 'relative',
               
            }
        }}>
            <AuthTab.Screen name='Início' component={Home} options={{
               tabBarIcon: () => <AntDesign name="home" size={25} color="black" />,
            }}/>
            <AuthTab.Screen name='Filmes salvos' component={Favorites} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="movie-open" size={24} color="black" />
            }}/>
             <AuthTab.Screen name='Details' component={Details} options={{
                tabBarButton: () => null,
            
            }}/>
        </AuthTab.Navigator>

    )
}