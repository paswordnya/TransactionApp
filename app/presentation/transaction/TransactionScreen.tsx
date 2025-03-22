import React from 'react';
import { View,TouchableOpacity ,TextInput,FlatList} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "@root/App";
import Icon from 'react-native-vector-icons/Ionicons';
import TransactionItemList from '@presentation/transactionList/TransactionItemList';
import { TransactionItemModel } from '@model/TransactionItemModel';
import { transactionsViewModel } from '@presentation/transaction/viewModel/TransactionViewModel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FilterModal from '@presentation/transaction/component/FilterModal';
import { styles } from '@presentation/transaction/TransactionScreen.style';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const TransactionScreen = ({ navigation }: Props) => {
    const {
      searchQuery,
      handleSearch,
      handleSelectFilter,
      filteredTransactions,
      loading,
      error,
      toggleModal,
      isModalVisible
    } = transactionsViewModel();
    const insets = useSafeAreaInsets();
  
    const renderItem = ({ item }: { item: TransactionItemModel }) => (
        <TransactionItemList item={item} />
    );

    return(
    
        <View style={{flex:1}}>
      
        <View style={styles.container}>
            <Icon name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Cari Nama Bank Atau Nominal"
                value={searchQuery}
                onChangeText={handleSearch}
            />
            
            {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => handleSearch('')}>
                <Icon name="close" size={20} color="gray" style={styles.closeIcon} />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => toggleModal(true)}>
                <Icon name="filter" size={22} color="#4A5EE5" style={styles.filterIcon} />
            </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:12,flex:1, backgroundColor:"#FFF", padding:12}}>
            <FlatList
                data={filteredTransactions || []}
                keyExtractor={(item) => item?.id ?? Math.random().toString()} 
                renderItem={renderItem}
                />
                </View>
              {/* Show Filter Modal */}
             <FilterModal visible={isModalVisible} onClose={() => toggleModal(false)} onSelectFilter={handleSelectFilter} />
   
            </View>
    )
  }

  export default TransactionScreen;