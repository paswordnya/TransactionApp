import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../../../App'
import { TransactionItemModel } from '../../model/TransactionItemModel';
import {formatDate, formatCurrency }from '../../utils/utils'

  type TransactionItemModelItemProp = {
    item: TransactionItemModel;
  };

const TransactionItemList: React.FC<TransactionItemModelItemProp> = ({
   item
}) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'TransactionDetail'>>();

  return (
    <TouchableOpacity 
          onPress={() => navigation.navigate('TransactionDetail', { transactionItemModel: item })}
    >
      <View style={[styles.container, item.status === "PENDING" ? styles.colorBorderLeftContainerPending : styles.colorBorderLeftContainer]}>
      <View style={styles.content}>
        <Text style={styles.bankText}>
          {item.sender_bank} ➝ {item.beneficiary_bank}
        </Text>
        <Text style={styles.recipient}>{item.beneficiary_name}</Text>
        <Text style={styles.amount}>
          {formatCurrency(item.amount)} <Text style={[item.status === "PENDING" ? styles.dotPending : styles.dot]}>•</Text> {formatDate(item.created_at)}
        </Text>
      </View>
      <View style={[item.status === "PENDING" ? styles.statusBadgePending : styles.statusBadge]}>
        <Text style={[item.status === "PENDING" ? styles.statusTextPending : styles.statusText]}>{item.status}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 9,
    borderLeftWidth: 9,  // Kiri lebih tebal
    borderTopWidth: 0,   // Atas
    borderRightWidth: 0, // Kanan
    borderBottomWidth: 0,// Bawah
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,  
    elevation: 5,
    marginVertical: 6,
  },
  colorBorderLeftContainer: {
    borderLeftColor: "green",
  },
  colorBorderLeftContainerPending: {
    borderLeftColor: "#fe6550",
  },
  leftIndicator: {
    width: 4,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    height: '100%',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  bankText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize' 
  },
  recipient: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  amount: {
    fontSize: 14,
    color: '#555',
  },
  dot: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "green",
  },
  dotPending: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fe6550",
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusBadgePending: {
    color: "#fe6550",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderColor: "#fe6550", 
    borderWidth: 1, 
  },  
  statusTextPending: {
    color: "#fe6550",
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusText: {
    color: "white",
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});

export default TransactionItemList;
