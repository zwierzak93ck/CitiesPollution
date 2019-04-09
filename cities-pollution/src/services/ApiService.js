    
import axios from 'axios';
    
     const getMostPollutedCities = async (country) => {
        const countryPromise = axios.get('https://api.openaq.org/v1/cities?country=' + country + '&order_by=count&limit=10&sort=desc');
        const countryResult = await axios.all([countryPromise]);

        return countryResult[0].data.results.map((element) => {
            return element.city;
        })
    }

     const getCitiesDescriptions = async (citiesNames) => {
        const promises = [];

        for (let i = 0; i < citiesNames.length; i++) {
            const promise = axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&redirects=1&titles=' +
                citiesNames[i] + '&format=json&prop=extracts&exintro&explaintext');
                promises.push(promise)
        }              
        const result = await axios.all(promises);

        return result.map(element => {
            const pages = element.data.query.pages;
            return Object.values(pages)[0].extract;
        })
    }

    export const setCitiesInformations = async (country) => {
        const citiesNames = await getMostPollutedCities(country);
        const citiesDescriptions = await getCitiesDescriptions(citiesNames);

        const informations = { name: citiesNames, description: citiesDescriptions }
        return informations;
    }
    