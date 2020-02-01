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
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      entries: [
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?nature',
          title: 'Bab I',
        },
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?water',
          title: 'Bab II',
        },
        {
          thumbnail: 'https://source.unsplash.com/1024x768/?girl',
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
                  activeOpacity={0.4}
                  style={styles.buttonMenu}>
                  <Image
                    style={{
                      width: 72,
                      height: 72,
                      alignSelf: 'center',
                    }}
                    source={require('../../images/materi_ico.png')}
                  />
                  <Text style={styles.textMenu}>Materi</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuBlue}>
                <TouchableOpacity
                  onPress={this.handleLogout}
                  activeOpacity={0.4}
                  style={styles.buttonMenu}>
                  <Image
                    style={{
                      width: 72,
                      height: 72,
                      alignSelf: 'center',
                    }}
                    source={require('../../images/exit_ico.png')}
                  />
                  <Text style={styles.textMenu}>Keluar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.menuBlue}>
                <TouchableOpacity activeOpacity={0.4} style={styles.buttonMenu}>
                  <Image
                    style={{
                      width: 72,
                      height: 72,
                      alignSelf: 'center',
                    }}
                    source={require('../../images/quiz_ico.png')}
                  />
                  <Text style={styles.textMenu}>Kuis</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuRed}>
                <TouchableOpacity activeOpacity={0.4} style={styles.buttonMenu}>
                  <Image
                    style={{
                      width: 72,
                      height: 72,
                      alignSelf: 'center',
                    }}
                    source={require('../../images/about_ico.png')}
                  />
                  <Text style={styles.textMenu}>Tentang</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
