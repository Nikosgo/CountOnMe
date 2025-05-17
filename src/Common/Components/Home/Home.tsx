import React, { useState }  from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    fetchTop3ExpenseCategories, fetchTop3IncomeCategories,
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

    const expenseCategories = [
        {value: "Food"},
        {value: "Drinks"},
        {value: "Shopping"},
        {value: "Transport"},
        {value: "Play"},
        {value: "Life"},
        {value: "Others"}
    ]

    const incomeCategories = [
        {value: "Salary"},
        {value: "Savings"},
        {value: "Investment"},
        {value: "Others"}
    ]

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
            updateExpensePanel(user.email)
            
            // fetch top 3 income categories 
            updateIncomePanel(user.email)
            
            updateTransactionTables(user);
        }
    }, []);

    const updateExpensePanel = async (email) => {
        fetchTop3ExpenseCategories(email).then(
            response => {
                const CategoryItem = response.data.map((res) => ({
                    value: res.category,
                    label: (<ExpenseCategoryIcon category={res.category}/>),
                    price: res.amount
                }))
                if(CategoryItem.length === 1) {
                    const extra = expenseCategories
                        .filter((cat) => (cat.value !== CategoryItem[0].value))
                        .slice(0,2)
                        .map((cat) => ({
                            value: cat.value,
                            label: (<ExpenseCategoryIcon category={cat.value}/>),
                            price: 0
                        }))
                    CategoryItem.push(extra[0]);
                    CategoryItem.push(extra[1]);
                }
                else if(CategoryItem.length === 2) {
                    const extra = expenseCategories
                        .filter((cat) => (cat.value !== CategoryItem[0].value && cat.value !== CategoryItem[1].value))
                        .slice(0,2)
                        .map((cat) => ({
                            value: cat.value,
                            label: (<ExpenseCategoryIcon category={cat.value}/>),
                            price: 0
                        }))
                    CategoryItem.push(extra[0]);
                }

                setExpenseItems(CategoryItem);
            }
        );
    }

    const updateIncomePanel = async (email) => {
        fetchTop3IncomeCategories(email).then(
            response => {

                const CategoryItem = response.data.map((res) => ({
                    value: res.category,
                    label: (<IncomeCategoryIcon category={res.category}/>),
                    price: res.amount
                }))
                if(CategoryItem.length === 1) {
                    const extra = incomeCategories
                        .filter((cat) => (cat.value !== CategoryItem[0].value))
                        .slice(0,2)
                        .map((cat) => ({
                            value: cat.value,
                            label: (<IncomeCategoryIcon category={cat.value}/>),
                            price: 0
                        }))
                    CategoryItem.push(extra[0]);
                    CategoryItem.push(extra[1]);
                }
                else if(CategoryItem.length === 2) {
                    const extra = incomeCategories
                        .filter((cat) => (cat.value !== CategoryItem[0].value && cat.value !== CategoryItem[1].value))
                        .slice(0,2)
                        .map((cat) => ({
                            value: cat.value,
                            label: (<IncomeCategoryIcon category={cat.value}/>),
                            price: 0
                        }))
                    CategoryItem.push(extra[0]);
                }
                setIncomeItems(CategoryItem);
            }
        )
    }

    const updateTransactionTables = async (user) => {
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
            updateExpensePanel(user.email)
            updateTransactionTables(user)
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
            updateIncomePanel(user.email)
            updateTransactionTables(user)
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
                    categories={expenseCategories}
                    onTransactionData={handleExpenseTransactionData}
                />

                <PopUpModal 
                    title="Income" 
                    isModalOpen={isIncomeModalOpen}
                    handleOk={handleIncomeOk}
                    handleCancel={handleIncomeCancel}
                    categories={incomeCategories}
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
