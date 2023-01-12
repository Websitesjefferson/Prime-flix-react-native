import styled from "styled-components/native";


export const Container = styled.View`
 
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;

`
export const Logo = styled.Text`

  font-size: 40px;
  font-weight: bold;
  margin-bottom: 100px;
  
  
  

`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.50)'
})`

 width: 80%;
 font-size: 18px;
 background-color: rgba(0,0,0,0.20);
 padding: 12px;
 border-radius: 4px;
 margin-bottom: 10px;
 


`

export const SubmitButton = styled.TouchableOpacity`

    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.30);
    width: 80%;
    height: 45px;
    border-radius: 4px;
    margin-top: 10px;

`
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
`
export const Link = styled.TouchableOpacity`
    margin-top: 15px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #000;
`;