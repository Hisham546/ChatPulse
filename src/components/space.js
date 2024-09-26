import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Space = ({height = 20}) => {
  return <View style={{height: height}} />;
};

export const RemoveTabArea = ({height = 80, color = '#FFF', width = 100}) => (
  <View style={{height: height, backgroundColor: color, width: width}} />
);

export const Line = ({style}) => <View style={[styles.line, style]} />;

export default Space;

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
