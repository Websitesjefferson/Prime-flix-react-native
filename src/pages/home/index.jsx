import { View, FlatList, ActivityIndicator,  } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from "react";

import { Header } from '../../components/header'
import { List } from '../../components/listCard'
import { AuthContext } from '../../contexts/auth'



export function Home(){

    const { filme, loading } = useContext(AuthContext)
    
    const { navigate } = useNavigation() 


    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }
    return(
        <View>
            < Header />
            
           

             <FlatList 
             data={filme}
             keyExtractor={(item) => String(item.id)}
             renderItem={ ( {item} ) => <List data={item} onPress={ () => navigate('Details', {id: item.id})}/>}
             />

            


        </View>
    )
}