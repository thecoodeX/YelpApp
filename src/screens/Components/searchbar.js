import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const Searchbar = ({ term, onChange, onSubmit }) => {
    return <View style={styles.bg}>
        <Feather name="search" style={styles.icon} />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            value={term}

            style={styles.inputStyle}
            placeholder="search"
            onEndEditing={onSubmit}
            onChangeText={onChange}

        />

    </View>
};

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#e7e7e7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginVertical:10


    },
    inputStyle: {

        fontSize: 18,

        flex: 1

    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default Searchbar;