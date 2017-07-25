import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/component/Login'
import Routes from './app/component/Routes'
import Map from './app/component/Map'
import Home from './app/'

const Hermes = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Routes: { screen: Routes },
  Map: { screen: Map }
});


AppRegistry.registerComponent('Hermes', () => Hermes);
