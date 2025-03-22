import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { View, Text,TouchableOpacity,Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../../App"
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {formatDate, formatCurrency }from '../../utils/utils'
import { styles } from './transactionDetail.style';

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

      <Text style={styles.bankText}>
        {transactionItemModel.sender_bank} ➝ {transactionItemModel.beneficiary_bank}
      </Text>

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


export default TransactionDetailScreen;
