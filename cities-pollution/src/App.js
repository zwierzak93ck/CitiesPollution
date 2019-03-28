import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityInformationContainer from './containers/CityInformationContainer';
import CountriesSearchFieldContainer from './containers/CountriesSearchFieldContainer';
import './stylesheets/rootStyles.scss';

class App extends Component {

  render() {
    return (
      <div>
        <CountriesSearchFieldContainer />
        {this.props.informations ?
          <CityInformationContainer /> : null
        }
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    informations: state.informations
  }
}

export default connect(mapStateToProps)(App);
