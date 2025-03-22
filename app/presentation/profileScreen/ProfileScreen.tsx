import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '@presentation/profileScreen/ProfileScreen.style';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
   
      <View style={styles.header} />

      <View style={styles.profileCard}>
        
        <Image source={{ uri: "https://media.licdn.com/dms/image/v2/D5603AQGNuZJYG3FO1g/profile-displayphoto-shrink_200_200/B56ZS8q4CCHEAY-/0/1738332145323?e=1747872000&v=beta&t=uI32yFPnMIkP6Amu6s9ljHA5Dq6R855Z2GEPKJ5e-d8".replace('http://', 'https://')}} style={styles.profileImage} resizeMode="contain" 
              onError={() => console.log('Failed to load image')}
            />
        <Text style={styles.name}>Rakka Purnama</Text>
        <Text style={styles.location}>Bogor, Jawa barat</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Transaction</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>271</Text>
            <Text style={styles.statLabel}>Point</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12K</Text>
            <Text style={styles.statLabel}>Reward</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
