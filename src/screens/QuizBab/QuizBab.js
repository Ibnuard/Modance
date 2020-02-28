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

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bab: 1,
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

  /*_gotoLoad = bab => {
    
  };*/

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
                onPress={() => this.props.navigation.navigate('QuizMenu')}>
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
                Selamat datang, silahkan pilih bab untuk memulai kuis!
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('LoadSoal', {
                    bab: 1,
                  })
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgKuis.png')}
                  />
                  <Text style={styles.babText}>Kuis BAB 1</Text>
                  <Text style={styles.babDesc}>
                    Kuis BAB 1 tentang sejarah adanya Tari modern.
                  </Text>
                  <Text style={styles.babDescLM}>Mulai Kuis ></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('LoadSoal', {
                    bab: 2,
                  })
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgAbout.png')}
                  />
                  <Text style={styles.babText}>Kuis BAB 2</Text>
                  <Text style={styles.babDesc}>
                    Kuis BAB 2 tentang ciri khas dan jenis Tari modern.
                  </Text>
                  <Text style={styles.babDescLM}>Mulai Kuis ></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('LoadSoal', {
                    bab: 3,
                  })
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgMateri.png')}
                  />
                  <Text style={styles.babText}>Kuis BAB 3</Text>
                  <Text style={styles.babDesc}>
                    Kuis BAB 3 tentang tokoh - tokoh pada tari modern.
                  </Text>
                  <Text style={styles.babDescLM}>Mulai Kuis ></Text>
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
