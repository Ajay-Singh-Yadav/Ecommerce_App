import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import { HeaderProps } from './Type';

import Heart from '@assets/svg/Heart.svg';
import Bag from '@assets/svg/Bag.svg';
import Search from '@assets/svg/Search.svg';
import BackArrow from '@assets/svg/BackArrow.svg';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';

const Header: React.FC<HeaderProps> = ({
  headertStyle,
  search,
  subHeaderStyle,
  heart,
  bag,
  backArrow,
  backPress,
  title,
}) => {
  const navigation = useNavigation<any>();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: Sizes.h_40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
          paddingHorizontal: Sizes.pd_10,
        },
        backIcon: {
          flexDirection: 'row-reverse',
        },
        rightIcons: {
          flexDirection: 'row',
          gap: Sizes.mr_10,
        },
        subHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: Sizes.mr_8,
        },
        title: {
          fontSize: Sizes.font_12,
          textAlign: I18nManager.isRTL ? 'right' : 'left',
        },
      }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        {backArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow
              width={Sizes.w_18}
              height={Sizes.h_18}
              style={{
                transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
              }}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightIcons}>
        {search && (
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.SEARCH)}
          >
            <Search width={Sizes.w_24} height={Sizes.h_24} />
          </TouchableOpacity>
        )}
        {heart && (
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.WISHLIST)}
          >
            <Heart width={Sizes.w_24} height={Sizes.h_24} />
          </TouchableOpacity>
        )}
        {bag && (
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.CART)}
          >
            <Bag width={Sizes.w_24} height={Sizes.h_24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
