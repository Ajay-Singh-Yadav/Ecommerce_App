import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rpm } from '@theme/responsive'

const SearchSceen = () => {
  return (
     <SafeAreaView  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Search Screen </Text>
    </SafeAreaView>
  )
}

export default SearchSceen

const styles = StyleSheet.create({
  leftRightContainer: {
      marginTop: rpm(40),
    },
})