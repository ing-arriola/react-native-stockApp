/* eslint-disable react/react-in-jsx-scope */
import {AppNavigator} from './src/navigation/AppNavigator';
import {StockProvider} from './src/context/Stockcontext';
import FinnhubApiService from './src/services/FinnhubApiService';
import axios from 'axios';

const finnhub = 'https://finnhub.io/api/v1/';
const finnhubApi = axios.create({baseURL: finnhub});
const finnhubApiService = new FinnhubApiService(finnhubApi);

export default function App() {
  return (
    <StockProvider finnhubApiService={finnhubApiService}>
      <AppNavigator />
    </StockProvider>
  );
}
