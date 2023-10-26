/* eslint-disable react/react-in-jsx-scope */
import {AppNavigator} from './src/navigation/AppNavigator';
import {StockProvider} from './src/context/Stockcontext';

export default function App() {
  return (
    <StockProvider>
      <AppNavigator />
    </StockProvider>
  );
}
