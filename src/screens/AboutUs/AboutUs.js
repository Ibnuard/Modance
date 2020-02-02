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
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingHorizontal: 14,
              }}>
              <Text style={styles.profileText}>Tentang Kami</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              ModanceApp
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              E-Book Apps about Modern Dance
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Designer
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Fauzan Ardiansyah
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Front End Developer
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Ibnu Putra Ardiansyah
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Back End Developer
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Hanif Febri Nugroho
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Eka Setyanto
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Content and Quiz
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Hanifa Wahyu
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Intan Komariah
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Guide and Mentor
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Agus Indra Cahaya S.Kom
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Source
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              Anggita Larasati S.Pd
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 24,
              }}>
              Supported By
            </Text>
            <Text style={{alignSelf: 'center', fontSize: 14}}>
              SMK Telkom Purwokerto
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
