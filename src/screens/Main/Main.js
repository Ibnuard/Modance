import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    const uid = firebase.auth().currentUser.uid;
    const ref = firebase
      .database()
      .ref('root/users')
      .child(uid)
      .child('username');
    ref.on('value', snap => this.setState({name: snap.val()}));
  }

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(this.props.navigation.navigate('Loading'));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#615BFF" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.titleText}>Modance</Text>
            <View style={styles.profileContainer}>
              <Image
                style={styles.imageAvatar}
                source={require('../../images/defaultAvatar.png')}
              />
              <View style={{flexDirection: 'column', marginHorizontal: 12}}>
                <Text style={styles.profileText}>Hallo, </Text>
                <Text style={styles.profileText}>{this.state.name}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={{flex: 1, flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.menuRed}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{height: '100%', width: '100%'}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 14,
                    }}
                    source={require('../../images/imgMateri.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Materi
                </Text>
              </View>
              <View style={styles.menuBlue}>
                <TouchableOpacity
                  onPress={this.handleLogout}
                  activeOpacity={0.7}
                  style={{height: '100%', width: '100%'}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 14,
                    }}
                    source={require('../../images/imgAbout.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Keluar
                </Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.menuBlue}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{height: '100%', width: '100%'}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 14,
                    }}
                    source={require('../../images/imgKuis.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Kuis
                </Text>
              </View>
              <View style={styles.menuRed}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{height: '100%', width: '100%'}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 14,
                    }}
                    source={require('../../images/imgSetting.png')}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Tentang
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
