import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './Common/Common.css';
import { Button } from 'antd';
import PopUpModal from './Common/Components/PopUpModal/PopUpModal.js'

import { IoFastFoodOutline, IoGameControllerOutline, IoTrainOutline } from 'react-icons/io5';
import { PiMoney } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";


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
                
            )
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
            )
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
            )
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
                
            )
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
            )
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
            )
        }
    ]



  return (
    <div className="App">
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


    </div>
  );
}

export default App;
