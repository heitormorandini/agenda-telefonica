import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from "react-native";

import './config/reactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#253033" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
