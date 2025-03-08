import React from 'react';
import { Modal, DatePicker, Select, ConfigProvider, Flex, Input, InputNumber } from 'antd';
import dayjs from 'dayjs';

import '../../../Common/Common.css';
import './styles.css';


const PopUpModal = ({title, categories, isModalOpen, handleOk, handleCancel}) => {

    const datePickerOnChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const ModalStyles = {
        header: {
            textAlign: 'center',
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
                titleFontSize: '30px',
            },
            DatePicker: {
                activeBorderColor: 'rgb(239, 41, 23)',
                activeShadow: 'rgb(239, 41, 23)',
            },
            Select: {
                activeBorderColor: 'rgb(239, 41, 23)',
                optionFontSize: '15px',
                optionSelectedFontWeight: '600',
                optionSelectedBg: 'rgb(239, 41, 23, 0.3)',
            },
            InputNumber: {
                handleFontSize: '10px',
                inputFontSize:'18px',
                paddingInline: '10px',
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
                titleFontSize: '30px',
            },
            DatePicker: {
                activeBorderColor: 'rgb(0, 129, 72)',
                activeShadow: 'rgb(0, 129, 72)',
            },
            Select: {
                activeBorderColor: 'rgb(0, 129, 72)',
                optionFontSize: '15px',
                optionSelectedFontWeight: '600',
                optionSelectedBg: 'rgb(0, 129, 72, 0.3)',
            },
            InputNumber: {
                handleFontSize: '10px',
                inputFontSize:'18px',
                paddingInline: '10px',
            },
            Input: {
                activeShadow: 'rgb(0, 129, 72, 0)'
            }
        }
    }

    return (

        <ConfigProvider
            theme={title.toLowerCase() === 'expenses' ? expenseTheme : incomeTheme}
        >
                <Modal 
                    title={title} 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    centered
                    width={'80%'}
                    okText={'+ add ' + title.toLowerCase()}
                    styles={ModalStyles}
                    okButtonProps={{
                        style: {
                            backgroundColor: title.toLowerCase() === 'expenses' ? expenseTheme.token.colorTextBase : incomeTheme.token.colorTextBase,
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
                            onChange={datePickerOnChange} 
                            size={'Large'}
                            placeholder={'Date'}
                            format={'DD MMMM YYYY'}
                            variant={"Borderless"}
                            defaultValue={dayjs()}
                            className={'custom-font-size'}
                            style={{
                                width: '55%',
                                color: title.toLowerCase() === 'expenses' ? expenseTheme.token.colorTextBase : incomeTheme.token.colorTextBase,
                                backgroundColor: '#fff',
                                letterSpacing: '3px',
                                fontSize: '18px'
                            }}
                        />

                        
                        <Select 
                            allowClear={true}
                            options={categories}
                            size={'Large'}
                            placeholder={"Category"}
                            variant={"Borderless"}
                            className={'custom-font-size'}
                            style={{
                                width: '70%',
                                color: '#f9bcb9',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                fontSize: '18px'
                            }}
                            dropdownStyle={{
                                fontSize: '18px'
                            }}
                        />


                        <InputNumber
                            prefix='$'
                            size={'Large'}
                            variant={"Borderless"}
                            className={'custom-font-size'}
                            style={{
                                width: '65%',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                align: 'right',
                                margin:'5px',
                                fontSize: '18px',
                            }}
                        />
                    </Flex>
            
                    <Input
                        placeholder='Description' 
                        size={'Large'}
                        className={'custom-font-size'}
                        style={{
                        width: '100%',
                        border: '2px solid #e9ebf0',
                        borderRadius: '5px',
                        fontSize: '18px',
                    }}
                    />
                </Flex>
                
                </Modal>
        </ConfigProvider>
    );
}

export default PopUpModal;