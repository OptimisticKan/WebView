import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import WebView from './components/WebView';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerRight:(
        <Button
          onPress={()=>navigation.navigate('MyModal')}
          title='Info'
          color='red'
        />
      )
    }
  }
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Home</Text>
        <Button title='깃헙 바로가기' onPress={()=>{
          this.props.navigation.navigate('Details')
        }}
        />  
      </View>
    );
  }
}

class DetailScreen extends Component {
  render(){
    return(
      //<View>
        <WebView />
      //</View>
    );
  }
}

class ModalScreen extends Component{
  render(){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontSize:30}}>This is a Modal</Text>
    <Button
      onPress={()=>this.props.navigation.goBack()}
      title='Dismiss'
      />
    </View>
    );
  }
}

const MainStack = createStackNavigator(
  {
  Home: {screen: HomeScreen},
  Details: {screen: DetailScreen},
  }
)

const RootStack = createStackNavigator (
  {
    Main:{screen: MainStack},
    MyModal:{screen: ModalScreen}
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const AppView = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppView/>
    );
  }
}