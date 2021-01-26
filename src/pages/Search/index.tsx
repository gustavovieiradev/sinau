import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from '../../components/Card';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Tag from '../../components/Tag';
import cardRoseImg from '../../images/cardrose.png';

export default function Search() {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <>
      <Header text="Explore" iconLeft="chevron-left" iconRight="shopping-cart" onPressLeft={goBack} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Input rightIcon="search" colorRightIcon="#161719" sizeRightIcon={20} placeholder="Search..." />
          <Text style={styles.h1}>Browser Category</Text>
          <View style={styles.tagContainer}>
            <Tag text="Technology" />
            <Tag text="Technology" />
            <Tag text="Technology" />
          </View>
          <Text style={styles.h1}>Browser Category</Text>
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
  h1: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
})