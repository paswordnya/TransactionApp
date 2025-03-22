import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,TextInput,FlatList} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons';
import TransactionItemList from '../transactionList/TransactionItemList';
import { TransactionItemModel } from '../../model/TransactionItemModel';
import { homeViewModel } from './viewModel/HomeViewModel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilterModal from './component/FilterModal';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};


const HomeScreen = ({ navigation }: Props) => {
    const {
      searchQuery,
      handleSearch,
      handleSelectFilter,
      filteredTransactions,
      loading,
      error,
      toggleModal,
      isModalVisible
    } = homeViewModel();
    const insets = useSafeAreaInsets();
  
    const renderItem = ({ item }: { item: TransactionItemModel }) => (
        <TransactionItemList item={item} />
    );

    return(
      <SafeAreaView style={[styles.safeArea, { flex: 1 }]} edges={['top', 'left', 'right']}>
        <View style={{flex:1}}>
        <View style={styles.toolbar}>
            
                <Text style={styles.titleToolbar}>Transaction</Text>
               
            </View>
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
    </SafeAreaView>)
  }

  const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor: 'rgba(7, 59, 249, 0.58)', 
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
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
  export default HomeScreen;