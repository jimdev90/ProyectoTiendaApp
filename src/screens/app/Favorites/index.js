import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteITem from '../../../components/FavoriteITem';
import Header from '../../../components/Header';

const Favorites = () => {
  const renderItem = ({item}) => {
    return <FavoriteITem {...item} />;
  };
  return (
    <SafeAreaView>
      <Header title="Favoritos" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
