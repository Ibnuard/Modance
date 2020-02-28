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
    this.props.navigation.navigate('Materi', {
      file,
      title,
      desc,
    });
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
          source={require('../../images/body.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.header}>
            <Image
              style={{position: 'absolute'}}
              source={require('../../images/header.png')}
            />
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
                paddingHorizontal: 24,
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
                    'https://jagem.000webhostapp.com/Modance/jenistari.pdf',
                    'Jenis - Jenis Tari Modern',
                    'Macam jenis - jenis tari kodern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgMateri.png')}
                  />
                  <Text style={styles.babText}>Jenis - Jenis Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Macam jenis - jenis tari modern, teri modern terdiri dari
                    berapa jenis ...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/jenisgaya.pdf',
                    'Jenis Gaya Tari Modern',
                    'Berbagai jenis gaya dalam tari modern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgKuis.png')}
                  />
                  <Text style={styles.babText}>Jenis Gaya Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Berbagai jenis gaya dalam tari modern, tari modern memiliki
                    beberapa jenis gaya...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/fungsi.pdf',
                    'Fungsi dan Peran Tari Modern',
                    'Macam fungsi dan peran tari modern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgAbout.png')}
                  />
                  <Text style={styles.babText}>
                    Fungsi dan Peran Tari Modern
                  </Text>
                  <Text style={styles.babDesc}>
                    Macam fungsi dan peran tari modern, tari modern memiliki
                    beberapa fungsi ...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <View style={{height: 24}} />
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
