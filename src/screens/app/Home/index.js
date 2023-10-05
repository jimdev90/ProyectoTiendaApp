import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { styles } from './styles';
import { categories } from '../../../data/categories'
import CategoryBox from '../../../components/CategoryBox';

const Home = () => {

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                title={item?.title}
                image={item?.image}
            />
        )
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch title='Encuentra todo lo que necesitas.' showLogout />
                <FlatList
                    style={styles.list}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => String(index)}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Home);