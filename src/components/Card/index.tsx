import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  title: string;
  price: string;
  valueRating: string;
  descriptionRating: string;
  imageLeft?: any;
  imageRight?: any;
}

export default function Card({title, price, valueRating, descriptionRating, imageRight, imageLeft}: IProps) {
  return (
    <View style={styles.cardContent}>
      {imageRight && (<Image source={imageRight} style={{marginRight: 22}}/>)}
      <View style={styles.cardContentInfo}>
        <Text style={styles.cardContentInfoText}>{title}</Text>
        <Text style={styles.cardContentInfoDescription}>{price}</Text>
        <View style={styles.cardContentInfoRating}>
          <FontAwesome name="star" color="#FFC960" size={13} />
          <Text style={styles.cardContentInfoRatingText}>{valueRating}</Text>
          <Text style={styles.cardContentInfoRatingDescription}>{descriptionRating}</Text>
        </View>
      </View>
      {imageLeft && (<Image source={imageLeft} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FCFCFF',
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: 15,
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
  },
  
});