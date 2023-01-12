import { useState, useEffect, useCallback} from "react";
import { useRoute, useNavigation } from '@react-navigation/native'
import { ScrollView, ActivityIndicator, View, ToastAndroid } from "react-native";

import { Container, ContainerImage,  CardImage, CardText, CardOverview,ContainerButton, Button,ButtonSave ,ButtonText} from './styles'
import { Api } from "../../services/api";
import { HeaderBack } from '../../components/headerBack'
import Webview from 'react-native-webview'
import AsyncStorage from "@react-native-async-storage/async-storage";


export function Details(){

    const { navigate } = useNavigation()
    const routes = useRoute()
    const { id } = routes.params
    const [ movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [go, setGo] = useState(false)
    

   
   
   useEffect(() => {
        async function loadFilmes(){
      const response =  await Api.get(`/movie/${id}`,{
                params: {
                    api_key: "1f986a550f568f4b00d057a1fb31f754",
                    language: 'pt-BR',
                    
                }
    
            })
             
            setMovie(response.data)
            setLoading(false)
           }
        loadFilmes()
  }, [id])
  
    if(loading){
      return(
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#131313" />
          </View>
      )
  }

 async function saveMovie(){

    const myList= await AsyncStorage.getItem('@movie')

    let saveMovie = JSON.parse(myList) || []

    const hasMovie = saveMovie.some( (movieSave) => movieSave.id === movie.id)

    if(hasMovie){
      ToastAndroid.show('Esse filme já etá na lista', ToastAndroid.TOP)
      return
    }

    saveMovie.push(movie)
    await AsyncStorage.setItem('@movie', JSON.stringify(saveMovie))
    ToastAndroid.show('Filme salvo com sucesso', ToastAndroid.TOP)

   

   }

  if(go == false){
    return(
    
       <> 
       <HeaderBack onPress={ () => navigate('Home')} />
     <ScrollView showsVerticalScrollIndicator={false}>
     
      
        <Container>

         
             
          
            <CardText>{movie.title}</CardText>
            <ContainerImage>
            <CardImage source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}}/>
            </ContainerImage>

            <CardText>Sinopse</CardText>
            
            <CardOverview>{movie.overview}</CardOverview>

            <CardOverview>Data de lançamento: {movie.release_date}</CardOverview>

            <CardOverview>Avaliação: {movie.vote_average}</CardOverview>

           <ContainerButton>
            <Button onPress= {() => setGo(true)}>
             <ButtonText>Trailer</ButtonText>
            </Button>

            <ButtonSave onPress={saveMovie}>
                <ButtonText>Salvar filme</ButtonText>
            </ButtonSave>

          </ContainerButton>
        </Container>
        </ScrollView>
        </>
    )} else {
      return( 
       <>
        <HeaderBack onPress={ () => setGo(false)}/>
        <Webview  source={{uri: `https://www.youtube.com/results?search_query=${movie.title} trailer`}}/>
       </>
      )
    }

}