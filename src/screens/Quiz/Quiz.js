import React from 'react';
import {View, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';

import {Button, ButtonContainer} from '../../components/Button';
import {Alert} from '../../components/Alert';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 0,
      invalidCount: 0,
      current: 1,
      totalCount: this.props.navigation.getParam('questions', []).length,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
      questions: [],
    };
  }

  _gotoResult = (benar, salah, total) => {
    this.props.navigation.navigate('Result', {
      benar,
      salah,
      total,
    });
  };

  answer = (id, jawaban) => {
    this.setState(
      state => {
        const nextState = {answered: true};

        if (id == jawaban) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.invalidCount = state.invalidCount + 1;
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      },
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;
      state.current = state.current + 1;

      if (nextIndex >= state.totalCount) {
        this._gotoResult(
          this.state.correctCount,
          this.state.invalidCount,
          this.state.totalCount,
        );
      } else {
        return {
          activeQuestionIndex: nextIndex,
          answered: false,
        };
      }
    });
  };

  render() {
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.props.navigation.getParam('color')},
        ]}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.id, question.jawaban)}
                />
              ))}
            </ButtonContainer>
          </View>
          <Text style={styles.text}>
            {`${this.state.current}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
