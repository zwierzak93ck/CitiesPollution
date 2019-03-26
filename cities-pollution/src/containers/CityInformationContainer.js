import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CityInformation} from '../components/CityInformation';

class CityInformationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: null
        }
    }

    handleChange = (panel) => (event, expanded) => {
        console.log(panel)
        this.setState({
            expanded: expanded ? panel : true
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