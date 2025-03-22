import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../App"
import {styles} from './SplashScreen.style';
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
 
    setTimeout(() => {
        navigation.navigate('Home',{});
    }, 3000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../assets/splashLogo.png')} 
        style={styles.logo}
      /> */}
      <Text style={styles.text}>Welcome to the App Flip Transaction</Text>
    </View>
  );
};

export default SplashScreen;