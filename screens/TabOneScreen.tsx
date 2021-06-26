import * as React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

import { View } from '../components/Themed';
import api from '../scripts/api';

export default function TabOneScreen() {
  async function handleFacePress(face: String) {
    const response = await api.save(face);
    console.log(response);
  }
  
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => handleFacePress('great')}>
        <Image
            source={require('./great.png')}
            style={{ width: 200, height: 200 }}
          />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleFacePress('meh')}>
        <Image
            source={require('./meh.png')}
            style={{ width: 200, height: 200 }}
          />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleFacePress('not-good')}>
        <Image
            source={require('./not-good.png')}
            style={{ width: 200, height: 200 }}
          />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
