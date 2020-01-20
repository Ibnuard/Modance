import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 3,
  },
  headerTop: {
    flex: 3,
    backgroundColor: '#615BFF',
    padding: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
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
  },
  menuRed: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    margin: 8,
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
    margin: 8,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 4,
  },
});

export default styles;
