import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  body: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    backgroundColor: '#615BFF',
    padding: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backBtn: {
    alignSelf: 'center',
    marginRight: 14,
    width: 24,
    height: 18,
  },
  profileContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileDesc: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 14,
  },
});

export default styles;
