import React from 'react';
import { View, FlatList, Text } from 'react-native';
import OfferCard from './OfferCard';
import { Sizes } from '@theme/sizes';
import { useLanguage } from '@locales/useLanguage';

export default function OfferList({ data }: any) {
  console.log('Data:=>', data);
  const { language, strings } = useLanguage();

  const offers = data?.map((item: any) => ({
    id: item.id,
    title: item.title,
    subtitle: item.description,
    code: item.code,
    autoApplied: item.tag,
  }));
  return (
    <FlatList
      horizontal
      data={offers}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{
        gap: Sizes.gap_10,
      }}
      renderItem={({ item }) => (
        <OfferCard
          title={item.title}
          subtitle={item.subtitle}
          code={item.code}
          autoApplied={item.autoApplied?.[language] === 'AUTO APPLIED'}
        />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
