import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import TransactionScreen from '@presentation/transaction/TransactionScreen';
import ProfileScreen from '@presentation/profileScreen/ProfileScreen';

type RootTabParamList = {
  Transactions: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();


const BottomTabs: React.FC = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;
            switch (route.name) {
              case 'Transactions':
                iconName = 'shuffle';
                break;
              case 'Profile':
                iconName = 'user';
                break;
              default:
                iconName = 'user';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3366FF',
          tabBarInactiveTintColor: 'lightgray',
          tabBarStyle: {
            bottom: 0,
            left: 20,
            right: 20,
            elevation: 5,
            backgroundColor: 'white',
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        })}
      >
         <Tab.Screen name="Transactions" component={TransactionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export default BottomTabs;
