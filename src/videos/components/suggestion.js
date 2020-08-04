import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Suggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.right} />
    </View>
  );
}
const styles = StyleSheet.create({});
export default Suggestion;