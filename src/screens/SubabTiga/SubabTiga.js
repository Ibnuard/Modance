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
                    'https://jagem.000webhostapp.com/Modance/luarnegeri.pdf',
                    'Tokoh Penari dan Koreografer',
                    'Tokoh - tokoh penari dan koreografer luar negeri',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgMateri.png')}
                  />
                  <Text style={styles.babText}>
                    Tokoh Penari dan Koreografer
                  </Text>
                  <Text style={styles.babDesc}>
                    Tokoh - tokoh penari dan koreografer luar negeri. Berikut
                    merupakan tokoh ...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/dalamnegeri.pdf',
                    'Tokoh Penari dan Koreografer',
                    'Tokoh - tokoh penari dan koreografer dalam negeri',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgSetting.png')}
                  />
                  <Text style={styles.babText}>
                    Tokoh Penari dan Koreografer
                  </Text>
                  <Text style={styles.babDesc}>
                    Tokoh - tokoh penari dan koreografer dalam negeri. Berikut
                    merupakan tokoh ...
                  </Text>
                  <Text style={styles.babDescLM}>Baca Selengkapnya.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this._gotoMateri(
                    'https://jagem.000webhostapp.com/Modance/teknik.pdf',
                    'Teknik Tari Modern',
                    'Teknik - teknik dalam Tari Modern',
                  )
                }
                activeOpacity={0.9}>
                <View style={styles.bab} backgroundColor={'#4E71FF'}>
                  <Image
                    style={styles.bgButton}
                    source={require('../../images/imgAbout.png')}
                  />
                  <Text style={styles.babText}>Teknik Tari Modern</Text>
                  <Text style={styles.babDesc}>
                    Teknik - teknik dalam Tari Modern. Beberapa Teknik tari
                    modern ...
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
