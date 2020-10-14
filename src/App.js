import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { configureStore } from './redux/configureStore';


import Main from './components/Main';
  
const store = configureStore();


class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
    
  
  
}

export default App;