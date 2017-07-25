import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Hermes',
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={() => navigate('Login')}
          title="Login to Strava"
        />
        <Button
          onPress={() => navigate('Routes')}
          title="Select Route"
        />
      </View>
    )
  }
}
