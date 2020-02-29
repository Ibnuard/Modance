import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';
import babi from '../../data/babsatu';
import babii from '../../data/babdua';
import babiii from '../../data/babtiga';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bab: this.props.navigation.state.params.bab,
      questions: [],
      guide: '',
    };
  }

  componentDidMount() {
    axios.get(`http://3.84.0.101:4000/api/tari/${this.state.bab}`).then(res => {
      this.setState({
        questions: res.data,
      });

      switch (this.state.bab) {
        case 1:
          this.setState({
            guide: babi,
          });
          break;
        case 2:
          this.setState({
            guide: babii,
          });
          break;
        case 3:
          this.setState({
            guide: babiii,
          });
          break;
        default:
          '';
      }

      if (this.state.bab != 4) {
        this.props.navigation.navigate('Quiz', {
          title: 'Bab I',
          guide: this.state.guide,
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
