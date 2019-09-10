import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';

const App = () => (
  <>
    <StatusBar backgroundColor="#004890" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
