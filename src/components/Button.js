import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: '#73BEFF',
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 18,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
});

export const Button = ({text, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({children}) => (
  <View style={styles.buttonContainer}>{children}</View>
);
