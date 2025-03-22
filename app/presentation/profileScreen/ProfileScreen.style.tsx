import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
    header: {
      height: 180,
      backgroundColor: '#4A90E2', 
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    profileCard: {
      alignItems: 'center',
      marginTop: -50, 
      backgroundColor: 'white',
      marginHorizontal: 20,
      borderRadius: 20,
      padding: 20,
      elevation: 5, 
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 3 },
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: 'white',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    location: {
      fontSize: 14,
      color: '#4A90E2',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 20,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: 14,
      color: 'gray',
    },
  });
  