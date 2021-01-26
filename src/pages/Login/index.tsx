import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logoImg from '../../images/logo.png';
import unionImg from '../../images/Union.png';
import { RectButton } from 'react-native-gesture-handler';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const handleNavigateDashboard = useCallback(() => {
    navigation.navigate('Tabs');
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Image source={logoImg} style={styles.logo}/>
        <Image source={unionImg} style={styles.union}/>
        <Text style={styles.title}>Learn from anything and anywhere</Text>
      </View>
      <View style={styles.second}>
        <View>
          <Input leftIcon="mail" colorLeftIcon="#6360FF" sizeLeftIcon={20} placeholder="Email" />
          <Input leftIcon="lock" colorLeftIcon="#6360FF" sizeLeftIcon={20} placeholder="Password" />
          <RectButton style={styles.buttonSignIn} onPress={handleNavigateDashboard}>
            <Text style={styles.textButton}>Sign In</Text>
          </RectButton>
          <RectButton style={styles.buttonGoogle} onPress={handleNavigateDashboard}>
            <Text style={styles.textButton}>Sign In with Google</Text>
          </RectButton>
        </View>
        <View style={styles.boxHelp}>
          <Text style={styles.boxHelpText}>Feel free tro use this UI Kit © Harum Shidiqi</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6360FF'
  },
  first: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: .5,
    backgroundColor: '#6360FF'
  },
  second: {
    flex: .5,
    backgroundColor: '#F1F1FA',
    borderRadius: 30,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 25,
    justifyContent: 'space-between'
  },
  logo: {
    width: 59,
    height: 59,
  },
  union: {
    width: 144,
    height: 33,
    marginTop: 40
  },
  title: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: '#FCFCFF',
    marginTop: 30
  },
  inputIcon: {
    backgroundColor: '#FCFCFF',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    alignItems: 'center',
    marginBottom: 23
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
  buttonSignIn: {
    backgroundColor: '#6360FF',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23
  },
  buttonGoogle: {
    backgroundColor: '#FF8181',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23
  },
  textButton: {
    color: '#FCFCFF',
    fontSize: 14,
    fontFamily: 'DMSans_700Bold',
  },
  boxHelp: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxHelpText: {
    color: '#91919F',
    fontSize: 12
  }
})

