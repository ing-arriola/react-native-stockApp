/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, AlertsScreen} from '../../screens';

export type ParamListBase = {
  Home: undefined;
  ProductDetail: {stock: string};
};

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Alert"
        component={AlertsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
