import React, { useCallback } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Card from '../../components/Card';
import Header from '../../components/Header';

import perfilImg from '../../images/perfil.png';
import cardRoseImg from '../../images/cardrose.png';
import { useNavigation } from '@react-navigation/native';

export default function Author() {

  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Header text="Author" iconLeft="chevron-left" iconRight="shopping-cart" onPressLeft={goBack} />
      <View style={styles.headerContent}>
        <View style={styles.infoAuthor}>
          <Image source={perfilImg} />
          <View style={styles.infoAuthorBoxText}>
            <Text style={styles.infoAuthorTitle}>Sarah William</Text>
            <Text style={styles.infoAuthorDescription}>Developer e Instructor</Text>
          </View>
        </View>
        <View  style={styles.divider}></View>
        <View style={styles.boxResult}>
          <View style={styles.badge}>
            <View style={styles.iconBadge}>
              <Feather name="award" color='#FCFCFF' size={20} />
            </View>
            <View style={styles.badgeResult}>
              <Text style={styles.badgeResultTitle}>Total students</Text>
              <Text style={styles.badgeResultCount}>2,405</Text>
            </View>
          </View>
          <View style={styles.badge}>
            <View style={styles.iconBadge}>
              <Feather name="award" color='#FCFCFF' size={20} />
            </View>
            <View style={styles.badgeResult}>
              <Text style={styles.badgeResultTitle}>Reviews</Text>
              <Text style={styles.badgeResultCount}>1,203</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.boxTitle}>
            <Text style={styles.h1}>Courses</Text>
            <Text style={styles.h2}>Total 4</Text>
          </View>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageRight={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageRight={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageRight={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageRight={cardRoseImg} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    backgroundColor: '#6360FF',
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  infoAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoAuthorBoxText: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  infoAuthorTitle: {
    fontSize: 16,
    fontFamily: 'DMSans_400Regular',
    color: '#FCFCFF',
  },
  infoAuthorDescription: {
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
    color: '#FCFCFF',
  },
  divider: {
    borderTopColor: 'rgba(243, 243, 248, 0.3)',
    borderTopWidth: .8,
    marginVertical: 30 
  },
  boxResult: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  }, 
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40
  }, 
  iconBadge: {
    backgroundColor: 'rgba(243, 243, 248, 0.3);',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  badgeResult: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  badgeResultTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    color: '#FCFCFF'
  },
  badgeResultCount: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#FCFCFF'
  },
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
  boxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  h1: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 16,
  },
  h2: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 14,
    color: '#91919F'
  },
})