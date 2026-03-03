import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@global/Header';
import LogoLoader from '@global/LogoLoader';
import colors from '@theme/colors';
import { tshirtProducts } from '@data/DummyProducts';
import { useLanguage } from '@locales/useLanguage';
import { Text } from 'react-native';
import { Sizes } from '@theme/sizes';


import ProductListBanner from './components/ProductlistBanner';
import { ProductListBannerData } from '@constants/imagePath';
import { useRoute } from '@react-navigation/native';


const ProductListingScreen = () => {
 
    const { language, strings } = useLanguage();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.card}>



                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.images[0] }} style={styles.productImage} />
                </View>

                <Text numberOfLines={1} style={styles.brand}>
                    {item.brand[language]}
                </Text>

                <Text numberOfLines={1} style={styles.productName}>
                    {item.title[language]}
                </Text>

                <View style={styles.priceRow}>
                    <Text style={styles.price}>₹{item.price.current}</Text>

                    <Text style={styles.oldPrice}>₹{item.price.original}</Text>

                    <Text style={styles.discount}>{item.price.discount}% OFF</Text>
                </View>

                {item.offer && (
                    <Text style={styles.offerText}>{item.offer[language]}</Text>
                )}

                {item.boughtLastDays && (
                    <Text style={styles.boughtText}>{item.boughtLastDays[language]}</Text>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header backArrow heart search bag title="Products" />


            {loading ? (
                <View style={styles.loader}>
                    <LogoLoader />
                </View>
            ) : (
                <FlatList
                    data={tshirtProducts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListHeaderComponent={
                        <ProductListBanner
                            image={ProductListBannerData?.TshirtsBanner || ''}
                            title={strings.FREE_SHIPPING}
                        />
                    }
                />
            )}
        </SafeAreaView>
    );
};

export default ProductListingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        flex: 1,
        margin: Sizes.gap_8,
      
    },
    imageBannerContainer: {
        position: 'relative',
    },
    BannerImage: {
        width: '100%',
        height: Sizes.h_280,
        borderRadius: Sizes.rd_6,
    },
    headertContainer: {
        flexDirection: 'row',
        height: Sizes.h_38,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.SteelBlue,
        gap: Sizes.gap_8,
        marginBottom: Sizes.mr_10


    },
    headerText: {
        fontSize: Sizes.font_12,
        color: colors.white
    },

    imageContainer: {
        position: 'relative',
    },

    productImage: {
        width: '100%',
        height: Sizes.h_280,
        borderRadius: Sizes.rd_6,
    },

    brand: {
        color: colors.black96,
        fontSize: Sizes.font_10,
        fontWeight: '600',
        marginTop: Sizes.mr_6,
    },

    productName: {

        fontSize: Sizes.font_8,
        color: colors.textlightGray,
    },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.mr_4,
    },

    price: {
        fontWeight: 'bold',
        fontSize: Sizes.font_10,
    },

    oldPrice: {
        fontSize: Sizes.font_10,
        textDecorationLine: 'line-through',
        marginLeft: Sizes.mr_6,
        color: colors.distColor,
    },

    discount: {
        marginLeft: Sizes.mr_6,
        color: colors.GreenOff,
        fontSize: Sizes.font_10,
    },

    offerText: {
        color: colors.GreenOff,
        fontSize: Sizes.font_8,
        marginTop: Sizes.mr_2,
    },

    boughtText: {
        fontSize: Sizes.font_10,
        color: colors.textlightGray,
    },
});
