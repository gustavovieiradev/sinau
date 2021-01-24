import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IProps<GLYPHS extends string> {
  iconLeft?: GLYPHS;
  iconRight?: GLYPHS;
  text: string;
}

export default function Header({text, iconLeft, iconRight}: IProps<any>) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        {iconLeft && (<Feather name={iconLeft} color="#FCFCFF" size={20} style={{marginRight: 20}}/>)} 
        <Text style={styles.title}>{text}</Text>
      </View>
      {iconRight && (<Feather name="shopping-cart" color="#FCFCFF" size={20} />)}
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#6360FF',
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FCFCFF',
    fontFamily: 'DMSans_400Regular',
  }
})