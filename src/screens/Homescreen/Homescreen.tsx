/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useContext, useEffect, useState} from 'react';
import {View, Keyboard} from 'react-native';

import {Button} from '../../components/Button';
import * as S from './styles';
import {ADD_AN_ALERT, SELECT_STOCK_TO_WATCH} from '../../constants/Labels';
import DropDownPicker from 'react-native-dropdown-picker';
import {InputText} from '../../components/Input';
import StockContext from '../../context/Stockcontext';
import Modal from 'react-native-modal';

type availableStock = {label: string; value: string};

export const HomeScreen = () => {
  const context = useContext(StockContext);
  const [priceAlert, setpriceAlert] = useState<string>('');

  const [isModalVisible, setisModalVisible] = useState(false);
  //Dropdown
  const [open, setOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<string>('');
  /*   const [items, setItems] = useState(
    availableStocks.map(item => ({
      label: item.displaySymbol,
      value: item.symbol,
    })),
  ); */
  const [availableStocks, setavailableStocks] = useState<availableStock[]>([]);

  const getAvailableStocks = async () => {
    try {
      const data = await context?.getStockData(
        'stock/symbol?exchange=US&token=ckpki91r01qkitmj3tmgckpki91r01qkitmj3tn0',
      );
      if (data) {
        setavailableStocks(
          data.map(item => ({
            label: item.displaySymbol,
            value: item.symbol,
          })),
        );
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvailableStocks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AddNewAlert = () => {
    Keyboard.dismiss();
    setisModalVisible(true);
    const alreadyExistingStocks = context?.stocksToWatch
      ? context.stocksToWatch
      : [];
    const newStockTobeWatched = {
      alert: priceAlert,
      stockToWatch: selectedStock,
    };
    const stocksToSet = [...alreadyExistingStocks, newStockTobeWatched];
    context?.setstocksToWatch(stocksToSet);
  };

  const onCloseModal = () => {
    setisModalVisible(false);
    setSelectedStock('');
    setpriceAlert('');
  };

  return (
    <S.Container>
      <View style={{padding: 20}}>
        <S.TitleContainer>
          <S.TitleBold>{ADD_AN_ALERT}</S.TitleBold>
        </S.TitleContainer>
        <S.TextSecondary>{SELECT_STOCK_TO_WATCH}</S.TextSecondary>
        <DropDownPicker
          open={open}
          value={selectedStock}
          items={availableStocks}
          setOpen={setOpen}
          setValue={setSelectedStock}
          setItems={setavailableStocks}
          placeholder="Select a stock to watch"
        />
        <InputText
          label="price alert"
          placeholderText="price alert"
          value={priceAlert}
          onchange={value => setpriceAlert(value)}
        />
        <S.ButtonContainer>
          <Button
            label="Add"
            onPress={
              selectedStock === '' || priceAlert === ''
                ? () => {}
                : () => AddNewAlert()
            }
            size="large"
            disabled={selectedStock === '' || priceAlert === ''}
          />
        </S.ButtonContainer>
      </View>
      <Modal isVisible={isModalVisible}>
        <S.CardContainer>
          <S.Title>Added new a new alert</S.Title>
          <S.TextSecondary>
            {`Added an alert for ${selectedStock}`}
          </S.TextSecondary>
          <Button label="Accept" onPress={onCloseModal} size="small" />
        </S.CardContainer>
      </Modal>
    </S.Container>
  );
};
