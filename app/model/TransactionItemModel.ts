
export type  TransactionItemModel = {
    id: string;
    sender_bank: string;
    beneficiary_bank: string;
    beneficiary_name: string;
    amount: number;
    account_number: number;
    unique_code: number;
    created_at: string;
    completed_at: string;
    status: string;
    remark: string;
    fee: string;
  }

  export const transformApiDataToTransaction = (apiData: any): TransactionItemModel => {
    return {
      id: apiData.id,
      sender_bank: apiData.sender_bank,
      beneficiary_bank: apiData.beneficiary_bank,
      beneficiary_name: apiData.beneficiary_name,
      amount: apiData.amount,
      account_number: apiData.account_number,
      unique_code: apiData.unique_code,
      created_at: apiData.created_at,
      completed_at: apiData.completed_at,
      status: apiData.status,
      remark: apiData.remark,
      fee: apiData.fee,
    };
  };
  