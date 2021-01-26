import React, { useCallback } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import perfilImg from '../../images/perfil.png';
import rectangleImg from '../../images/rectangle.png';
import cardRoseImg from '../../images/cardrose.png';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  const handleGoCourse = useCallback(() => {
    navigation.navigate('CourseDetail');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <View style={styles.headerBlockOne}>
            <Image source={perfilImg} />
            <View style={styles.headerText}>
              <Text style={styles.headerTextWelcome}>Welcome back</Text>
              <Text style={styles.headerTextName}>Poetri Lazuardi</Text>
            </View>
          </View>
          <Feather name="bell" color='#FCFCFF' size={17} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.boxContent}>
          <View style={styles.boxContentTitle}>
            <View style={styles.boxContentTitleOne}>
              <Text style={styles.boxContentTitleText}>Declarative interfaces for any Apple Devices</Text>
              <Text style={styles.boxContentTitleDescription}>IDR 850.000</Text>
            </View>
            <Image source={rectangleImg} />
          </View>
          <View style={styles.boxContentProgress}>
            <View style={styles.boxContentProgressBadge}>
              <View style={styles.boxContentProgressBadgeCard}>
                <View style={styles.boxContentProgressBadgeCardIcon}>
                  <Feather name="award" color='#161719' size={20} />
                </View>
                <View style={styles.boxContentProgressBadgeCardTitle}>
                  <Text style={styles.boxContentProgressBadgeCardTitleText}>Current Progress</Text>
                  <Text style={styles.boxContentProgressBadgeCardTitleTextPercent}>50%</Text>
                </View>
              </View>
              <View style={styles.boxContentProgressBadgeCard}>
                <View style={styles.boxContentProgressBadgeCardIcon}>
                  <Feather name="award" color='#161719' size={20} />
                </View>
                <View style={styles.boxContentProgressBadgeCardTitle}>
                  <Text style={styles.boxContentProgressBadgeCardTitleText}>Current Progress</Text>
                  <Text style={styles.boxContentProgressBadgeCardTitleTextPercent}>50%</Text>
                </View>
              </View>
            </View>
            <View style={styles.boxContentProgressBar}>
              <View style={styles.boxContentProgressBarValue}></View>
            </View>
          </View>
        </View>
        <Text style={styles.textReccomended}>Recommendation</Text>
        <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} handlePress={handleGoCourse}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6360FF',
  },
  header: {
    backgroundColor: '#6360FF',
    height: 221,
  },
  headerTitle: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 75,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerBlockOne: {
    flexDirection: 'row',
  },
  headerText: {
    flexDirection: 'column', 
    marginLeft: 20  
  },
  headerTextWelcome: {
    fontFamily: 'DMSans_700Bold',
    color: '#FCFCFF',
    fontSize: 12
  },
  headerTextName: {
    fontFamily: 'DMSans_700Bold',
    color: '#FCFCFF',
    fontSize: 16
  },
  content: {
    flex: 1,
    backgroundColor: '#F1F1FA',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 25,
  },
  boxContent: {
    padding: 15,
    backgroundColor: '#FCFCFF',
    borderRadius: 10,
    marginTop: -80
  },
  boxContentTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxContentTitleOne: {
    flexDirection: 'column',
    width: '80%',
  },
  boxContentTitleText: {
    fontFamily: 'DMSans_400Regular',
    color: '#161719',
    fontSize: 14,
    marginBottom: 6
  },
  boxContentTitleDescription: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 14,
  },
  boxContentProgress: {
    flexDirection: 'column',
    marginTop: 15
  },
  boxContentProgressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxContentProgressBadgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContentProgressBadgeCardIcon: {
    backgroundColor: '#F1F1FA',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  boxContentProgressBadgeCardTitle: {
    flexDirection: 'column',
  },
  boxContentProgressBadgeCardTitleText: {
    color: '#91919F',
    fontFamily: 'DMSans_700Bold',
    fontSize: 12,
  },
  boxContentProgressBadgeCardTitleTextPercent: {
    fontFamily: 'DMSans_400Regular',
    color: '#161719',
    fontSize: 16,
  },
  boxContentProgressBar: {
    backgroundColor: '#F1F1FA',
    borderRadius: 25,
    height: 15,
    marginTop: 15,
  },
  boxContentProgressBarValue: {
    backgroundColor: '#7DC579',
    borderRadius: 25,
    height: 15,
    width: 100
  },
  textReccomended: {
    marginTop: 20,
    color: '#161719',
    fontSize: 16,
    fontFamily: 'DMSans_700Bold',
  },
  cardContent: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FCFCFF',
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardContentInfo: {
    flexDirection: 'column',
    width: '80%'
  },
  cardContentInfoText: {
    fontFamily: 'DMSans_400Regular',
    color: '#161719',
    fontSize: 14,
    marginBottom: 6
  },
  cardContentInfoDescription: {
    fontFamily: 'DMSans_700Bold',
    color: '#161719',
    fontSize: 14,
  },
  cardContentInfoRating: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center'
  },
  cardContentInfoRatingText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#161719',
    fontFamily: 'DMSans_700Bold',
  },
  cardContentInfoRatingDescription: {
    color: '#91919F',
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'DMSans_400Regular',
  }
})