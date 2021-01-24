import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import cardRoseImg from '../../images/cardrose.png';

export default function SearchResult() {
  return (
    <>
      <Header text="Search Results" iconLeft="chevron-left" iconRight="shopping-cart"/>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Results for “Swift UI”</Text>
            <Text style={styles.countText}>Total 200</Text>
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
    justifyContent: 'space-between'
  },
  titleText: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 16,
  },
  countText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 14,
    color: '#91919F'
  }
});