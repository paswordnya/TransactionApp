/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/presentation/splash/SplashScreen';
import HomeScreen from './app/presentation/home/HomeScreen';
import TransactionDetailScreen from './app/presentation/transactionDetail/TransactionDetail';
import { TransactionItemModel } from './app/model/TransactionItemModel';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type RootStackParamList = {
  Splash: {  }; 
  Home: {  }; 
  TransactionList: {  }; 
  TransactionDetail: {transactionItemModel: TransactionItemModel}; 
};
const Stack = createStackNavigator();


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
       
        <Stack.Screen name="Home" component={HomeScreen} 
         options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Detail Transaksi', headerBackTitle: ""  }} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
