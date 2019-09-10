import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import List from './pages/List';
import ScreenCamera01 from './pages/ScreenCamera01';

const MainNavigator = createStackNavigator(
  {
    ListView: {
      screen: List,
      navigationOptions: {
        header: null,
      },
    },
    CameraView01: {
      screen: ScreenCamera01,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'ListView',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
