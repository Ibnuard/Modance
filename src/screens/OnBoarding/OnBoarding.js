import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});
const slides = [
  {
    key: 'somethun',
    title: 'Modance',
    titleStyle: {fontWeight: 'bold'},
    text: 'Mengetahui sejarah tarian modern dan pengemuka tarian modern',
    image: require('../../images/on1.png'),
    backgroundColor: '#4E71FF',
  },
  {
    key: 'somethun-dos',
    title: 'Modance',
    titleStyle: {fontWeight: 'bold'},
    text:
      'Mengetahui ciri - ciri tarian modern dan juga mengetahui jenis-jenis tarian modern',
    image: require('../../images/on2.png'),
    backgroundColor: '#4E71FF',
  },
  {
    key: 'somethun1',
    title: 'Modance',
    titleStyle: {fontWeight: 'bold'},
    text:
      'Mengerjakan Quiz dan Tes untuk mengetahui pengetahuan anda tentang tari modern',
    image: require('../../images/on3.png'),
    backgroundColor: '#4E71FF',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        showSkipButton={true}
        showPrevButton={true}
        onSkip={() => this.props.navigation.navigate('Login')}
        onDone={() => this.props.navigation.navigate('Login')}
      />
    );
  }
}
