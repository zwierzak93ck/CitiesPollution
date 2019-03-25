import React, { Component } from 'react';
import {CountriesSearchField } from '../components/CountriesSearchField';
import axios from 'axios';

class CountriesSearchFieldContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: ''
        }
    }
    countries = [
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
        { value: 'PL', label: 'Poland' },
        { value: 'ES', label: 'Spain' }
      ]

    onValueChange = (e) => {
        this.setState({
            country: e ? e.value : ''
        })
    }

    getMostPollutedCities = () => {
        console.log(this.state.country)
        axios.get('https://api.openaq.org/v1/cities?country=' + this.state.country + '&order_by=count&limit=10&sort=desc')
        .then((result) => {
            console.log(result)
        })
    }
//https://api.openaq.org/v1/cities?country=PL&order_by=count&limit=10&sort=desc
    render() {
        return(
            <CountriesSearchField 
                options={this.countries}
                onChange={this.onValueChange}
                value={this.state.country}
                onClick={this.getMostPollutedCities}
            />
        )
    }
}

export default CountriesSearchFieldContainer;