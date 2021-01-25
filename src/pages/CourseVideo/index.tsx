import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

import profile2Img from '../../images/profile2.png';
import Tag from '../../components/Tag';

export default function CourseVideo() {
  const [currentSegment, setCurrentSegment] = useState<string>('discussion');



  return (
    <>
      <Header text="Course Detail" iconLeft="chevron-left" />
      <View style={styles.video} ></View>
      <View style={styles.segments}>
        <View style={currentSegment === 'content' ? styles.segmentActive : styles.segment}>
          <Text style={currentSegment === 'content' ? styles.segmentActiveText : styles.segmentText}>Course Content</Text>
        </View>
        <View style={currentSegment === 'discussion' ? styles.segmentActive : styles.segment}>
          <Text style={currentSegment === 'discussion' ? styles.segmentActiveText : styles.segmentText}>Discussion</Text>
        </View>
      </View>
      {currentSegment === 'content' && (
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
      )}

      {currentSegment === 'discussion' && (
        <>
          <View style={styles.content}>
            <View style={styles.boxDiscussion}>
              <Image source={profile2Img} />
              <View style={styles.boxDiscussionContent}>
                <View style={styles.boxDiscussionContentUser}>
                  <Text style={styles.nameUser}>Sara William</Text>
                  <Tag text="Author" padding={5}/>
                </View>
                <Text style={styles.comment}>Ultrices vitae auctor eu augue. Tincidunt id aliquet risus.</Text>
                <View style={styles.boxDiscussionFooter}>
                  <Text style={styles.boxDiscussionFooterVote}>Vote (13)</Text>
                  <Feather name="thumbs-up" color="#91919F" size={13} />
                </View>
              </View>
            </View>
            <View style={styles.boxDiscussion}>
              <Image source={profile2Img} />
              <View style={styles.boxDiscussionContent}>
                <View style={styles.boxDiscussionContentUser}>
                  <Text style={styles.nameUser}>Sara William</Text>
                  <Tag text="Author" padding={5}/>
                </View>
                <Text style={styles.comment}>Ultrices vitae auctor eu augue. Tincidunt id aliquet risus.</Text>
                <View style={styles.boxDiscussionFooter}>
                  <Text style={styles.boxDiscussionFooterVote}>Vote (13)</Text>
                  <Feather name="thumbs-up" color="#91919F" size={13} />
                </View>
              </View>
            </View>
            <View style={styles.boxDiscussion}>
              <Image source={profile2Img} />
              <View style={styles.boxDiscussionContent}>
                <View style={styles.boxDiscussionContentUser}>
                  <Text style={styles.nameUser}>Sara William</Text>
                  <Tag text="Author" padding={5}/>
                </View>
                <Text style={styles.comment}>Ultrices vitae auctor eu augue. Tincidunt id aliquet risus.</Text>
                <View style={styles.boxDiscussionFooter}>
                  <Text style={styles.boxDiscussionFooterVote}>Vote (13)</Text>
                  <Feather name="thumbs-up" color="#91919F" size={13} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxInput}>
            <TextInput style={styles.input} placeholder="Post new comment" />
            <Feather name="send" color="#6360FF" size={20}/>
          </View>
        </>
      )}
      
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
  },
  boxDiscussion: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  boxDiscussionContent: {
    marginLeft: 10
  },
  boxDiscussionContentUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameUser: {
    marginRight: 5,
    color: '#6360FF',
    fontFamily: 'DMSans_700Bold',
    fontSize: 14,
  },
  comment: {
    color: '#161719',
    fontSize: 14,
    fontFamily: 'DMSans_400Regular',
    lineHeight: 16,
  },
  boxDiscussionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  boxDiscussionFooterVote: {
    color: '#91919F',
    fontSize: 12,
    fontFamily: 'DMSans_400Regular',
    marginRight: 5,
  },
  boxInput: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 15,
    paddingTop: -20,
    height: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1FA',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  input: {
    flex: 1,
    marginRight: 5
  }

})