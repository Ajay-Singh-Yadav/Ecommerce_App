import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@global/Header'
import { rpm } from '@theme/responsive'
import ProductListScreen from '../productDetails/components/ProductListScreen'
import colors from '@theme/colors'

const HomeScreen = () => {
  return (
     <View style={styles.container}>
      <Header
        logo={true}
        search={true}
        bell={true}
        heart={true}
        bag={true}
        subHeaderStyle={styles.leftRightContainer}
      />
      <ProductListScreen />``
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    leftRightContainer: {
      marginTop: rpm(40),
    },
    container: {
  flex: 1, 

  paddingTop: 0, 
  backgroundColor: colors.background2,
},

})