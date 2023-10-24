import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContex } from './store/FirebaseContex'
import firebase from './Firebase/config';
import Contex from './store/FirebaseContex';

ReactDOM.render(
    <FirebaseContex.Provider value={{ firebase }}>
        <Contex>
            <App />
        </Contex>
    </FirebaseContex.Provider>,
    document.getElementById('root'));
