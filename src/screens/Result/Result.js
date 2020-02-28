import React from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

import firebase from 'react-native-firebase';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const {width: screenWidth} = Dimensions.get('window');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      benar: this.props.navigation.state.params.benar,
      salah: this.props.navigation.state.params.salah,
      total: this.props.navigation.state.params.total,
      nilai: 0,
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
    this.setState({
      nilai: (100 / this.state.total) * this.state.benar,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4E71FF" barStyle="light-content" />
        <ImageBackground
          source={require('../../images/bgMain.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.header}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignContent: 'flex-start',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Main')}>
                <Image
                  style={styles.backBtn}
                  source={require('../../images/back.png')}
                />
              </TouchableOpacity>
              <Image
                style={styles.imageAvatar}
                source={require('../../images/defaultAvatar.png')}
              />
            </View>
            <View style={styles.headerTop}></View>
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                paddingHorizontal: 24,
                paddingBottom: 24,
              }}></View>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                Skor Anda
              </Text>
              <Text
                style={{fontSize: 14, fontWeight: 'normal', color: 'white'}}>
                Silahkan cek total skor dan jumlah soal yang telah Anda kerjakan
              </Text>
              <View
                style={{
                  flex: 1,
                  marginVertical: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.box}>
                  <Text style={{fontSize: 14, color: 'white'}}>Benar</Text>
                  <Text style={{fontSize: 42, color: 'white'}}>
                    {this.state.benar}
                  </Text>
                </View>
                <View style={styles.box}>
                  <Text style={{fontSize: 14, color: 'white'}}>Salah</Text>
                  <Text style={{fontSize: 42, color: 'white'}}>
                    {this.state.salah}
                  </Text>
                </View>
                <View style={styles.box}>
                  <Text style={{fontSize: 14, color: 'white'}}>Nilai</Text>
                  <Text style={{fontSize: 42, color: 'white'}}>
                    {Math.round(this.state.nilai)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Main')}
                activeOpacity={0.9}>
                <View style={styles.bab}>
                  <Text style={styles.babText}>Kembali ke Menu</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
