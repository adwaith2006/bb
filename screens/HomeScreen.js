import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  goToMapScreen = () => {
    this.props.navigation.navigate('MapScreen');
  };
  goToWelcomeScreen = () => {
    this.props.navigation.navigate('WelcomeScreen');
  };

  getName() {
    db.collection('users')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            name: doc.data().name,
          });
        });
      });
  }
  componentDidMount = () => {
    this.getName();
  };
  render() { 
    {
      console.log(this.state.name);
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        <Image
          source={require('../images/bg.jpg')}
          style={{
            width: null,
            height: RFValue(200),
            resizeMode:'center'
          }}></Image>
        <View
          style={{
            flex: 1,
            height: RFValue(50),
            width: RFValue(300),
            backgroundColor: 'yellow',
            alignSelf:'center',
            justifyContent:'center'
          }}>
          <Text style={styles.Text}>
            Hello {this.state.name},Are you ready for your journey to the
            jungle.All the animals are waiting for you
           
          </Text>
          <TextInput
            placeholder={'Your favourite animal'}
            style={styles.TextInput}></TextInput>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => this.goToMapScreen()}>
            <Text style={{
                  fontFamily: 'sans-serif-condensed',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: RFValue(20),
                  color: 'black',
                }}>PLAY</Text>
          </TouchableOpacity>
           <TouchableOpacity
              style={styles.Container2}
              onPress={() => this.goToWelcomeScreen()}>
              <Text
                style={{
                  fontFamily: 'sans-serif-condensed',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  fontSize: RFValue(20),
                  color: 'white',
                }}>
                BACK
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    fontSize: RFValue(35),

  },

  Container: {
    borderWidth: 1,
    height: RFValue(35),
    width: RFValue(100),
    marginTop: RFValue(30),
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  Container2: {
    borderWidth: 2,
    height: RFValue(35),
    width: RFValue(100),
    marginTop: RFValue(30),
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  TextInput: {
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: RFValue(30),
    height: RFValue(30),
    width:RFValue(150)
  },
});
