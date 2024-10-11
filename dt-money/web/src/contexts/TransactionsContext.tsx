import { ReactNode, createContext, useEffect, useState } from "react"

interface ITransaction {
    id: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
  }
  

interface TransactionContextType {
    transactions: ITransaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children} : TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    async function fetchTransactions(query?: string) {
        const url = new URL("http://192.168.10.112:3333/transactions");

        if(query) {
            url.searchParams.append('q', query);
        }

        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ 
            transactions,
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}