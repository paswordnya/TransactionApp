/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@presentation/splash/SplashScreen';
import BottomTabs from '@presentation/bottomTabs/BottomTabsScreen';
import TransactionDetailScreen from '@presentation/transactionDetail/TransactionDetail';
import { TransactionItemModel } from '@model/TransactionItemModel';


export type RootStackParamList = {
  Splash: {  }; 
  Home: {  }; 
  TransactionDetail: {transactionItemModel: TransactionItemModel}; 
};
const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={BottomTabs}
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Detail Transaksi', headerBackTitle: "" }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
