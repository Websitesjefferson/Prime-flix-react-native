import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import firebase from "../services/firebaseConnection";
import { Api } from '../services/api'



export const AuthContext = createContext()

 function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [filme, setFilme] = useState([])

    useEffect(() => {
        async function loadStorage(){
       const userStorage = await AsyncStorage.getItem('user_filme', )

       if(userStorage){ 
        setUser(JSON.parse(userStorage))
        setLoading(false)
    }
         
        }
        loadStorage()
    }, [])

    async function signIn(email, password){
       
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                  uid: uid,
                  name: snapshot.val().name,
                  email: value.user.email,
                };
  
                setUser(data);
                UserStorage(data)
                setLoading(false)
               
               
            })
        })
        .catch((error)=> {
            alert(error.code);
           
        });
  
       }
  
       async function signUp(name, email, password){
  
        await firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                };
                 setUser(data)
                 UserStorage(data)
                 
            })
  
          })
  
       }

       async function UserStorage(data){
          await AsyncStorage.setItem('user_filme', JSON.stringify(data))

       }

       async function signOut(){
         await firebase.auth().signOut()
         await AsyncStorage.clear()
         .then(() => {
            setUser(null)
         })
       }

       useEffect(() => {
     
        async function loadFilmes() {
            setLoading(true)
        
         const response = await Api.get('movie/now_playing',{
             params: {
                 api_key: "1f986a550f568f4b00d057a1fb31f754",
                 language: 'pt-BR',
                 page: 1,
             }
         })
        
        setFilme(response.data.results.slice(0, 20))
        
    
        setLoading(false)
        }
    
        loadFilmes()
    
    }, [])

     
    return(
        <AuthContext.Provider value={ { signed: !!user, user, loading, signIn, signUp, signOut, filme  } }>
            {children}
        </AuthContext.Provider>

    )
}
export default AuthProvider