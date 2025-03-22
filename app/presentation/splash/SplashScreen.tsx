import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from  "@root/App";
import {styles} from '@presentation/splash/SplashScreen.style';
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
   
       <Image source={{ uri: "https://play-lh.googleusercontent.com/rsVpOOx0805dxUELeplBw0UVlEwz8JRZ-X0lutWPwIaNfNGlJwQ75MBkQ2CdnzSTtOo".replace('http://', 'https://')}} style={styles.logo} resizeMode="contain" 
                    onError={() => console.log('Failed to load image')}
            />
      <Text style={styles.text}>Flip Transaction</Text>
    </View>
  );
};

export default SplashScreen;