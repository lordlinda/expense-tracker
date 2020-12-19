import { useState, useReducer, createContext } from "react";
import reducer from "./AppReducer";
import { useTransactions } from "../hooks/useTransactions";
import axios from "axios";
///create context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { transactions } = useTransactions();
  const [state, dispatch] = useReducer(reducer, {
    transactions,
  });
  // Actions
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(
        `https://expense-tracker-back.herokuapp.com/transaction/${id}`
      );
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      alert(error);
    }
  };

  const addTransaction = async (transaction) => {
    try {
      await axios.post(
        `https://expense-tracker-back.herokuapp.com/transactions`,
        transaction
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
