import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import {Button} from 'native-base';
import firebase from 'react-native-firebase';
import styles from './styles';

export default class Login extends React.Component {
  /*componentDidMount() {
    firebase
      .auth()
      .signOut()
      .then(alert('succes'));
  }*/

  state = {email: '', password: '', errorMessage: null};

  handleLogin = () => {
    let {email, password} = this.state;
    if (email != '' && password != '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      this.setState({
        errorMessage: 'Email dan password harus diisi',
      });
    }
  };

  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/bgLogin.png')}
          style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 20,
              }}>
              <Image
                style={styles.imageLogo}
                source={require('../../images/logo.png')}
              />
              <Text style={styles.hallo}>Hallo</Text>
              <Text style={styles.halloDesc}>
                Silahkan masuk untuk mulai belajar
              </Text>
            </View>
            {this.state.errorMessage && (
              <Text style={{color: 'red', paddingHorizontal: 20}}>
                {this.state.errorMessage}
              </Text>
            )}
            <View style={styles.inputLayout}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />
              <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                textContentType="password"
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
            </View>
            <Text style={styles.forgotPassword}>Lupa Password?</Text>
            <Button onPress={this.handleLogin} style={styles.loginButton}>
              <Text style={{color: 'white'}}>Masuk</Text>
            </Button>
          </View>
          <View style={styles.bottomLayout}>
            <Text style={{color: 'white', marginHorizontal: 8}}>
              Belum memiliki akun?
            </Text>
            <Text onPress={this.gotoSignUp} style={styles.registerButton}>
              Daftar
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
