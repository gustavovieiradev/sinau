import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
  state: any;
  descriptors: any;
  navigation: any;
}

export default function TabBar({ state, navigation, descriptors }: IProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {

        const isFocused = state.index === index;

        const dataTab: any = {
          name: 'Home',
          icon: 'home'
        }

        if (route.name === 'Search') {
          dataTab.name = 'Search';
          dataTab.icon = 'search';
        }

        if (route.name === 'MyCourse') {
          dataTab.name = 'Courses';
          dataTab.icon = 'play-circle';
        }

        if (route.name === 'Account') {
          dataTab.name = 'Account';
          dataTab.icon = 'user';
        }

        const onPress = useCallback(() => {
          navigation.navigate(route.name);
        }, []);

        return (
          <TouchableOpacity onPress={onPress} style={styles.tab} >
            <Feather name={dataTab.icon} color={!isFocused ? "#161719" : "#FF8181"}  size={22}/>
            {isFocused && (
              <Text style={styles.nameTab}>{dataTab.name}</Text>
            )}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    height: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  nameTab: {
    color: '#FF8181',
    fontSize: 12,
    fontFamily: 'DMSans_400Regular',
  },
  tab: {
    alignItems: 'center'
  }
})