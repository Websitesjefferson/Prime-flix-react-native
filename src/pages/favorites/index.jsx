import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect ,useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, ToastAndroid } from 'react-native';

import { SaveList } from '../../components/saveList'


export function Favorites() {

  const [movie, setMovie] = useState([])
  const { navigate } = useNavigation()


  useEffect(() => {

    async function LoadMMovie(){
   const listMovie = await  AsyncStorage.getItem('@movie')
   setMovie(JSON.parse(listMovie) || [])
    }
    LoadMMovie()
  },[movie])
 async function movieDelete(id){
     let filterMovie = movie.filter( (item) => {
      return (item.id !== id)
      
     })
     
     setMovie(filterMovie)
     await AsyncStorage.setItem('@movie', JSON.stringify(filterMovie))
   
     return (
    ToastAndroid.show('Filme removido com sucesso', ToastAndroid.CENTER)
     )
  }
 
  return (
    <View>

       {movie.length === 0 && 
        <Text style={{textAlign: 'center',marginTop: 100, fontSize: 16, fontWeight: 'bold'}}>
           Você não possui nenhum filme salvo
        </Text>}

      <FlatList 
      data={movie}
      keyExtractor={ (item) => String(item.id)}
      renderItem={ ({item}) => <SaveList data={item} onPress={() =>movieDelete(item.id) } 
      deleteMovie={ () => navigate('Details', {id: item.id})}
      />}
      />

    </View>
  )

}