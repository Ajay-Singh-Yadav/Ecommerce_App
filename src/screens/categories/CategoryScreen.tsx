import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rpm } from '@theme/responsive'
import Header from '@global/Header'

const CategoryScreen = () => {
  return (
    <View>
      <Header
        logo={true}
        search={true}
        bell={true}
        heart={true}
        bag={true}
        subHeaderStyle={styles.leftRightContainer}
      />
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
     leftRightContainer: {
        marginTop: rpm(40),
      },
})