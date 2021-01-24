import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import cardRoseImg from '../../images/cardrose.png';

export default function SearchResult() {
  return (
    <>
      <Header text="Search Results" iconLeft="chevron-left" iconRight="shopping-cart"/>
      <View style={styles.container}>
        <View style={styles.content}>
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
});