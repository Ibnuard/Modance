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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repass: '',
      errorMessage: null,
      name: '',
    };
  }

  handleUserData = () => {
    const uid = firebase.auth().currentUser.uid;
    const ref = firebase.database().ref('root/users/' + uid);
    ref
      .update({
        username: this.state.name,
        email: this.state.email,
      })
      .then(this.props.navigation.navigate('Login'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  //state = {email: '', password: '', repass: '', errorMessage: null, name: ''};

  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  };

  handleInput = () => {
    const {email, name, password} = this.state;
    if (email != '' && name != '' && password != '') {
      if (this.state.password === this.state.repass) {
        this.setState({errorMessage: null});
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(this.handleUserData)
          .catch(error => this.setState({errorMessage: error.message}));
      } else {
        this.setState({errorMessage: 'Kata sandi tidak cocok!'});
      }
    } else {
      this.setState({errorMessage: 'Kolom harus diisi semua!'});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/bgLogin.png')}
          style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor="#4E71FF" barStyle="light-content" />
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
              <Text style={styles.hallo}>Selamat Datang,</Text>
              <Text style={styles.halloDesc}>
                Silahkan isi kolom yang tersedia untuk mendaftar!
              </Text>
            </View>
            <View style={styles.inputLayout}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Username"
                placeholderTextColor="white"
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
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
                placeholder="Kata sandi"
                placeholderTextColor="white"
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
              <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                textContentType="password"
                placeholder="Ulangi kata sandi"
                placeholderTextColor="white"
                onChangeText={repass => this.setState({repass})}
                value={this.state.repass}
              />
              {this.state.errorMessage && (
                <Text style={styles.errorMsg}>{this.state.errorMessage}</Text>
              )}
            </View>
            <Button onPress={this.handleInput} style={styles.loginButton}>
              <Text style={{color: 'white'}}>Daftar</Text>
            </Button>
          </View>
          <View style={styles.bottomLayout}>
            <Text style={{color: 'white', marginHorizontal: 8}}>
              Sudah memiliki akun?
            </Text>
            <Text onPress={this.gotoLogin} style={styles.registerButton}>
              Masuk
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
