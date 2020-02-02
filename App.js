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
import Bab from './src/screens/Bab/Bab';
import SubabSatu from './src/screens/SubabSatu/SubabSatu';
import SubabDua from './src/screens/SubabDua/SubabDua';
import SubabTiga from './src/screens/SubabTiga/SubabTiga';
import Quiz from './src/screens/Quiz/Quiz';
import QuizMenu from './src/screens/QuizMenu/QuizMenu';
import QuizBab from './src/screens/QuizBab/QuizBab';
import Result from './src/screens/Result/Result';
import AboutUs from './src/screens/AboutUs/AboutUs';

const RootStack = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    Materi,
    Bab,
    SubabSatu,
    SubabDua,
    SubabTiga,
    Quiz,
    QuizMenu,
    QuizBab,
    Result,
    AboutUs,
  },
  {
    initialRouteName: 'Main',
  },
);
const App = createAppContainer(RootStack);
export default App;
