import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

    let [results, setResults] = useState([]);
    let [err, Seterr] = useState('');

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

    return [searchApi, results, err];

};