import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';
import babi from '../../data/babdua';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bab: this.props.navigation.state.params.bab,
      questions: [],
    };
  }

  componentDidMount() {
    axios.get(`http://3.84.0.101:4000/api/tari/${this.state.bab}`).then(res => {
      this.setState({
        questions: res.data,
      });
      if (this.state.bab != 4) {
        this.props.navigation.navigate('Quiz', {
          title: 'Bab I',
          guide: babi,
          questions: this.state.questions.response,
          color: '#36b1f0',
        });
      } else {
        this.props.navigation.navigate('Soal', {
          title: 'Bab I',
          guide: babi,
          questions: this.state.questions.response,
          color: '#36b1f0',
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
