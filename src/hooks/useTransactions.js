import { useState, useEffect } from "react";
import axios from "axios";
export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const fetchData = async () => {
    try {
      const transactionsdata = await axios.get(
        `https://expense-tracker-back.herokuapp.com/transactions`
      );
      if (transactions.length !== transactionsdata?.data?.transactions) {
        setTransactions(transactionsdata?.data?.transactions);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [transactions]);
  return {
    transactions,
  };
};
