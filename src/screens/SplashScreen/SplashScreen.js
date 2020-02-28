import React from 'react';
import {View, StatusBar, Image, StyleSheet} from 'react-native';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('OnBoarding');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2500),
    );

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E71FF',
  },
  logoContainer: {width: 100, height: 100},
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: 14,
  },
});
