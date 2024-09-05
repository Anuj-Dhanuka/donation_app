import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

//navigation
import Navigation from './src/Navigation';

//redux
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import { checkToken } from './src/utils/ApiUtils/User';

const App = () => {
  const appState = useRef(AppState.currentState) 

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async(nextAppState) => {

      if(appState.current.match(/inactive|background/) && (nextAppState === 'active')){
        await checkToken()
      }
      appState.current = nextAppState
    })
    checkToken()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
