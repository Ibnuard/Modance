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
import BabOne from '../../images/babone.svg';
import BabTwo from '../../images/babtwo.svg';
import firebase from 'react-native-firebase';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const {width: screenWidth} = Dimensions.get('window');

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
  render() {
    const {state} = this.props.navigation;
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
                onPress={() => this.props.navigation.navigate('SubabSatu')}
                activeOpacity={0.9}>
                <View style={styles.bab}>
                  <Text style={styles.babText}>Yuk Belajar BAB 1</Text>
                  <BabOne
                    style={{position: 'absolute', right: 0, bottom: 0}}
                    width={100}
                    height={100}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SubabDua')}
                activeOpacity={0.9}>
                <View style={styles.bab}>
                  <Text style={styles.babText}>Yuk Belajar BAB 2</Text>
                  <BabTwo
                    style={{position: 'absolute', right: 0, bottom: 0}}
                    width={100}
                    height={100}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SubabTiga')}
                activeOpacity={0.9}>
                <View style={styles.bab}>
                  <Text style={styles.babText}>Yuk Belajar BAB 3</Text>
                  <BabOne
                    style={{position: 'absolute', right: 0, bottom: 0}}
                    width={100}
                    height={100}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
