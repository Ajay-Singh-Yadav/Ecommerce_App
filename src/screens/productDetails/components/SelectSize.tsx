import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

//SVG
import RightArrow from '@assets/svg/RightArrow.svg';
import Notify from '@assets/svg/Notify.svg';

import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import { useLanguage } from '@locales/useLanguage';
import { SelectSizeProps } from '../Type';
import Line from '@global/Line';

const SelectSize: React.FC<SelectSizeProps> = ({ sizes, onSelectSize }) => {
  const { strings } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSelect = (item: any) => {
    setSelectedSize(item.size);
    onSelectSize?.(item);
  };

  return (
    <View style={styles.selectSizeContainer}>
      <View style={styles.sizeTextcontainer}>
        <Text style={{ color: colors.selectSizeText }}>
          {strings.SELECT_SIZE}
        </Text>
        <View style={styles.sizerightContainer}>
          <Text style={styles.guideText}>{strings.SIZE_GUIDE}</Text>
          <RightArrow
            width={Sizes.w_14}
            height={Sizes.h_14}
            style={{
              transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
            }}
          />
        </View>
      </View>

      {/* Sizes Row */}

      <View style={styles.sizeRow}>
        {sizes?.map((item, index) => {
          const isSelected = selectedSize === item.size;
          const leftItem = item?.stockLeft < 10;
          const isOutOfStock = item.stockLeft === 0;

          return (
            <View key={index} style={{ alignItems: 'center' }}>
              <TouchableOpacity
                disabled={isOutOfStock}
                style={[
                  styles.sizeBox,
                  isSelected && styles.selectedBox,
                  isOutOfStock && styles.disabledBox,
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    isSelected && styles.selectedText,
                    isOutOfStock && styles.disabledText,
                  ]}
                >
                  {item.size}
                </Text>
              </TouchableOpacity>
              {leftItem && (
                <Text style={styles.leftProduct}>
                  {item?.stockLeft} {strings.LEFT}
                </Text>
              )}
            </View>
          );
        })}
      </View>
      <Line style={styles.sizeLine} />
      {/* Notify Me */}
      <View style={styles.notifyContainer}>
        <Text style={styles.notavailableText}>
          {strings.SIZE_NOT_AVAILABLE}
        </Text>
        <TouchableOpacity style={styles.notifyButton}>
          <Text style={styles.notifyMe}>{strings.NOTIFY_ME}</Text>
          <Notify
            width={Sizes.w_12}
            height={Sizes.h_12}
            style={{
              transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.saveExtra}>{strings.SAVE_EXTRA}</Text>
    </View>
  );
};

export default SelectSize;

const styles = StyleSheet.create({
  selectSizeContainer: {
    width: '100%',
  
  },
  sizeTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Sizes.mr_12,
  },
  sizerightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideText: {
    color: colors.SteelBlue,
    fontSize: Sizes.font_12,
  },
  sizeRow: {
    flexDirection: 'row',
    marginTop: Sizes.mr_12,
    marginHorizontal: Sizes.mr_12,
    gap: Sizes.gap_12,
  },
  sizeBox: {
    width: Sizes.w_34,
    height: Sizes.h_34,
    borderWidth: 1,
    borderRadius: Sizes.rd_6,
    borderColor: colors.borderColor || '#ccc',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBox: {
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
  },

  disabledText: {
    color: '#999',
  },

  selectedBox: {
    backgroundColor: 'black',
    borderColor: 'black',
  },

  sizeText: {
    fontSize: Sizes.font_10,
    color: colors.selectSizeText,
    fontWeight: '500',
  },

  selectedText: {
    color: colors.white,
  },
  leftProduct: {
    color: colors.red,
    fontSize: Sizes.font_10,
  },
  sizeLine: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: colors.distColor,
    backgroundColor: colors.distColor,
  },
  notifyContainer: {
    marginHorizontal: Sizes.mr_14,
    gap: Sizes.gap_2,
    flexDirection: 'row',
    marginBottom: Sizes.mr_10,
    alignItems: 'center',
  },
  notifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.gap_4,
  },
  notavailableText: {
    fontSize: Sizes.font_10,
    color: colors.black91,
  },
  notifyMe: {
    fontSize: Sizes.font_10,
    color: colors.SteelBlue,
  },
  saveExtra: {
    fontSize: Sizes.font_12,
    marginHorizontal: Sizes.mr_12,
        marginBottom: Sizes.mr_10,
  },
});
