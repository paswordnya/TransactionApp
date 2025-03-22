import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:30,
      paddingHorizontal:1
  
    },
    colorStatus:{
      backgroundColor: 'rgba(45, 193, 12, 0.3)',
    },
    colorStatusPending:{
      backgroundColor: '#fe6550',
    },
    content:{
      flex:1,
      backgroundColor:"white",
      borderTopStartRadius:16,
      borderTopEndRadius:16,
      paddingHorizontal:12,
      paddingVertical:18
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    rowHeader: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    divider:{
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0', 
      marginVertical: 10, 
    },
    label: {
      fontSize: 16,
      marginVertical: 4,
      fontWeight: 'bold',
      color: '#000',
    },
    value: {
      fontSize: 16,
      marginStart:4,
      color: '#686868',
    },
    header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 ,
    marginTop:12},
    headerTitle: { fontSize: 16, fontWeight: "bold" ,   color: '#000', },
    closeButton: { color: "#fe6550", fontSize: 16 },
    bankText: { fontSize: 18, fontWeight: "bold", marginBottom: 10 ,marginTop:10,   color: '#000', textTransform: 'capitalize' },
    row: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    column: { width: "45%" },
    watermark: {
      position: 'absolute',
      top: '50%',
      left: '15%',
      right: '15%',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      // Warna oranye transparan
      transform: [{ rotate: '-30deg' }], // Memiringkan teks
    },
    watermarkColorPending:{
      color: 'rgba(255, 165, 0, 0.3)',
    },
    watermarkColor:{
      color: 'rgba(45, 193, 12, 0.3)',
   
    }
  });