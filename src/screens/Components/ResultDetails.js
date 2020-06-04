import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ResultDetails = ({ result }) => {

    return <View style={style.view}>
        <Image source={{ uri: result.image_url }} style={style.image} />
        <Text style={style.name}> {result.name}</Text>
        <Text style={style.name1}> {result.rating} Stars , {result.review_count} Reviews</Text>
    </View>

}
const style = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 10,
        height: 200,

    },
    name: {
        fontWeight: "bold",
        fontSize: 20,

    },
    name1: {
        fontWeight: '400',
        fontSize: 18,

    },
    view: {
        margin: 10,
     

    }


});

export default ResultDetails;