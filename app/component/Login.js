import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'
import Routes from './Routes'
import strava from 'strava-v3'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      <Button
        title="Login with Strava"
        onPress={() =>
          navigate('Routes', { name: 'Jane' })
        }
      />
      <Button
        title="Go to Routes"
        onPress={() =>
          navigate('Routes', { name: 'Jane' })
        }
      />
      <Button
        title="Logout"
        onPress={() =>
          navigate('Routes', { name: 'Jane' })
        }
      />
    </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login)
