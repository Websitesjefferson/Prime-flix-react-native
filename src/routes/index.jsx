import  { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import { AuthApp } from './auth';
import {AppRoutes} from './app';

export function Routes(){
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#131313"/>
        </View>

    }

    
    return(
        signed ? <AppRoutes/> : <AuthApp/>
    )
}

