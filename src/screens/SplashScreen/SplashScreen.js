import React from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';

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
          <Text
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              fontSize: 18,
              color: '#FFF',
              fontWeight: 'bold',
            }}>
            Modance
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
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
