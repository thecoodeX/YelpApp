import React from 'react';
import { Text, Image, View, StyleSheet, FlatList, TouchableOpacity, W } from 'react-native';
import ResultsDetais from './ResultDetails';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }


    return <View style={style.view}>

        <Text style={style.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (

                    <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant', { id: item.id })} >
                        <ResultsDetais result={item} />
                    </TouchableOpacity >


                )
            }}

        />

    </View>
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 10

    },
    view: {
      
    }



})

export default withNavigation(ResultList);