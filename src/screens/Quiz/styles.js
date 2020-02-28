import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E71FF',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: -0.04,
    fontWeight: 'bold',
  },
  safearea: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default styles;
