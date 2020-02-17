import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';

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
      this.props.navigation.navigate('Quiz', {
        title: 'Bab I',
        questions: this.state.questions.response,
        color: '#36b1f0',
      });
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
