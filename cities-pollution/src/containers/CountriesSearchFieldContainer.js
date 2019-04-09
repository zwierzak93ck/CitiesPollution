import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CountriesSearchField } from '../components/CountriesSearchField';
import { openDataBase, loadData, addOrUpdateData } from '../services/DataBase';
import { validate } from '../services/Validation';
import {setCitiesInformations} from '../services/ApiService';
import { countries } from '../consts'

class CountriesSearchFieldContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: null
        }
    }

    async componentDidMount() {
        const openedDataBase = await openDataBase();

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

    setCitiesInformations = async () => {
        this.props.setCitiesInformations(await setCitiesInformations(this.state.country.value))
    }

    render() {
        console.log(this.state)
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