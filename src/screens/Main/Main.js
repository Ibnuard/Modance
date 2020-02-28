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
import Materi from '../../images/materibg.svg';
import Exit from '../../images/keluarbg.svg';
import Quiz from '../../images/kuisbg.svg';
import About from '../../images/aboutbg.svg';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      entries: [
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?dance',
          title: 'Bab I',
        },
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?dancer',
          title: 'Bab II',
        },
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?party',
          title: 'Bab III',
        },
      ],
    };
  }

  _renderItem({item, index}, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.thumbnail}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
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
      .then(() => this.props.navigation.navigate('Loading'));
  };

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
                <Text style={styles.profileDesc}>
                  Pilih menu materi untuk mulai belajar
                </Text>
              </View>
            </View>
            <View style={styles.headerBab}>
              <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View style={{flex: 1, flexDirection: 'row', margin: 8}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.menuRed}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Bab')}
                    activeOpacity={0.8}
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      backgroundColor: '#FF5F5E',
                      borderRadius: 10,
                    }}>
                    <Text style={styles.textMenu}>Materi</Text>
                    <Materi
                      style={{position: 'absolute', right: 0, bottom: 0}}
                      width={120}
                      height={160}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuBlue}>
                  <TouchableOpacity
                    onPress={() => this.handleLogout}
                    activeOpacity={0.8}
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      justifyContent: 'flex-end',
                      backgroundColor: '#4E71FF',
                      borderRadius: 10,
                    }}>
                    <Text style={styles.textMenu}>Keluar</Text>
                    <Exit
                      style={{position: 'absolute', right: 0, bottom: 0}}
                      width={120}
                      height={160}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.menuBlue}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('QuizMenu')}
                    activeOpacity={0.8}
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      justifyContent: 'flex-end',
                      backgroundColor: '#73BEFF',
                      borderRadius: 10,
                    }}>
                    <Text style={styles.textMenu}>Kuis</Text>
                    <Quiz
                      style={{position: 'absolute', right: 0, bottom: 0}}
                      width={120}
                      height={160}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuRed}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AboutUs')}
                    activeOpacity={0.8}
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      justifyContent: 'flex-end',
                      backgroundColor: '#7052FF',
                      borderRadius: 10,
                    }}>
                    <Text style={styles.textMenu}>Tentang</Text>
                    <About
                      style={{position: 'absolute', right: 0, bottom: 0}}
                      width={120}
                      height={160}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
