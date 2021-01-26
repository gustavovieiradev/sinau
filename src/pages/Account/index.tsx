import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

import perfilImg from '../../images/perfilGrande.png';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Account() {

  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Header text="Account" iconLeft="chevron-left" onPressLeft={goBack}/>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Image source={perfilImg} style={styles.image} />
          <Text style={styles.nameUser}>Poetri Lazuardi</Text>
          <Text style={styles.emailUser}>poetri.lazuardi@mail.com</Text>
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Account Settings</Text>
          <View style={styles.accountItem}>
            <Text style={styles.accountItemText}>Account Security</Text>
            <Feather name="chevron-right" color="#91919F"  size={20} />
          </View>
          <View style={styles.accountItem}>
            <Text style={styles.accountItemText}>Email notification preferences</Text>
            <Feather name="chevron-right" color="#91919F"  size={20} />
          </View>
          <Text style={styles.title}>Support</Text>
          <View style={styles.accountItem}>
            <Text style={styles.accountItemText}>About Sinau</Text>
            <Feather name="chevron-right" color="#91919F"  size={20} />
          </View>
          <View style={styles.accountItem}>
            <Text style={styles.accountItemText}>Frequently asked questions</Text>
            <Feather name="chevron-right" color="#91919F"  size={20} />
          </View>
          <View style={styles.accountItem}>
            <Text style={styles.accountItemText}>Share Sinau app</Text>
            <Feather name="chevron-right" color="#91919F"  size={20} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    backgroundColor: '#6360FF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50
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
  image: {
    width: 110,
    height: 110
  },
  nameUser: {
    fontFamily: 'DMSans_700Bold',
    marginTop: 20,
    color: '#FCFCFF',
    fontSize: 26,
  },
  emailUser: {
    marginTop: 10,
    color: '#FCFCFF',
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
  },
  title: {
    color: '#91919F',
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    paddingVertical: 10,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12
  },
  accountItemText: {
    fontFamily: 'DMSans_400Regular',
    color: '#161719',
    fontSize: 16
  }
})