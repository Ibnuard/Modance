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
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#615BFF" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Main')}
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SubabSatu')}
            activeOpacity={0.9}>
            <View style={styles.bab}>
              <Text style={styles.babText}>BAB I</Text>
              <Text style={styles.babDesc}>
                Sejarah dan Ciri Khas Tari Modern
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.bab}>
              <Text style={styles.babText}>BAB II</Text>
              <Text style={styles.babDesc}>
                Sejarah dan Ciri Khas Tari Modern
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.bab}>
              <Text style={styles.babText}>BAB III</Text>
              <Text style={styles.babDesc}>
                Sejarah dan Ciri Khas Tari Modern
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
