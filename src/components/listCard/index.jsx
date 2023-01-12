import {  Image, TouchableOpacity, ScrollView } from "react-native";

import { Container, TextCard, ImageCard } from './styles'


export function List({ data, ...rest }){

    
  
    return(
       
        <Container >
            
            <TextCard>{data.title}</TextCard>
         
         <TouchableOpacity {...rest}>
            <Image style={{height: 550,}} source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}`}}/>
        </TouchableOpacity>
        
        </Container>
        
    )
}