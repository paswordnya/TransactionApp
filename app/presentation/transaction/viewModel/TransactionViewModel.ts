import { useState, useEffect } from "react";
import { getDataTransaction } from "../../../repository/home/HomeRepository";
import { TransactionItemModel } from "../../../model/TransactionItemModel";

export const transactionsViewModel = () => {
  const [transactions, setTransactions] = useState<TransactionItemModel[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionItemModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const getTransactionList = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDataTransaction();
      setTransactions(data);
      setFilteredTransactions(data); 
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };


  const filterAndSortTransactions = (query: string, filter: string) => {
    if (transactions.length === 0) return; 
  
    let filtered = [...transactions];
  
    if (query.length >= 2) {
      filtered = filtered.filter((item) =>
        item.beneficiary_name.toLowerCase().includes(query.toLowerCase()) ||
        item.sender_bank.toLowerCase().includes(query.toLowerCase()) ||
        item.beneficiary_bank.toLowerCase().includes(query.toLowerCase()) ||
        item.amount.toString().includes(query) 
      );
    }
    if (query.length >= 2 && filtered.length === 0) {
      console.log("No transactions found matching:", query);
    }
  
    switch (filter) {
      case "name_asc":
        filtered.sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name));
        break;
      case "name_desc":
        filtered.sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name));
        break;
      case "date_oldest":
        filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      case "date_newest":
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      default:
        break;
    }
  
    setFilteredTransactions(filtered);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterAndSortTransactions(query, selectedFilter);
  };

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    filterAndSortTransactions(searchQuery, filter);
    setIsModalVisible(false);
  };
  const toggleModal = (visible: boolean) => {
    setIsModalVisible(visible);
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  return {
    getTransactionList,
    searchQuery,
    handleSearch,
    handleSelectFilter,
    filteredTransactions,
    loading,
    error,
    toggleModal,
    isModalVisible
  };
};
