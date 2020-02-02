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
    marginHorizontal: 20,
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
  imageAvatar: {
    width: 36,
    height: 36,
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
  bab: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
    height: 50,
    backgroundColor: '#615BFF',
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
  babDesc: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 14,
  },
  box: {
    width: 90,
    height: 90,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FBA36A',
    borderRadius: 10,
  },
});

export default styles;
