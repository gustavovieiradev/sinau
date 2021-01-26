import React, { useCallback } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';
import Tag from '../../components/Tag';

import rectangle128Img from '../../images/Rectangle128.png';
import profile2Img from '../../images/profile2.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CourseDetail() {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  
  const handleGoCart = useCallback(() => {
    navigation.navigate('Cart');
  }, []);

  return (
    <>
      <Header text="Course Detail" iconLeft="chevron-left" iconRight="shopping-cart" onPressLeft={goBack} onPressRight={handleGoCart} />
      <View style={styles.headerContent}>
        <View style={styles.imagesHeader}>
          <Image source={rectangle128Img} style={styles.rectangleHeader}/>
          <Image source={rectangle128Img} />
        </View>
        <Text style={styles.titleHeader}>Declarative interface for any Apple Devices</Text>
        <View style={styles.boxTags}>
          <Tag text="Swift UI" backgroundColor="#E6E6FF" textColor="#6360FF" />
          <Tag text="Swift UI" backgroundColor="#E6E6FF" textColor="#6360FF" />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.h2}>Description</Text>
          <Text style={styles.description}>Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Vel quam elementum pulvinar etiamnim lobortis scelerisque. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....</Text>
          <Text style={styles.showMore}>Show more</Text>
          <View style={styles.divider}></View>
          <Text style={styles.h2}>Author</Text>
          <View style={styles.boxAuthor}>
            <Image source={profile2Img} style={styles.imgProfile}/>
            <View style={styles.boxAuthorText}>
              <Text style={styles.boxAuthorTitle}>Sarah William</Text>
              <Text style={styles.boxAuthorSubTitle}>4 courses - 1400 students</Text>
            </View>
          </View>
          <View style={styles.boxButton}>
            <RectButton style={styles.buttonSeeDetail}>
              <Text style={styles.buttonText}>See detail</Text>
            </RectButton>
            <RectButton style={styles.buttonAddToCart}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </RectButton>
          </View>
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
  imagesHeader: {
    marginTop: 10,
    flexDirection: 'row',
  },
  rectangleHeader: {
    marginRight: 15
  },
  titleHeader: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 26,
    lineHeight: 33,
    color: '#FCFCFF',
    marginTop: 40
  },
  divider: {
    borderTopColor: '#91919F',
    borderTopWidth: .8,
    marginVertical: 30 
  },
  container: {
    flex: 1,
    backgroundColor: '#6360FF',
  },
  content: {
    flex: 1,
    backgroundColor: '#FCFCFF',
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
  h2: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#91919F',
    lineHeight: 16,
  },
  showMore: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: '#6360FF',
    lineHeight: 16,
    marginTop: 20
  },
  description: {
    fontFamily: 'DMSans_400Regular',
    marginTop: 20,
    fontSize: 16,
    color: '#161719',
    lineHeight: 22,
  },
  boxTags: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row'
  },
  boxAuthor: {
    backgroundColor: '#F1F1FA',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  imgProfile: {
    width: 44,
    height: 44
  },
  boxAuthorTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#161719'
  },
  boxAuthorSubTitle: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    color: '#91919F'
  },
  boxAuthorText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10
  },
  boxButton: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 25,
    left: 25,
  },
  buttonSeeDetail: {
    width: '46%',
    paddingVertical: 20,
    backgroundColor: '#6360FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonAddToCart: {
    width: '46%',
    paddingVertical: 20,
    backgroundColor: '#7DC579',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#FCFCFF',
    fontSize: 16,
    fontFamily: 'DMSans_700Bold',
  }
});