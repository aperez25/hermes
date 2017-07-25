import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'
import Map from './Map'

export default class Routes extends Component {
  static navigationOptions = {
    title: 'Routes',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Here is the Routes page, pick a route:{'\n'}
        Just kidding, there's nothing here right now!
        </Text>
        <Button
        title="But here is a Map View"
        onPress={() =>
          navigate('Map', {route: 'eventually this will pass a route'})
        }
      />
      </View>
    )
  }
}

AppRegistry.registerComponent('Routes', () => Routes)
