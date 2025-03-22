import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { View, Text, StyleSheet,TouchableOpacity,Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../App"
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {formatDate, formatCurrency }from '../../utils/utils'

type TransactionDetailNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionDetail'>;
type TransactionDetailRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

type Props = {
  navigation: TransactionDetailNavigationProp;
};

const TransactionDetailScreen = ({navigation}: Props) =>{

    const route = useRoute<TransactionDetailRouteProp>();
    const { transactionItemModel } = route.params; 
 
  const handleCopyText = async (text: string) => {
    Clipboard.setString(text);
    Alert.alert('ID Transaksi telah disalin');
  };
  return (
    <View style={[styles.container, transactionItemModel.status === "PENDING" ? styles.colorStatusPending : styles.colorStatus]}>
       <View style={styles.content}>
       <View>
          <View style={styles.rowHeader}>
          <Text style={styles.label}>ID TRANSAKSI:</Text>
            <Text style={styles.value}>#{transactionItemModel.id} </Text>
            <TouchableOpacity onPress={() => handleCopyText(transactionItemModel.id)}>
              <Icon name="copy-outline" size={20} color="#fe6550"  />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      {/* Bank Info */}

      <Text style={styles.bankText}>
        {transactionItemModel.sender_bank} ➝ {transactionItemModel.beneficiary_bank}
      </Text>

      {/* Penerima */}
      <View style={styles.row}>
        <View style={styles.column}>
        <Text style={styles.label}>- {transactionItemModel.beneficiary_name}</Text>
        <Text style={styles.value}>{transactionItemModel.id}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>KODE UNIK</Text>
          <Text style={styles.value}>{transactionItemModel.unique_code}</Text>
        </View>
      </View>

      {/* Dua kolom */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>BERITA TRANSFER</Text>
          <Text style={styles.value}>{transactionItemModel.remark}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>NOMINAL</Text>
          <Text style={styles.value}>{formatCurrency(transactionItemModel.amount)}</Text>
        </View>
      </View>

      {/* Dua kolom */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>WAKTU DIBUAT</Text>
          <Text style={styles.value}>{formatDate(transactionItemModel.created_at)}</Text>
        </View>
      </View>

    
        <Text style={[styles.watermark, transactionItemModel.status === "PENDING" ? styles.watermarkColorPending: styles.watermarkColor]}>{transactionItemModel.status}</Text>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TransactionDetailScreen;
