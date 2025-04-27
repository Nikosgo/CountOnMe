import React, { useState }  from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoGameControllerOutline } from 'react-icons/io5';

import '../../../Common/Common.css';

import Header from '../Header/Header.tsx';
import PopUpModal from '../PopUpModal/PopUpModal.tsx';
import DisplayBudget from '../Budget/DisplayBudget.tsx';
import DisplayExpenses from '../Expenses/DisplayExpenses.tsx';
import DisplayIncome from '../Income/DisplayIncome.tsx';
import DisplayTransactionTable from '../Transaction/TransactionTable.tsx'
import ExpenseCategoryIcon from '../Icons/ExpenseCategoryIcon.tsx'
import IncomeCategoryIcon from '../Icons/IncomeCategoryIcon.tsx'

import {
    postNewTransaction,
    fetchTransactionsByUser, fetchTop3ExpenseCategories, fetchTop3IncomeCategories,
    fetchTransactionsToday, fetchTransactionsWeek, fetchTransactionsMonth
} from '../../../Api/TransactionsApi.tsx';

const Home: React.FC = () => {

    const navigate = useNavigate();
    const userString = sessionStorage.getItem("user");
    const user = userString === null ? null : JSON.parse(userString)

    type CategoryItem = {
        value: string;
        label: React.ReactNode;
        price: number;
    };
    type TransactionItem = {
        key: string;
        date: string;
        category: string;
        description: string;
        amount: number;
        type: string;
    };
    type InsertTransaction = {
        type: string,
        category: string,
        description: string,
        amount: number
        user: string,
        date: Date
    };

    const transactionTabList = [
        {
            key: 'Today',
            tab: 'Today',
        },
        {
            key: 'Weekly',
            tab: 'Weekly',
        },
        {
            key: 'Monthly',
            tab: 'Monthly',
        },
    ];
    
    const [expenseItems, setExpenseItems] = useState<CategoryItem[]>([]);
    const [incomeItems, setIncomeItems] = useState<CategoryItem[]>([]);
    const [transactionItems, setTransactionItems] = useState<TransactionItem[]>([]);
    const [transactionItemsToday, setTransactionItemsToday] = useState<TransactionItem[]>([]);
    const [transactionItemsWeek, setTransactionItemsWeek] = useState<TransactionItem[]>([]);
    const [transactionItemsMonth, setTransactionItemsMonth] = useState<TransactionItem[]>([]);

    useEffect(() => {
        if (user === null) {
            navigate('/'); // 🚪 redirect back to login if no session
        } 
        else {
            // fetch top 3 expenses categories 
            fetchTop3ExpenseCategories(user.email).then(
                response => {
                    const CategoryItem = response.data.map((res) => ({
                        value: res.category,
                        label: (<ExpenseCategoryIcon category={res.category}/>),
                        price: res.amount
                    }))
                    setExpenseItems(CategoryItem);
                }
            );
            // fetch top 3 income categories 
            fetchTop3IncomeCategories(user.email).then(
                response => {
                    const CategoryItem = response.data.map((res) => ({
                        value: res.category,
                        label: (<IncomeCategoryIcon category={res.category}/>),
                        price: res.amount
                    }))
                    setIncomeItems(CategoryItem);
                }
            )

            // fetch all transactions filtered by today
            fetchTransactionsToday(user.email).then (
                response => {
                    const transactionArr = response.data;
                    let transactions = transactionArr.map((res, index) => ({
                        key: index,
                        date: res.date,
                        category: res.type === "income" ? (<IncomeCategoryIcon category={res.category}/>) : <ExpenseCategoryIcon category={res.category}/>,
                        description: res.description,
                        amount: res.amount,
                        type: res.type,
                    }))
                    setTransactionItemsToday(transactions);
                    setTransactionItems(transactions);
                }
            )
            
            // fetch all transactions filtered by this week
            fetchTransactionsWeek(user.email).then (
                response => {
                    const transactionArr = response.data;
                    let transactions = transactionArr.map((res, index) => ({
                        key: index,
                        date: res.date,
                        category: res.type === "income" ? (<IncomeCategoryIcon category={res.category}/>) : <ExpenseCategoryIcon category={res.category}/>,
                        description: res.description,
                        amount: res.amount,
                        type: res.type,
                    }))
                    setTransactionItemsWeek(transactions);
                }
            )

            // fetch all transactions filtered by this month
            fetchTransactionsMonth(user.email).then (
                response => {
                    const transactionArr = response.data;
                    let transactions = transactionArr.map((res, index) => ({
                        key: index,
                        date: res.date,
                        category: res.type === "income" ? (<IncomeCategoryIcon category={res.category}/>) : <ExpenseCategoryIcon category={res.category}/>,
                        description: res.description,
                        amount: res.amount,
                        type: res.type,
                    }))
                    setTransactionItemsMonth(transactions);
                }
            )
        }
    }, []);

    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
    const [expenseTransactionDetails, setExpenseTransactionDetails] = useState<InsertTransaction>();
    const showExpenseModal = () => {
        setIsExpenseModalOpen(true);
    };
    const handleExpenseOk = () => {
        console.log()
        setIsExpenseModalOpen(false);
    };
    const handleExpenseCancel = () => {
        setIsExpenseModalOpen(false);
    };
    const handleExpenseTransactionData = async (data) => {
        const insertTransaction = {
            type: "expense",
            category: data.category,
            description: data.description,
            amount: Number(data.amount),
            user: user.email,
            date: data.date
        }
        setExpenseTransactionDetails(insertTransaction);
        let success = await postNewTransaction(insertTransaction);
        console.log(success);
        
        if(!success) {
            alert("Error adding transaction. Please try again later.")
        }
        else {
            alert("Uploaded new expense")
            setIsExpenseModalOpen(false);
        }
    };


    const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
    const [incomeTransactionDetails, setIncomeTransactionDetails] = useState<InsertTransaction>();
    const showIncomeModal = () => {
        setIsIncomeModalOpen(true);
    };
    const handleIncomeOk = () => {
        setIsIncomeModalOpen(false);
    };
    const handleIncomeCancel = () => {
        setIsIncomeModalOpen(false);
    };
    const handleIncomeTransactionData = async (data) => {
        const insertTransaction = {
            type: "income",
            category: data.category,
            description: data.description,
            amount: Number(data.amount),
            user: user.email,
            date: data.date
        }
        setIncomeTransactionDetails(insertTransaction);
        let success = await postNewTransaction(insertTransaction);
        console.log(success);
        
        if(!success) {
            alert("Error adding transaction. Please try again later.")
        }
        else {
            alert("Uploaded new income")
            setIsIncomeModalOpen(false);
        }
    };


    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
    const showBudgetModal = () => {
        setIsBudgetModalOpen(true);
    };
    const handleBudgetOk = () => {
        setIsBudgetModalOpen(false);
    };
    const handleBudgetCancel = () => {
        setIsBudgetModalOpen(false);
    };

    const [isExpenseLoading, setIsExpenseLoading] = useState(false);
    const [isIncomeLoading, setIsIncomeLoading] = useState(false);
    const [isBudgetLoading, setIsBudgetLoading] = useState(false)
    const [isTransactionsLoading, setIsTransactionsLoading] = useState(false)
    const [transactionHistoryRange, setTransactionHistoryRange] = useState('Today');

    const onTransactionHistoryRangeChange = (key: string) => {
        setTransactionHistoryRange(key);
        switch(key) {
            case "Today":
                setTransactionItems(transactionItemsToday);
                break;
            case "Weekly":
                setTransactionItems(transactionItemsWeek);
                break;
            case "Monthly":
                setTransactionItems(transactionItemsMonth);
                break;
            default:
                setTransactionItems(transactionItemsToday);
                break;
        }
    };





    return (

        <div>
            <Header />

            <div>
                <PopUpModal 
                    title="Expenses" 
                    isModalOpen={isExpenseModalOpen}
                    handleCancel={handleExpenseCancel}
                    categories={expenseItems}
                    onTransactionData={handleExpenseTransactionData}
                />

                <PopUpModal 
                    title="Income" 
                    isModalOpen={isIncomeModalOpen}
                    handleOk={handleIncomeOk}
                    handleCancel={handleIncomeCancel}
                    categories={incomeItems}
                    onTransactionData={handleIncomeTransactionData}
                />

                <PopUpModal 
                    title="Budget" 
                    isModalOpen={isBudgetModalOpen}
                    handleOk={handleBudgetOk}
                    handleCancel={handleBudgetCancel}
                    categories={expenseItems}
                />

            </div>
            <div className="expenses-income-container">
                <DisplayExpenses isLoading={isExpenseLoading} data={expenseItems} addButtonClick={showExpenseModal}/>
                <DisplayIncome isLoading={isIncomeLoading} data={incomeItems} addButtonClick={showIncomeModal}/>
            </div>
            <div className="expenses-income-container">
                <DisplayBudget isLoading={isBudgetLoading} addButtonClick={showBudgetModal}/>
                <DisplayTransactionTable activeTab={transactionHistoryRange} tabList={transactionTabList} changeTab={onTransactionHistoryRangeChange} data={transactionItems} isLoading={isTransactionsLoading}/>
            </div>
        </div>

    );
}

export default Home;
