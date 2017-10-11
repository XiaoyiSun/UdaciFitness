import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default TextButton = ({ children, onPress, style = {} }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.reset, style]}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  },
});
