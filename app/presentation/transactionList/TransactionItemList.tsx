import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from '../../../App'
import { TransactionItemModel } from '../../model/TransactionItemModel';
import {formatDate, formatCurrency }from '../../utils/utils'
import { styles } from './TransactionItemList.style';

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
        <Text style={[styles.recipient, { textTransform: "uppercase" }]}>{item.beneficiary_name}</Text>
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

export default TransactionItemList;
