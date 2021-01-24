import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  text: string;
}

export default function Tag({text}: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 16
  },
  tag: {
    backgroundColor: '#6360FF',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  tagText: {
    color: '#FCFCFF',
    fontFamily: 'DMSans_400Regular',
  }
})