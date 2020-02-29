import React from 'react';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  ImageBackground,
  ProgressBarAndroid,
} from 'react-native';
import styles from './styles';
import {Button, ButtonContainer} from '../../components/Button';
import {AlertQuiz} from '../../components/AlertResult';

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
      showguide: false,
      answerCorrect: false,
      questions: [],
      progressStatus: 1,
    };
  }

  componentDidMount() {
    this.start_Progress();
  }

  _gotoResult = (benar, salah, total) => {
    this.props.navigation.navigate('Result', {
      benar,
      salah,
      total,
    });
  };

  answer = (id, jawaban) => {
    this.setState(state => {
      const nextState = {answered: true};

      if (id == jawaban) {
        nextState.correctCount = state.correctCount + 1;
        nextState.answerCorrect = true;
      } else {
        nextState.invalidCount = state.invalidCount + 1;
        nextState.answerCorrect = false;
      }

      return nextState;
    });
  };

  hideGuide = () => {
    this.clear_Progress();
    this.nextQuestion();
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

  start_Progress = () => {
    this.value = setInterval(() => {
      if (this.state.progressStatus != 0.0) {
        this.setState({progressStatus: this.state.progressStatus - 0.01});
        this.checkTimer();
      }
    }, 100);
  };

  checkTimer = () => {
    if (this.state.progressStatus < 0.0) {
      this.answer(5, '');
    }
  };

  clear_Progress = () => {
    this.setState({progressStatus: 1});
  };

  render() {
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    const guides = this.props.navigation.getParam('guide', []);
    const guide = guides[this.state.activeQuestionIndex];

    return (
      <View style={[styles.container, {backgroundColor: '#4E71FF'}]}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={this.state.progressStatus}
              animating={true}
              color="#FFF"
            />
            <Text style={styles.titleText}>
              Soal {`${this.state.current}/${this.state.totalCount}`}
            </Text>
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
        </SafeAreaView>
        <AlertQuiz
          correct={this.state.answerCorrect}
          visible={this.state.answered}
          message={guide.pembahasan}
          onOk={() => this.hideGuide()}
        />
      </View>
    );
  }
}

export default Quiz;
