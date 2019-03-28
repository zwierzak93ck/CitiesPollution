import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { CountriesSearchField } from '../components/CountriesSearchField';
import { openDataBase, loadData, addOrUpdateData } from '../services/DataBase';
import { validate } from '../services/Validation';
import { countries } from '../consts'

class CountriesSearchFieldContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: null
        }
    }

    async componentDidMount() {
        var openedDataBase = await openDataBase();

        await loadData(openedDataBase).then((result) => {
            this.setState({
                country: result ? result.data.country : null
            })
        });

        window.onbeforeunload = () => {
            addOrUpdateData(openedDataBase, this.state);
        }
    };

    onValueChange = (e) => {
        this.setState({
            country: e ? e : null
        })
    }

    getMostPollutedCities = async () => {
        const countryPromise = axios.get('https://api.openaq.org/v1/cities?country=' + this.state.country.value + '&order_by=count&limit=10&sort=desc');
        const countryResult = await axios.all([countryPromise]);

        const citiesNames = countryResult[0].data.results.map((element) => {
            return element.city;
        })

        return citiesNames;
    }

    getCitiesDescriptions = async (citiesNames) => {
        const results = [];

        for (let i = 0; i < citiesNames.length; i++) {
            const promise = axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&redirects=1&titles=' +
                citiesNames[i] + '&format=json&prop=extracts&exintro&explaintext');
            const result = await axios.all([promise]);
            results.push(result[0]);
        }

        const citiesDescriptions = results.map(element => {
            const pages = element.data.query.pages;
            const extracts = Object.values(pages)[0].extract;
            return extracts
        })

        return citiesDescriptions;
    }

    setCitiesInformations = async () => {
        const citiesNames = await this.getMostPollutedCities();
        const citiesDescriptions = await this.getCitiesDescriptions(citiesNames);

        const informations = { name: citiesNames, description: citiesDescriptions };
        this.props.setCitiesInformations(informations);
    }

    render() {
        return (
            <CountriesSearchField
                options={countries}
                onChange={this.onValueChange}
                setValue={this.state.country}
                onClick={this.setCitiesInformations}
                validate={validate(this.state.country ? [this.state.country] : [])}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCitiesInformations: (informations) => { (dispatch({ type: 'SET_CITIES_INFORMATIONS', informations })) }
    }
}

export default connect(null, mapDispatchToProps)(CountriesSearchFieldContainer);