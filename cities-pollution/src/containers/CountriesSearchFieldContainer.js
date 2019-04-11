import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CountriesSearchField } from '../components/CountriesSearchField';
import { openDataBase, loadData, addOrUpdateData } from '../services/DataBase';
import { validate } from '../services/Validation';
import {setCitiesInformations} from '../services/Api';
import { countries } from '../consts'

class CountriesSearchFieldContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country: '',
            limit: 0
        }
    }

    async componentDidMount() {
        const openedDataBase = await openDataBase();

        await loadData(openedDataBase).then((result) => {
            this.setState({
                country: result ? result.data.country : null,
                limit: result ? result.data.limit : null
            })
        });

        window.onbeforeunload = () => {
            addOrUpdateData(openedDataBase, this.state);
        }
    };

    onValueChange = (e) => {
        if (e.target) {
            this.setState({
                limit: e.target.value
            })
        }
        else {
        this.setState({
            country: e ? e : null
        })
    }
    }

    setCitiesInformations = async () => {
        this.props.setCitiesInformations(await setCitiesInformations(this.state.country.value, this.state.limit))
    }

    render() {
        return (
            <CountriesSearchField
                options={countries}
                onChange={this.onValueChange}
                country={this.state.country}
                limit={this.state.limit}
                onClick={this.setCitiesInformations}
                validate={validate([this.state.country, this.state.limit])}
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