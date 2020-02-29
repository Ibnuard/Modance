import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '90%',
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    color: 'white',
    fontSize: 14,
    marginVertical: 10,
  },
  hallo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  halloDesc: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 14,
  },
  inputLayout: {
    alignItems: 'center',
  },
  forgotPassword: {
    color: 'white',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  loginButton: {
    marginVertical: 32,
    backgroundColor: '#73BEFF',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  bottomLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  registerButton: {
    color: 'white',
    fontWeight: 'bold',
    color: '#615BFF',
  },
  imageLogo: {
    width: 40,
    height: 40,
    marginVertical: 14,
  },
});

export default styles;
