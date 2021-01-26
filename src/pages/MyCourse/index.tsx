import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import cardRoseImg from '../../images/cardrose.png';

export default function MyCourse() {
  
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Header text="My Courses" iconLeft="chevron-left" iconRight="shopping-cart" onPressLeft={goBack} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.h1}>In Progress</Text>
            <Text style={styles.h2}>Done</Text>
          </View>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
        </View>
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6360FF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F1F1FA',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  h1: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 16,
    marginHorizontal: 40
  },
  h2: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 16,
    color: '#91919F',
    marginHorizontal: 40
  }
});