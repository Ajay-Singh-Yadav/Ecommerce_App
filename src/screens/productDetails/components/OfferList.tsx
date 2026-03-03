import React from 'react';
import { View, FlatList } from 'react-native';
import OfferCard from './OfferCard';
import { Sizes } from '@theme/sizes';
import { Text } from 'react-native-svg';

const offers = [
  {
    id: 1,
    title: 'Get it for as low as',
    price: '₹499',
    distPrice: '₹400',
    subtitle: 'Buy 3 for 1199',
    autoApplied: true,
  },
  {
    id: 2,
    title: 'Get ₹49 BK Cash upto',
    price: '',
    getPrice: '₹49',
    uptoPrice: '₹500',
    subtitle: 'Get Extra 10% cashback ',
    code: 'GETCASH10',
    codeLine: 'Get Extra 10% cashback on all App orders above',
  },
];

export default function OfferList() {
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
            autoApplied={item.autoApplied}
            price={item.price}
            distPrice={item.distPrice}
            getPrice={item.getPrice}
            uptoPrice={item.uptoPrice}
          />
 
        )}
        showsHorizontalScrollIndicator={false}
      />


  );
}
