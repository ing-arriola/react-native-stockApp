/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';

import {StockProvider} from './src/context/Stockcontext';
import FinnhubApiService from './src/services/FinnhubApiService';
import {MainNavigator} from './src/navigation';

const finnhub = 'https://finnhub.io/api/v1/';
const finnhubApi = axios.create({baseURL: finnhub});
const finnhubApiService = new FinnhubApiService(finnhubApi);

export default function App() {
  return (
    <StockProvider finnhubApiService={finnhubApiService}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </StockProvider>
  );
}
