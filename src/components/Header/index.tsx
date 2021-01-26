import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps<GLYPHS extends string> {
  iconLeft?: GLYPHS;
  iconRight?: GLYPHS;
  text: string;
  onPressLeft?(): void;
}

export default function Header({text, iconLeft, iconRight, onPressLeft}: IProps<any>) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        {iconLeft && (
          <TouchableOpacity onPress={onPressLeft} style={styles.buttonLeft}>
            <Feather name={iconLeft} color="#FCFCFF" size={20}/>
          </TouchableOpacity>
        )} 
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
  },
  buttonLeft: {
    paddingRight: 20,
    paddingLeft: 5,
    paddingVertical: 10,
  }
})