import axios from 'axios';
import { TransactionItemModel } from '@model/TransactionItemModel';


export const getDataTransaction = async (): Promise<TransactionItemModel[]> => {
  try {
    const response = await axios.get(`https://recruitment-test.flip.id/frontend-test`, {
      timeout: 5000,
      headers: { 'Accept': 'application/json' },
    });

    // Convert object to array
    const transactions: TransactionItemModel[] = Object.values(response.data);

    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

