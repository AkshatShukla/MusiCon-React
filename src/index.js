import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Reducer} from './reducers/Reducer'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import HomeContainer from "./containers/HomeContainer";
import SearchContainer from './containers/SearchContainer';
let store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
       <HomeContainer/>
    </Provider>
    ,
    document.getElementById('root'));

