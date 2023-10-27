import React, {createContext, useState, useContext} from 'react';
import FinnhubApiService from '../services/FinnhubApiService';
import {Stock} from '../interfaces/Stock';

interface StockContextType {
  stocksToWatch: stockTobeWatched[] | undefined;
  setstocksToWatch: React.Dispatch<
    React.SetStateAction<stockTobeWatched[] | undefined>
  >;
  getStockData: (endpoint: string) => Promise<Stock[]>;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

interface Props {
  children: JSX.Element;
  finnhubApiService: FinnhubApiService;
}

type stockTobeWatched = {
  stockToWatch: string;
  alert: string;
};

export const StockProvider: React.FC<Props> = ({
  children,
  finnhubApiService,
}) => {
  const [stocksToWatch, setstocksToWatch] = useState<
    stockTobeWatched[] | undefined
  >();

  const getStockData = async (endpoint: string) => {
    try {
      const response = await finnhubApiService.getStockData(endpoint);
      // Process the response as needed
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error fetching stock data', error);
      return null;
    }
  };

  return (
    <StockContext.Provider
      value={{stocksToWatch, setstocksToWatch, getStockData}}>
      {children}
    </StockContext.Provider>
  );
};

// Crear un custom hook para acceder al contexto
export const useStockContext = () => {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export default StockContext;
