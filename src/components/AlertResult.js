import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bab: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 12,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#73BEFF',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  babText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    marginVertical: 14,
    fontSize: 16,
    fontWeight: '600',
  },
});

export const AlertQuiz = ({correct, visible, message, onOk}) => {
  if (!visible) return null;

  const title = correct ? 'Jawaban Benar!' : 'Jawaban Salah!';

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{message}</Text>
        <TouchableOpacity onPress={onOk} activeOpacity={0.9}>
          <View style={styles.bab}>
            <Text style={styles.babText}>Ok, Lanjut!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
