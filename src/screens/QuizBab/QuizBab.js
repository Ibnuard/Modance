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

import kuisBabI from '../../data/babsatu';
import kuisBabII from '../../data/babdua';
import kuisBabIII from '../../data/babtiga';

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
              onPress={() => this.props.navigation.navigate('QuizMenu')}
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
                Pilih Bab untuk mulai mulai mengerjakan soal
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  title: 'Bab I',
                  questions: kuisBabI,
                  color: '#36b1f0',
                })
              }
              activeOpacity={0.9}>
              <View style={styles.bab}>
                <Text style={styles.babText}>Kuis BAB I</Text>
                <Text style={styles.babDesc}>
                  Sejarah dan Ciri Khas Tari Modern
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  title: 'Bab II',
                  questions: kuisBabII,
                  color: '#36b1f0',
                })
              }
              activeOpacity={0.9}>
              <View style={styles.bab}>
                <Text style={styles.babText}>Kuis BAB II</Text>
                <Text style={styles.babDesc}>
                  Sejarah dan Ciri Khas Tari Modern
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  title: 'Bab III',
                  questions: kuisBabIII,
                  color: '#36b1f0',
                })
              }
              activeOpacity={0.9}>
              <View style={styles.bab}>
                <Text style={styles.babText}>Kuis BAB III</Text>
                <Text style={styles.babDesc}>
                  Sejarah dan Ciri Khas Tari Modern
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
