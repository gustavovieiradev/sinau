import React from 'react';
import { StyleSheet, View, TextInput, TextProps } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather';

interface IProps<GLYPHS extends string> {
  leftIcon?: GLYPHS;
  colorLeftIcon?: string;
  sizeLeftIcon?: number;
  rightIcon?: GLYPHS;
  colorRightIcon?: string;
  sizeRightIcon?: number;
  placeholder?: string;
}

export default function Input({ 
  leftIcon, colorLeftIcon, sizeLeftIcon, placeholder, rightIcon, colorRightIcon, sizeRightIcon
}: IProps<any>) {
  return (
    <View style={styles.container}>
      {leftIcon && (<Feather name={leftIcon} color={colorLeftIcon} size={sizeLeftIcon} style={{marginRight: 10}} />) }
      <TextInput style={styles.input} placeholder={placeholder} />
      {rightIcon && (<Feather name={rightIcon} color={colorRightIcon} size={sizeRightIcon} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFF',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    alignItems: 'center',
    marginBottom: 23
  },
  input: {
    flex: 1,
  },
})