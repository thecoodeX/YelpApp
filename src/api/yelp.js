import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NNy3J0q_QQ2Qs2v98Axuo5RVNjhtSRgLKTMUVFZYxAPkWY-d2Medh3yFGpd8TTpYVWeWRv2B4B469PWPk2-6v5_3K_GVkQXLxYJ_-6k4Tddtkkc1-ZDZm1Jjl1rCXnYx'
    }

});

