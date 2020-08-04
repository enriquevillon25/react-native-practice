import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SugestionListLayout(props) {
  return (
    <View>
      <Text> {props.title}</Text>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
export default SugestionListLayout;

