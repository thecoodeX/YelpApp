import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';


const Restaurants = ({ navigation }) => {
    let [result, setResult] = useState(null);
    let id = navigation.getParam('id');


    const getResult = async (id) => {
        let response = await yelp.get(`/${id}`);
        setResult(response.data);



    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <View style={{flex:1}}>
        <Text style={style.t1}>  {result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {

                return <Image style={style.image} source={{ uri: item }} />
            }}

        />
    </View>
}

const style = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: "center",


    },
    t1: {
        fontWeight: '600',
        fontSize: 30,
        alignSelf: "center"
    }

});

export default Restaurants;