import { createContext, ReactNode, useContext, useState } from "react";
import { Debt } from "../models/debt";


interface DebtContextData {
  debtList: Debt[];
  addToList: (item: Debt) => void;
  removeFromList: (id: string) => void;
  updateFromList: (id: string, data: Debt) => void;
}

interface DebtProviderProps {
  children: ReactNode;
}

const DebtContext = createContext<DebtContextData>({} as DebtContextData);

export const DebtProvider = ({ children }: DebtProviderProps) => {
  const [debtList, setDebtList] = useState<Debt[]>([]);

  function addToList(item: Debt) {
    setDebtList(st => [...st, item]);
  }

  function removeFromList(id: string) {
    setDebtList(st => st.filter((item) => item.id !== id));
  }

  function updateFromList(id: string, data: Debt) {
    setDebtList(st => {
      const idx = st.findIndex(item => item.id === id)
      st.splice(idx, 1, data)
      return st
    });
  }

  return (<DebtContext.Provider value={{ debtList, addToList, removeFromList, updateFromList }}>
    {children}
  </DebtContext.Provider>)
};

export function useDebt() {
  return useContext(DebtContext);
}