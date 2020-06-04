import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import Searchbar from "./Components/searchbar";
import yelp from '../api/yelp';
import ResultList from '../screens/Components/ResultsList';
import { ScrollView } from "react-native-gesture-handler";




const HomeScreen = () => {


  let [term, setTerm] = useState('');
  let [results, setResults] = useState([]);
  let [err, Seterr] = useState('');
  console.log(results);


  const filterResult = (price) => {

    return results.filter(result => {
      return result.price === price;
    });

  }

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'san jose'
        }
      });

      setResults(response.data.businesses);
    } catch (e) {
      Seterr('Something Went Wrong');
    }


  }

  useEffect(() => {
    searchApi('Pasta');
  }, []);



  return (<View style={{ flex: 1 }}>
    <Searchbar
      term={term}
      onChange={setTerm}
      onSubmit={searchApi}
    />
    {err ? <Text>{err}</Text> : null}

    <ScrollView>

      <ResultList title='Cost Effective' results={filterResult('$')} />

      <ResultList title='Friendly' results={filterResult('$$')} />

      <ResultList title='Big Spender' results={filterResult('$$$')} />
    </ScrollView>

  </View >
  )
};

const styles = StyleSheet.create({

});

export default HomeScreen;
