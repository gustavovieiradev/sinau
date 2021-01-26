import React, { useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import Card from '../../components/Card';
import Header from '../../components/Header';

import cardRoseImg from '../../images/cardrose.png';
import rectanguleImg from '../../images/rectangle.png';

export default function Cart() {

  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Header text="Cart" iconLeft="chevron-left" onPressLeft={goBack} />
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
          <View style={styles.cardFooter}>
            <Text style={styles.h2}>Save for later</Text>
            <Text style={styles.h2}>Remove</Text>
          </View>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={rectanguleImg} />
          <View style={styles.cardFooter}>
            <Text style={styles.h2}>Save for later</Text>
            <Text style={styles.h2}>Remove</Text>
          </View>

          <View style={styles.divider}></View>

          <Text style={styles.h1}>Saved for later</Text>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageRight={rectanguleImg} />
          <View style={styles.cardFooter}>
            <Text style={styles.h2}>Add to cart</Text>
            <Text style={styles.h2}>Remove</Text>
          </View>
          
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.divider}></View>
          <View style={styles.valueCard}>
            <Text style={styles.h2}>Total Items</Text>
            <Text style={styles.h1}>IDR 1.100.000</Text>
          </View>
          <RectButton style={styles.button}>
            <Text style={styles.textButton}>Sign In</Text>
          </RectButton>
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
  cardFooter: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h2: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 14,
    color: '#91919F'
  },
  divider: {
    borderTopWidth: .8,
    borderTopColor: '#91919F',
    marginTop: 30,
    marginBottom: 20
  },
  h1: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#F1F1FA',
  },
  button: {
    backgroundColor: '#7DC579',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#FCFCFF',
    fontSize: 14,
    fontFamily: 'DMSans_700Bold',
  },
  valueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40
  }
})