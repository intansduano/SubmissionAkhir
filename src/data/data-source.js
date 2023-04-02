//import clubs from './meals.js';

const axios = require('axios');

class DataSource {
    static searchName(keyword) {
        return axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then((responseJson) => {
                if (responseJson.meal.meals !== null) {
                    return Promise.resolve(responseJson.meal.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static searchCategory() {
        return axios.get('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(responseJson => responseJson.meal);
    }
}

export default DataSource;