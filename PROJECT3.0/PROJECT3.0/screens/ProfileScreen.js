import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from '../firebase'

const ProfileScreen = () => {

  const [people,setPeople] =useState([])
  const profile = firebase.firestore()
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})