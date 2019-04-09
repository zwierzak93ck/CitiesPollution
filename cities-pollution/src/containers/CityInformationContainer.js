import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CityInformation } from '../components/CityInformation';

class CityInformationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: null
        }
    }

    handleChange = (panel) => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : true
        })
    }

    render() {
        console.log(this.props.informations)
        return (
            this.props.informations.name.map(name => {
                return <CityInformation
                    name={name}
                    description={this.props.informations.description[this.props.informations.name.indexOf(name)]}
                    key={Date.now() + Math.random()}
                    handleChange={this.handleChange(name)}
                    expanded={this.state.expanded === name}
                />
            }) 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        informations: state.informations
    }
}

export default connect(mapStateToProps)(CityInformationContainer);