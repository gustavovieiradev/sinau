import React from 'react';
import { Text, View } from 'react-native';
import styleSheet from './styles';

interface IProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: number | string;
}

export default function Tag({ text, backgroundColor = '#6360FF', textColor = '#FCFCFF', padding = 12}: IProps) {
  const styles = styleSheet({backgroundColor, textColor, padding});
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{text}</Text>
      </View>
    </View>
  )
};