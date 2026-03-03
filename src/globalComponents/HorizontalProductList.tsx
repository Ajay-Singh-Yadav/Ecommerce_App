import {
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Product } from '../screens/productDetails/Type';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import { getDotText } from '@utils/getDotText';
import Heart from '@assets/svg/Heart.svg';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';
import { tshirtProducts } from '@data/DummyProducts';
import { useLanguage } from '@locales/useLanguage';

const HorizontalProductList: React.FC<Product> = ({ products }) => {

  const navigation = useNavigation<any>()
  const { language, strings } = useLanguage();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: Sizes.h_320,
          backgroundColor: colors.white,
        },
        topGradient: {
          flexDirection: 'row',
          justifyContent: 'space-between',

          alignItems: 'center',

          top: 0,
          left: 0,
          right: 0,
          height: Sizes.h_30,
        },
        headerRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: Sizes.gap_12,
        },
        exploreText: {

          color: colors.ExploreAll
        },

        bottomGradient: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Sizes.h_30,
        },
        TextStyle: {
          marginHorizontal: Sizes.gap_10,
          fontSize: Sizes.font_15,
        },

        itemContainer: {
          width: Sizes.w_160,
          height: Sizes.h_260,
          backgroundColor: colors.white,
          marginHorizontal: Sizes.gap_10,
          borderColor: colors.borderColor,
          borderRadius: Sizes.rd_4,
          borderWidth: 1,
        },
        imageContainer: {
          width: "100%",
          height: Sizes.h_180,
          overflow: "hidden",



        },
        imageStyle: {
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          overflow: "hidden",

        },

        ratingBox: {
          position: 'absolute',
          bottom: Sizes.mr_16,
          left: Sizes.mr_12,
          backgroundColor: colors.white,
          paddingHorizontal: Sizes.pd_6,
          paddingVertical: Sizes.pd_1,
          borderRadius: Sizes.rd_6,
          borderWidth: 0.5,
        },

        ratingText: {
          fontWeight: '500',
          fontSize: Sizes.font_10,
        },

        itemTextContainer: {
          flex: 1,
          borderTopWidth: 1,
          borderColor: colors.borderColor,
        },
        itemSubTextContainer: {
          marginHorizontal: Sizes.mr_6,
          marginTop: Sizes.mr_5
        },
        brand: { fontWeight: '500' },

        title: {
          color: colors.textlightGray,
        },
        priceContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: Sizes.gap_6,
          marginVertical: Sizes.gap_6,
        },
        price: {
          fontSize: Sizes.font_12,
          fontWeight: '600',
        },
        distText: {
          textDecorationLine: 'line-through',
          fontSize: Sizes.font_10,
          color: colors.distColor,
        },
        offStyle: {
          color: colors.GreenOff,
          fontSize: Sizes.font_10,
        },
      }),
    [],
  );

  const renderItemsList = ({ item }: any) => {
    const product = item;


    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate(navigationStrings.PRODUCT_DETAILS, {
            product: product,
          })
        }
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product?.images?.[0] }}
            style={styles.imageStyle}
          />

          <View style={styles.ratingBox}>
            <Text style={styles.ratingText}>
              ⭐ {product?.rating?.average}
            </Text>
          </View>
        </View>

        <View style={styles.itemTextContainer}>
          <View style={styles.itemSubTextContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 1 }}>


                <Text style={styles.brand} numberOfLines={1}>
                  {product?.brand?.[language]}
                </Text>


                <Text style={styles.title} numberOfLines={1}>
                  {getDotText(product?.title?.[language])}
                </Text>

              </View>

              <TouchableOpacity>
                <Heart width={Sizes.w_18} height={Sizes.w_18} />
              </TouchableOpacity>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                ₹{product?.price?.current}
              </Text>

              <Text style={styles.distText}>
                ₹{product?.price?.original}
              </Text>

              <Text style={styles.offStyle}>
                {product?.price?.discount}% OFF
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.Gradient_start,
          colors.Gradient_mid,

          colors.Gradient_mid4,
          colors.Gradient_end,
          colors.Gradient_end,
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.topGradient}
      >
        <View style={styles.headerRow}>
          <Text>New Arrivals</Text>

          <TouchableOpacity>
            <Text style={styles.exploreText}>Explore All</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItemsList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: Sizes.pd_4,
          paddingBottom: Sizes.pd_34,
        }}
        initialNumToRender={6}
        windowSize={5}
        removeClippedSubviews
      />
      <LinearGradient
        colors={[
          colors.Gradient_start,
          colors.Gradient_mid,
          colors.Gradient_mid4,
          colors.Gradient_end,
          colors.Gradient_end,
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.bottomGradient}
      />
    </View>
  );
};

export default HorizontalProductList;
