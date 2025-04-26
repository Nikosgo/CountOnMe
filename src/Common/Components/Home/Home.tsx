import React, { useState }  from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoFastFoodOutline, IoGameControllerOutline, IoTrainOutline } from 'react-icons/io5';
import { PiMoney } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";
import { Button } from 'antd';

import '../../../Common/Common.css';

import Header from '../Header/Header.tsx';
import PopUpModal from '../PopUpModal/PopUpModal.tsx';
import DisplayBudget from '../Budget/DisplayBudget.tsx';
import DisplayExpenses from '../Expenses/DisplayExpenses.tsx';
import DisplayIncome from '../Income/DisplayIncome.tsx';
import DisplayTransactionTable from '../Transaction/TransactionTable.tsx'
import CategoryIcon from '../Icons/CategoryIcon.tsx'

import {fetchTop3ExpenseCategories} from '../../../Api/TransactionsApi.tsx';

const Home: React.FC = () => {

    const navigate = useNavigate();

    type expenseItems = {
        value: string;
        label: React.ReactNode; // JSX elements like <div>...</div> are ReactNode
        price: number;
    };

    const [expenseItems, setExpenseItems] = useState([]);

    useEffect(() => {
        const userString = sessionStorage.getItem("user");
        if (userString === null) {
            navigate('/'); // 🚪 redirect back to login if no session
        } 
        else {
            const user = JSON.parse(userString);
            fetchTop3ExpenseCategories(user.email).then(
                response => {
                    const expensesCat = response.data.map((res) => ({
                        value: res.category,
                        label: (<CategoryIcon category={res.category}/>),
                        price: res.amount
                    }))
                    setExpenseItems(expensesCat);
                }
            )
        }
    }, []);

    const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
    const showExpenseModal = () => {
        setIsExpenseModalOpen(true);
    };
    const handleExpenseOk = () => {
        setIsExpenseModalOpen(false);
    };
    const handleExpenseCancel = () => {
        setIsExpenseModalOpen(false);
    };


    const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
    const showIncomeModal = () => {
        setIsIncomeModalOpen(true);
    };
    const handleIncomeOk = () => {
        setIsIncomeModalOpen(false);
    };
    const handleIncomeCancel = () => {
        setIsIncomeModalOpen(false);
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
    };

    // income items
    const incomeItems = [
        {
            value: 'Salary',
            label: (
                <span>
                    <PiMoney
                        size={'1.5em'}
                        title={'Salary'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Salary</span>
                </span>

            ),
            price: 100
        },
        {
            value: 'Savings',
            label: (
                <span>
                    <TbPigMoney
                        size={'1.5em'}
                        title={'Savings'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Savings</span>
                </span>
            ),
            price: 1000
        },
        {
            value: 'Investments',
            label: (
                <span>
                    <RiStockLine
                        size={'1.5em'}
                        title={'Investments'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Investments</span>
                </span>
            ),
            price: 10000
        }
    ]

    interface Transaction {
        key: string;
        date: string;
        description: string;
        category: string;
        amount: number;
        type: string;
      }

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
      
      const transactions: Transaction[] = [
        { key: "1", date: "28/02", description: (
            <span>
                <IoGameControllerOutline
                    size={'1.5em'}
                    title={'Play'}
                    className='popupModal-icon-style'
                />
                <span class="popupModal-icon-label-style">Play</span>
            </span>
        ), category: "food", amount: 59.32, type: "expense" },
        { key: "2", date: "27/02", description: (
            <span>
                <IoGameControllerOutline
                    size={'1.5em'}
                    title={'Play'}
                    className='popupModal-icon-style'
                />
                <span class="popupModal-icon-label-style">Play</span>
            </span>
        ), category: "games", amount: 19.99, type: "income" },
        { key: "3", date: "26/02", description: (
            <span>
                <IoGameControllerOutline
                    size={'1.5em'}
                    title={'Play'}
                    className='popupModal-icon-style'
                />
                <span class="popupModal-icon-label-style">Play</span>
            </span>
        ), category: "food", amount: 32.50, type: "expense" },
        { key: "4", date: "25/02", description: (
            <span>
                <IoGameControllerOutline
                    size={'1.5em'}
                    title={'Play'}
                    className='popupModal-icon-style'
                />
                <span class="popupModal-icon-label-style">Play</span>
            </span>
        ), category: "entertainment", amount: 12.99, type: "income" },
        { key: "5", date: "24/02", description: (
            <span>
                <IoGameControllerOutline
                    size={'1.5em'}
                    title={'Play'}
                    className='popupModal-icon-style'
                />
                <span class="popupModal-icon-label-style">Play</span>
            </span>
        ), category: "food", amount: 5.00, type: "expense" },
      ];
    

    return (

        <div>
            <Header />

            <div>
                <PopUpModal 
                    title="Expenses" 
                    isModalOpen={isExpenseModalOpen}
                    handleOk={handleExpenseOk}
                    handleCancel={handleExpenseCancel}
                    categories={expenseItems}
                />

                <PopUpModal 
                    title="Income" 
                    isModalOpen={isIncomeModalOpen}
                    handleOk={handleIncomeOk}
                    handleCancel={handleIncomeCancel}
                    categories={incomeItems}
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
            <div className="budget-transactions-container">
                <DisplayBudget isLoading={isBudgetLoading} addButtonClick={showBudgetModal}/>
                <DisplayTransactionTable activeTab={transactionHistoryRange} tabList={transactionTabList} changeTab={onTransactionHistoryRangeChange} data={transactions} isLoading={isTransactionsLoading}/>
            </div>
        </div>

    );
}

export default Home;
