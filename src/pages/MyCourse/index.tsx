import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Card from '../../components/Card';
import Header from '../../components/Header';

import styleSheet from './styles';
import cardRoseImg from '../../images/cardrose.png';

export default function MyCourse() {
  const [segment, setSegment] = useState<string>('in-progress');

  const styles = styleSheet({segment});
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleGoCart = useCallback(() => {
    navigation.navigate('Cart');
  }, []);

  return (
    <>
      <Header text="My Courses" iconLeft="chevron-left" iconRight="shopping-cart" onPressLeft={goBack} onPressRight={handleGoCart} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <TouchableOpacity style={styles.segment} onPress={() => setSegment('in-progress')}>
              <Text style={styles.h1}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.segment} onPress={() => setSegment('done')}>
              <Text style={styles.h2}>Done</Text>
            </TouchableOpacity>
          </View>
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
          <Card title="Declarative interfaces for any Apple Devices" price="IDR 850.000" valueRating="4.5" descriptionRating="By Sarah William" imageLeft={cardRoseImg} />
        </View>
      </View>
      
    </>
  )
}