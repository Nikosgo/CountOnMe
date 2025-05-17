import React, { useState } from 'react';
import { Modal, DatePicker, Select, ConfigProvider, Flex, Input, InputNumber } from 'antd';
import dayjs from 'dayjs';

import '../../../Common/Common.css';


const PopUpModal = ({title, categories, isModalOpen, handleCancel, onTransactionData}) => {

    const lowercaseTitle = title.toLowerCase();

    const ModalStyles = {
        header: {
            textAlign: 'center' as const,
            fontFamily: 'Arial',
            backgroundColor: '#e9ebf0',
            marginBottom:'20px'
        },
        footer: {
            backgroundColor: '#e9ebf0'
        },
        content: {
            backgroundColor: '#e9ebf0',
            borderRadius: '15px',
        },
        body: {
            fontFamily: 'Arial'
        }
    }

    const expenseTheme = {
        token: {
            fontFamily:'Arial',
            colorTextBase:'#ef2917',
        },
        components: {
            Modal: {
                titleColor: '#ef2917',
                titleFontSize: 30,
            },
            DatePicker: {
                activeBorderColor: 'rgb(239, 41, 23)',
                activeShadow: 'rgb(239, 41, 23)',
            },
            Select: {
                activeBorderColor: 'rgb(239, 41, 23)',
                optionFontSize: 15,
                optionSelectedFontWeight: 600,
                optionSelectedBg: 'rgb(239, 41, 23, 0.3)',
            },
            InputNumber: {
                handleFontSize: 10,
                inputFontSize: 18,
                paddingInline: 10,
            },
            Input: {
                activeShadow: 'rgb(239, 41, 23, 0)'
            }
        }
    }


    const incomeTheme = {
        token: {
            fontFamily:'Arial',
            colorTextBase:'#008148',
        },
        components: {
            Modal: {
                titleColor: '#008148',
                titleFontSize: 30,
            },
            DatePicker: {
                activeBorderColor: 'rgb(0, 129, 72)',
                activeShadow: 'rgb(0, 129, 72)',
            },
            Select: {
                activeBorderColor: 'rgb(0, 129, 72)',
                optionFontSize: 15,
                optionSelectedFontWeight: 600,
                optionSelectedBg: 'rgb(0, 129, 72, 0.3)',
            },
            InputNumber: {
                handleFontSize: 10,
                inputFontSize: 18,
                paddingInline: 10,
            },
            Input: {
                activeShadow: 'rgb(0, 129, 72, 0)'
            }
        }
    }


    const budgetTheme = {
        token: {
            fontFamily:'Arial',
            colorTextBase:'#3891a6',
        },
        components: {
            Modal: {
                titleColor: '#3891a6',
                titleFontSize: 30,
            },
            DatePicker: {
                activeBorderColor: 'rgb(56, 145, 166)',
                activeShadow: 'rgb(56, 145, 166)',
            },
            Select: {
                activeBorderColor: 'rgb(56, 145, 166)',
                optionFontSize: 15,
                optionSelectedFontWeight: 600,
                optionSelectedBg: 'rgb(56, 145, 166, 0.3)',
            },
            InputNumber: {
                handleFontSize: 10,
                inputFontSize: 18,
                paddingInline: 10,
            },
            Input: {
                activeShadow: 'rgb(56, 145, 166, 0)'
            }
        }    
    }

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState<Number>(0);
    const [description, setDescription] = useState('');

    const datePickerOnChange = (date, dateString) => {
        if(date && dateString) {
            setSelectedDate(date.$d);
        }
    };
    const descriptionOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value); // Update the state with the new input value
      };

    const handleOk = () => {
        const transactionDetails = {
            date: selectedDate.toDate(),
            category: category,
            amount: Number(amount),
            description: description,
        };

        if (!transactionDetails.date || !transactionDetails.category || !transactionDetails.amount || !transactionDetails.description) {
            alert("Please fill in all fields.");
            return; // Prevent further execution if validation fails
        }
        else {
            // Pass the data back to the parent component
            onTransactionData(transactionDetails);
        }
      };
    

    return (

        <ConfigProvider
            theme={lowercaseTitle === 'expenses' ? expenseTheme : lowercaseTitle === 'income' ? incomeTheme : budgetTheme}
        >
                <Modal 
                    title={title} 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    centered
                    width={'80%'}
                    okText={'+ add ' + lowercaseTitle}
                    styles={ModalStyles}
                    okButtonProps={{
                        style: {
                            backgroundColor: lowercaseTitle === 'expenses' ? 
                                expenseTheme.token.colorTextBase : 
                                lowercaseTitle === 'income' ?
                                    incomeTheme.token.colorTextBase :
                                    budgetTheme.token.colorTextBase
                            ,
                            letterSpacing: '3px',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            padding: '20px',
                            marginTop: '20px'
                        }
                    }}
                    cancelButtonProps={{ style: { display: "none" } }}
                >

                <Flex
                    vertical
                    gap={'middle'}
                >
                    <Flex
                        gap={'middle'}
                        justify={'space-between'}
                        align={'center'}
                    >
                        <DatePicker 
                            value={selectedDate}
                            onChange={datePickerOnChange} 
                            size={'large'}
                            placeholder={'Date'}
                            format={'DD MMMM YYYY'}
                            variant={"borderless"}
                            defaultValue={dayjs()}
                            className={'custom-font-size'}
                            style={{
                                width: '55%',
                                color: lowercaseTitle === 'expenses' ? 
                                    expenseTheme.token.colorTextBase : 
                                    lowercaseTitle === 'income' ?
                                        incomeTheme.token.colorTextBase :
                                        budgetTheme.token.colorTextBase
                                ,
                                backgroundColor: '#fff',
                                letterSpacing: '3px',
                                fontSize: '18px',
                                display: lowercaseTitle === 'budget' ? 'none' : 'block'
                            }}
                        />

                        
                        <Select 
                            allowClear={true}
                            options={categories}
                            value={category}
                            onChange={setCategory}
                            size={'large'}
                            placeholder={"Category"}
                            variant={"borderless"}
                            className={'custom-font-size'}
                            style={{
                                width: '70%',
                                color: '#f9bcb9',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                fontSize: '18px',
                                textTransform:'titlecase'
                            }}
                            dropdownStyle={{
                                fontSize: '18px',
                            }}
                        />


                        <InputNumber
                            prefix='$'
                            value={amount}
                            onInput={setAmount}
                            size={'large'}
                            variant={"borderless"}
                            className={'custom-font-size'}
                            style={{
                                width: '65%',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                margin:'5px',
                                fontSize: '18px',
                            }}
                        />
                    </Flex>
            
                    <Input
                        placeholder='Description' 
                        onChange={descriptionOnChange}
                        size={'large'}
                        className={'custom-font-size'}
                        style={{
                            width: '100%',
                            border: '2px solid #e9ebf0',
                            borderRadius: '5px',
                            fontSize: '18px',
                            display: lowercaseTitle === 'budget' ? 'none' : 'block'
                        }}
                    />
                </Flex>
                
                </Modal>
        </ConfigProvider>
    );
}

export default PopUpModal;