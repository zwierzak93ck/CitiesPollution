import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CityInformation} from '../components/CityInformation';
import axios from 'axios';

class CityInformationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
            description: null
        }
    }

    handleChange = (panel) => (event, expanded) => {
        console.log(panel)
        this.setState({
            expanded: expanded ? panel : true
        })
    }

    getDescription = () => {
        axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=radom&format=json')
            .then((result) => {
                console.log(result)
            })
    }

    render() {
        return (
            this.props.cities.map(element => {
                return <CityInformation 
                    city={element}
                    key={Date.now() + Math.random()}
                    handleChange={this.handleChange(element)}
                    expanded={this.state.expanded === element}
                    description={this.getDescription()}
                />
            })
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(CityInformationComponent);