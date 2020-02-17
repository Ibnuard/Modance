import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.8,
  },
  body: {
    flex: 1.9,
  },
  headerTop: {
    flexDirection: 'row',
    padding: 20,
  },
  headerBab: {
    flex: 1.2,
    marginTop: 14,
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
  menuRed: {
    flex: 1.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 12,
    marginHorizontal: 8,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 4,
  },
  menuBlue: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 12,
    marginHorizontal: 8,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 4,
  },
  itemLayout: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonMenu: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textMenu: {
    position: 'absolute',
    top: 0,
    marginLeft: 20,
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  item: {
    width: screenWidth - 60,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default styles;
