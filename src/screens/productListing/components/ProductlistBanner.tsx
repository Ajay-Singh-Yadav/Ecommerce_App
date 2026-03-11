import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, I18nManager } from 'react-native';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import HeaderDelivery from '@assets/svg/HeaderDelivery.svg';

interface ProductListBannerProps {
    image?: any;
    title?: string;
}

const screenWidth = Dimensions.get('window').width;

const ProductListBanner: React.FC<ProductListBannerProps> = ({
    image,
    title,
}) => {
    const [imageHeight, setImageHeight] = useState(200);

    useEffect(() => {
        Image.getSize(
            image,
            (width, height) => {
                const ratio = height / width;
                setImageHeight(screenWidth * ratio);
            },
            () => {
                setImageHeight(200);
            },
        );
    }, [image]);

    return (
        <View style={styles.container}>
            {title && (
                <View style={styles.headerContainer}>
                    <HeaderDelivery
                        width={Sizes.w_20}
                        height={Sizes.h_20}
                        fill={colors.white}
                        style={{
                            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
                        }}
                    />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            )}

            {
                image && (
                    <View style={{ marginHorizontal: Sizes.mr_6 }}>
                        <View style={[styles.imageContainer, { height: imageHeight }]}>
                            <Image
                                source={{ uri: image }}
                                style={styles.bannerImage}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                )
            }
        </View>
    );
};
export default ProductListBanner;

const styles = StyleSheet.create({
    container: {},

    imageContainer: {
        width: '100%',
        overflow: 'hidden',
        borderRadius: Sizes.rd_12,
    },

    bannerImage: {
        width: '100%',
        height: '100%',
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.SteelBlue,
        padding: Sizes.pd_4,
        justifyContent: 'center',
        gap: Sizes.gap_4,
    },

    headerText: {
        color: colors.white,
        fontSize: Sizes.font_10,
        fontWeight: '600',
    },
});
