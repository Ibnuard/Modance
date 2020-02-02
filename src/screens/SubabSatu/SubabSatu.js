import React from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
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
        <StatusBar backgroundColor="#615BFF" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Bab')}
              style={{alignSelf: 'center'}}>
              <Image
                style={styles.backBtn}
                source={require('../../images/back.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.imageAvatar}
              source={require('../../images/defaultAvatar.png')}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingHorizontal: 14,
              }}>
              <Text style={styles.profileText}>Hai, {this.state.name}</Text>
              <Text style={styles.profileDesc}>
                Pilih Bab untuk mulai belajar
              </Text>
            </View>
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
              <View style={styles.bab}>
                <Text style={styles.babText}>Sejarah Tari Modern</Text>
                <Text style={styles.babDesc}>Sejarah adanya tari modern</Text>
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
              <View style={styles.bab}>
                <Text style={styles.babText}>Definisi Tari Modern</Text>
                <Text style={styles.babDesc}>
                  Definisi tari modern menurut para ahli
                </Text>
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
              <View style={styles.bab}>
                <Text style={styles.babText}>Ciri Khas</Text>
                <Text style={styles.babDesc}>Ciri khas sebuah tari</Text>
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
              <View style={styles.bab}>
                <Text style={styles.babText}>Ciri Khas Tari Modern</Text>
                <Text style={styles.babDesc}>Ciri khas sebuah tari modern</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
