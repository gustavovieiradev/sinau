import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Feather name="chevron-left" color="#FCFCFF" size={20} />
        <Text style={styles.title}>Explore</Text>
      </View>
      <Feather name="shopping-cart" color="#FCFCFF" size={20} />
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
    marginLeft: 20,
    fontSize: 16,
    color: '#FCFCFF',
    fontFamily: 'DMSans_400Regular',
  }
})