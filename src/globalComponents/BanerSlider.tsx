// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React, { useRef } from 'react';
// import { useSharedValue } from 'react-native-reanimated';
// import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// import { br, rh, rpm, rw } from '@theme/responsive';
// import { CustomDot } from './CustomDot ';
// import NavigationStrings from '@navigation/NavigationStrings';
// import { useNavigation } from '@react-navigation/native';
// import { ParamList } from '@navigation/Type';
// import { BanerSliderProps } from './Type';

// const BanerSlider: React.FC<BanerSliderProps> = ({
//   buttonStyle,
//   imageStyle,
//   carouselStyle,
//   width,
//   height,
//   mode,
//   imageData,
// }) => {
//   const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

//   const ref = useRef<ICarouselInstance>(null);
//   const progress = useSharedValue<number>(1);

//   const handleNavigation = () => {
//     navigation.navigate(NavigationStrings.PRODUCT_DETAILS);
//   };

//   return (

//     <View style={buttonStyle}>
//       <Carousel
//         ref={ref}
//         data={imageData}
//         width={width}
//         height={height}
//         autoPlay
//         autoPlayInterval={1500}
//         scrollAnimationDuration={3000}
//         onProgressChange={progress}

//         onConfigurePanGesture={(gesture) => {
//           gesture.activeOffsetX([-15, 15]);
//         }}

//         renderItem={({ item }: any) => (
//           <TouchableOpacity
//             onPress={handleNavigation}
//             activeOpacity={0.9}
//             style={carouselStyle}
//           >

//             <Image
//               source={item.img}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 resizeMode: 'cover',
//                 borderRadius: br(20),
//               }}
//             />

//           </TouchableOpacity>
//         )}
//       />
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: rpm(5),
//         }}
//       >
//         {imageData.map((_: any, index: any) => (
//           <CustomDot key={index} index={index} progress={progress} />
//         ))}
//       </View>

//     </View>
//   );
// };

// export default BanerSlider;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BanerSlider = () => {
  return (
    <View>
      <Text>BanerSlider</Text>
    </View>
  )
}

export default BanerSlider

const styles = StyleSheet.create({})


