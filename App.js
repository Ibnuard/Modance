import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Loading from './src/screens/Loading/Loading';
import SignUp from './src/screens/SignUp/SignUp';
import Login from './src/screens/Login/Login';
import Main from './src/screens/Main/Main';
import Materi from './src/screens/Materi/Materi';

const RootStack = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    Materi,
  },
  {
    initialRouteName: 'Loading',
  },
);
const App = createAppContainer(RootStack);
export default App;
