import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './Common/Common.css';
import { Button, Col, Row } from 'antd';
import PopUpModal from './Common/Components/PopUpModal/PopUpModal.js'

import { IoFastFoodOutline, IoGameControllerOutline, IoTrainOutline } from 'react-icons/io5';
import { PiMoney } from "react-icons/pi";
import { TbPigMoney, TbRuler2Off } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";
import Header from "./Common/Components/Header/Header";

import DisplayBudget from "./Common/Components/Budget/DisplayBudget.tsx";
import DisplayExpenses from "./Common/Components/Expenses/DisplayExpenses.tsx";
import DisplayIncome from "./Common/Components/Income/DisplayIncome.tsx";


function App() {

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

    // expense items
    const expenseItems = [
        {
            value: 'Food',
            label: (
                <span>
                    <IoFastFoodOutline
                        size={'1.5em'}
                        title={'Food'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Food</span>
                </span>

            ),
            price: 100
        },
        {
            value: 'Play',
            label: (
                <span>
                    <IoGameControllerOutline
                        size={'1.5em'}
                        title={'Play'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Play</span>
                </span>
            ),
            price: 50
        },
        {
            value: 'Transport',
            label: (
                <span>
                    <IoTrainOutline
                        size={'1.5em'}
                        title={'Transport'}
                        className='popupModal-icon-style'
                    />
                    <span class="popupModal-icon-label-style">Transport</span>
                </span>
            ),
            price: 25
        }
    ]

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



    return (
        <div className="App">

            <Header />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>
                <Button type="primary" onClick={showExpenseModal}>
                    Add Expenses
                </Button>

                <Button type="primary" onClick={showIncomeModal}>
                    Add Income
                </Button>

                <Button type="primary" onClick={showBudgetModal}>
                    Add Budget
                </Button>

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
                <DisplayExpenses isLoading={isExpenseLoading} data={expenseItems} />
                <DisplayIncome isLoading={isIncomeLoading} data={incomeItems} />
            </div>
            <div className="budget-container">
                <DisplayBudget />

            </div>


        </div>
    );
}

export default App;
