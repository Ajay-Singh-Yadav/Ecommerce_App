import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useLanguage } from '@locales/useLanguage';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import { HighlightItem, Props } from '../Type';

const KeyHighlights: React.FC<Props> = ({ data = [], language }: Props) => {
  const { strings } = useLanguage();
  console.log(data, 'Key');

  const leftColumn = data.filter((_, i) => i % 2 === 0);
  const rightColumn = data.filter((_, i) => i % 2 !== 0);
  const renderItem = (item: HighlightItem, index: number, isLast: boolean) => (
    <View key={index} style={styles.item}>
      <Text style={styles.label}>{item?.label?.[language]}</Text>
      <Text style={styles.value}>{item?.value?.[language]}</Text>

      {!isLast && <View style={styles.divider} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.highlightText}>{strings.KEY_HIGHLIGHT}</Text>
      <View style={styles.highlightContainer}>
        {/* Left Column */}
        <View style={styles.column}>
          {leftColumn.map((item, index) =>
            renderItem(item, index, index === leftColumn.length - 1),
          )}
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          {rightColumn.map((item, index) =>
            renderItem(item, index, index === rightColumn.length - 1),
          )}
        </View>
      </View>
    </View>
  );
};

export default KeyHighlights;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.mr_12,
  },
  highlightText: {
    fontSize: Sizes.font_12,
    color: colors.ArsenicBlack,
    fontWeight: '600',
    marginVertical: Sizes.mr_12,
  },
  highlightContainer: {
    borderWidth: 1,
    marginHorizontal: Sizes.mr_10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: Sizes.rd_12,
    borderColor: colors.borderColor,
    padding: Sizes.pd_16,
  },
  column: {
    flex: 1,
  },

  item: {
    marginBottom: Sizes.mr_12,
  },

  label: {
    fontSize: Sizes.font_12,
    color: colors.SlateGrayhighlight,
    marginBottom: Sizes.mr_5,
  },

  value: {
    fontSize:  Sizes.font_12,
    fontWeight: '600',
    color: colors.ArsenicBlack,
  },

  divider: {
    height: 1,
    backgroundColor: colors.antiflash_white,
    marginTop: Sizes.mr_12,
  },
});
