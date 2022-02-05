import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';               
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default class WelcomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      name:""
    }
  }
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  addName=(name)=>{
  db.collection('users').add({name:name})
  }
  
  render() {
    return (
      <View style={{ flex: RFValue(1), backgroundColor: 'yellow' }}>
        <MyHeader title="Welcome To The Jungle" /> 
        <Image
          source={require('../images/leo.jpg')}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}></Image>
        <TextInput
          style={{
            height: RFValue(30),
            width: RFValue(250),
            borderWidth: 2,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }} 
          
          placeholder="NAME"
          onChangeText={(text)=>{
           this.setState({
             name:text
           })
          }}></TextInput>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 50,
            borderWidth: 2,
            height: RFValue(35),
            backgroundColor: 'green',
            width:RFPercentage(40),
            alignItems:'center'
            
            
          }}
          onPress={() =>{
            this.addName(this.state.name);
            //this.props.navigation.navigate('HomeScreen');
            }}>
          <Text style={{ fontSize: RFValue(20), fontWeight: 'bold', color: 'yellow' }}
          >
            Explore The Jungle
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
