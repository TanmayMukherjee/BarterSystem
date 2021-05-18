import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <View>
        <WelcomeScreen/>
      </View>
    )
  }
}