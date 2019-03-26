import React, { Component } from 'react';
import CountriesSearchFieldContainer from './containers/CountriesSearchFieldContainer';
import CityInformationContainer from './containers/CityInformationContainer';

class App extends Component {

  render() {
    return (
      <div>
              <CountriesSearchFieldContainer />
              <CityInformationContainer />
      </div>

    );
  }
}

export default App;
