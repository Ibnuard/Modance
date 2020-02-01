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
    };
  }
  componentDidMount() {
    const file = this.props.navigation.state.params.file;
    alert(this.state.name);
  }
  render() {
    const source = {
      uri: 'https://modanceapp.000webhostapp.com/materi/definisi.pdf',
      cache: true,
    };
    return (
      <View style={styles.container}>
        <Pdf
          enablePaging={true}
          enableAntialiasing={true}
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
