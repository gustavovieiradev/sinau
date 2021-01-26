import React from 'react';
import { StyleSheet } from 'react-native';

interface IParams {
  segment: string;
}

export default function Styles({ segment }: IParams) {
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
      justifyContent: 'center',
      marginBottom: 10
    },
    h1: {
      fontFamily: 'DMSans_700Bold',
      color: segment === 'in-progress' ? '#161719' : '#91919F',
      fontSize: 16,
      marginHorizontal: 40
    },
    h2: {
      fontFamily: 'DMSans_700Bold',
      fontSize: 16,
      color: segment === 'done' ? '#161719' : '#91919F',
      marginHorizontal: 50
    },
    segment: {
      paddingVertical: 10
    }
  });
  return styles;
}