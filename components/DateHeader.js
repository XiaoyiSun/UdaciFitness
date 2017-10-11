import React from 'react';
import { Text } from 'react-native';
import { purple } from '../utils/colors';

export default DateHeader = ({ date }) => (
  <Text style={{ color: purple, fontSize: 23 }}>
    {date}
  </Text>
)
