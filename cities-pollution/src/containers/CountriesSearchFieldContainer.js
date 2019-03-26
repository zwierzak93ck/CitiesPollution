import React, { Component } from 'react';
import {CountriesSearchField } from '../components/CountriesSearchField';
import { openDataBase, loadData, addOrUpdateData } from '../services/DataBase';
import axios from 'axios';
import {connect} from 'react-redux';

class CountriesSearchFieldContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: null
        }
    }
    countries = [
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
        { value: 'PL', label: 'Poland' },
        { value: 'ES', label: 'Spain' }
      ]

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

    getMostPollutedCities = () => {
        axios.get('https://api.openaq.org/v1/cities?country=' + this.state.country.value + '&order_by=count&limit=10&sort=desc')
        .then((result) => {

            const cities = result.data.results.map(element => {
                return element.city
            })
            console.log(cities)
            this.props.setCities(cities)
        })
    }
    render() {
        return(
            <div> 
            <CountriesSearchField 
                options={this.countries}
                onChange={this.onValueChange}
                setValue={this.state.country}
                onClick={this.getMostPollutedCities}
            />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCities: (cities) => {(dispatch({type: 'SET_CITIES', cities}))}
    }
}

export default connect(null, mapDispatchToProps)(CountriesSearchFieldContainer);