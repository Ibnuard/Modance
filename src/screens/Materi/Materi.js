import React from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from './styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.file,
      title: this.props.navigation.state.params.title,
      desc: this.props.navigation.state.params.desc,
    };
  }
  componentDidMount() {
    const file = this.props.navigation.state.params.file;
  }
  render() {
    const source = {
      uri: this.state.name,
      cache: true,
    };
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#615BFF" barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Bab')}
              style={{alignSelf: 'center'}}>
              <Image
                style={styles.backBtn}
                source={require('../../images/back.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingHorizontal: 14,
              }}>
              <Text style={styles.profileText}>{this.state.title}</Text>
              <Text style={styles.profileDesc}>{this.state.desc}</Text>
            </View>
          </View>
        </View>
        <Pdf
          horizontal={true}
          scale={1}
          enableRTL={true}
          enablePaging={true}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}
