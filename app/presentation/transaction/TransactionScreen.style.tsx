import {StyleSheet} from 'react-native';


export 
const styles = StyleSheet.create({
  safeArea:{
      flex:1,
      backgroundColor: 'rgba(7, 59, 249, 0.58)', 
  },
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginHorizontal: 20,
      elevation: 2,
      margin:12
    },
    toolbar: {
      alignItems: 'center',
      padding: 10,
      width: '100%',
    },
    titleToolbar: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal:12
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    closeIcon: {
      marginHorizontal: 8,
    },
    filterIcon: {
      marginLeft: 8,
    },
});