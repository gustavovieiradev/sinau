import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

export default function CourseVideo() {
  return (
    <>
      <Header text="Course Detail" iconLeft="chevron-left" />
      <View style={styles.video} ></View>
      <View style={styles.segments}>
        <View style={styles.segmentActive}>
          <Text style={styles.segmentActiveText}>Course Content</Text>
        </View>
        <View style={styles.segment}>
          <Text style={styles.segmentText}>Discussion</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentSection}>
          <View style={styles.section}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
          </View>
          <View style={styles.contentVideo}>
            <View style={styles.contentVideoText}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
            </View>
            <View style={styles.checkbox}>
              <Feather name="check" color="#FCFCFF" size={14} />
            </View>
          </View>
          <View style={styles.contentVideo}>
            <View style={styles.contentVideoText}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
            </View>
            <View style={styles.checkbox}>
              <Feather name="check" color="#FCFCFF" size={14} />
            </View>
          </View>
          <View style={styles.contentVideo}>
            <View style={styles.contentVideoText}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
            </View>
            <View style={styles.checkbox}>
              <Feather name="check" color="#FCFCFF" size={14} />
            </View>
          </View>
        </View>
        <View style={styles.contentSection}>
          <View style={styles.section}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
          </View>
          <View style={styles.contentVideo}>
            <View style={styles.contentVideoText}>
            <Text style={styles.title}>Section 1: Introduction</Text>
            <Text style={styles.subTitle}>3/5 14 min</Text>
            </View>
            <View style={styles.checkbox}>
              <Feather name="check" color="#FCFCFF" size={14} />
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  video: {
    height: 210,
    backgroundColor: '#161719'
  },
  segments: {
    flexDirection: 'row',
  },
  segmentActive: {
    flex: .5,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFF'
  },
  segment: {
    flex: .5,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1FA'
  },
  segmentActiveText: {
    color: '#161719',
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
  },
  segmentText: {
    color: '#91919F',
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
  },
  content: {
    backgroundColor: '#FCFCFF',
    flex: 1,
  },
  contentSection: {
    paddingVertical: 20,
  },
  section: {
    paddingHorizontal: 25,
    paddingBottom: 20,
    borderBottomWidth: .8,
    borderBottomColor: '#91919F',
  },
  title: {
    color: '#161719',
    fontSize: 16,
    fontFamily: 'DMSans_400Regular',
    lineHeight: 18
  },
  subTitle: {
    fontFamily: 'DMSans_400Regular',
    color: '#91919F',
    fontSize: 12,
    lineHeight: 15,
  },
  contentVideo: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentVideoText: {
    flexDirection: 'column',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#FF8181',
    alignItems: 'center',
    justifyContent: 'center',
  }
})