import React, { useState }  from 'react';

import { IoFastFoodOutline, IoGameControllerOutline, IoTrainOutline } from 'react-icons/io5';
import { PiMoney } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";
import { Button } from 'antd';

import '../../../Common/Common.css';

import Header from '../Header/Header.tsx';
import PopUpModal from '../PopUpModal/PopUpModal.tsx';
import DisplayBudget from '../Budget/DisplayBudget.tsx';

const Home: React.FC = () => {


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

        <div>
            <Header />

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
            <div className="budget-container">
                <DisplayBudget />
            </div>
        </div>

    );
}

export default Home;
