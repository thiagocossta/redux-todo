import React, { Component } from 'react';

import { Provider } from 'react-redux';
import Todos from './Todos';
import store from './store/store';

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  }
}

export default App;
