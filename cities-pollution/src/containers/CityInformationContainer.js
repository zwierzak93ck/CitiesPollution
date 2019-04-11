import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
const  CityInformation  = lazy(() => import('../components/CityInformation'))

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
        return (
            <Suspense fallback={<h1>Loading <CircularProgress color="primary"/></h1>}>
                { this.props.informations.name.map(name => {
                return <CityInformation
                    name={name}
                    description={this.props.informations.description[this.props.informations.name.indexOf(name)]}
                    key={Date.now() + Math.random()}
                    handleChange={this.handleChange(name)}
                    expanded={this.state.expanded === name}
                />
            }) }
            </Suspense>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        informations: state.informations
    }
}

export default connect(mapStateToProps)(CityInformationContainer);