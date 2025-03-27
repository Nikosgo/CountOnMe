import React from "react";
import { Card, Button } from 'antd';
import "./expensesStyle.css";
import Item from "../Parts/Item.tsx";


const DisplayExpenses: React.FC = (props: any) => {
    return (
        <Card className="expense-income-panel expense-panel" loading={props.isLoading} bordered={false}>
            <h2 className="expense-panel-title">Expenses</h2>
            <div className="category-container">
                {props.data.map((item, index) => (
                    <Item key={index} itemCategory={item.label} price={item.price} category="expense"/>
                ))}
            </div>
            <Button type="primary" onClick={props.addButtonClick} className="expense-add-btn" block>
                + Add Expenses
            </Button>
        </Card>
    );
};

export default DisplayExpenses;
