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
      materi: '',
    };
  }

  _gotoMateri = (file, title, desc) => {
    this.props.navigation.navigate('Materi', {file, title, desc});
  };

  componentDidMount() {
    const uid = firebase.auth().currentUser.uid;
    const ref = firebase
      .database()
      .ref('root/users')
      .child(uid)
      .child('username');
    ref.on('value', snap => this.setState({name: snap.val()}));
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
                onPress={() => this.props.navigation.navigate('Bab')}>
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
                paddingHorizontal: 14,
                paddingBottom: 24,
              }}>
              <Text style={styles.profileText}>Hai, {this.state.name}</Text>
              <Text style={styles.profileDesc}>
                Selamat datang, silahkan pilih bab yang ingin dipelajari!
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/sejarahbaru.pdf',
                    'Sejarah Tari Modern',
                    'Sejarah adanya tari modern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#73BEFF'}>
                  <Text style={styles.babText}>Sejarah Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Pelopor tari modern di Amerika Serikat adalah Loie Fuller...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/definisi.pdf',
                    'Definisi Tari Modern',
                    'Definisi tari modern menurut para ahli',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#FBA36A'}>
                  <Text style={styles.babText}>Definisi Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Kenneth Macgowan Dalam bukunya “The Living Stage...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/cirikhas.pdf',
                    'Ciri Khas Tari',
                    'Ciri khas sebuah tari',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#7052FF'}>
                  <Text style={styles.babText}>Ciri Khas</Text>
                  <Text style={styles.babDesc}>
                    Pola-pola gerak yang lebih bebas tapi masih
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/tarimodern.pdf',
                    'Ciri Khas Tari Modern',
                    'Ciri khas sebuah tari modern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#FF5F5E'}>
                  <Text style={styles.babText}>Ciri Khas Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Ciri khas gerak tari Modern Ragam gerak tari...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
