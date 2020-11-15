import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyCi-1qDXwWXFH_WdUvzpCGBney5kuxyEO4',
            authDomain: 'manager-f47d8.firebaseapp.com',
            databaseURL: 'https://manager-f47d8.firebaseio.com',
            projectId: 'manager-f47d8',
            storageBucket: 'manager-f47d8.appspot.com',
            messagingSenderId: '198103999139',
            appId: '1:198103999139:web:9bb349a2d94d6b271c5516',
          };

          if (firebase.apps.length === 0) {
            firebase.initializeApp(config);
          }
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
