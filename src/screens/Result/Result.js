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
        <StatusBar backgroundColor="#615BFF" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
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
              <Text style={styles.profileDesc}>Hasil pengerjaan kuis Anda</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Text style={{marginTop: 24, fontSize: 18, fontWeight: 'bold'}}>
              Anda telah menyelesaikan Kuis
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'normal'}}>
              Silahkan cek total skor dan jumlah soal yang telah Anda kerjakan
            </Text>
            <Text
              style={{marginVertical: 24, fontSize: 18, fontWeight: 'bold'}}>
              Skor Anda
            </Text>
            <View
              style={{
                flex: 1,
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
                  {this.state.nilai}
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
      </View>
    );
  }
}
