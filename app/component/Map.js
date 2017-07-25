import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'
import Routes from './Routes'
import MapView from 'react-native-maps'

export default class Map extends Component {
  static navigationOptions = {
    title: 'Let\'s Ride',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      <Button
        title="Start"
        onPress={() =>
          navigate('Routes')
        }
      />
      <Button
        title="Pause"
        onPress={() =>
          navigate('Routes')
        }
      />
      <Button
        title="Stop"
        onPress={() =>
          navigate('Routes')
        }
      />
      <Button
        title="Go To Routes"
        onPress={() =>
          navigate('Routes', { name: 'Jane' })
        }
      />
    </View>
    );
  }
}
