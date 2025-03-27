import React from "react";
import { Card, Button } from 'antd';
import "./incomeStyle.css";
import Item from "../Parts/Item.tsx";


const DisplayExpenses: React.FC = (props: any) => {
    return (
        <Card className="expense-income-panel income-panel" loading={props.isLoading} bordered={false}>
            <h2 className="income-panel-title">Income</h2>
            <div className="category-container">
                {props.data.map((item, index) => (
                    <Item key={index} itemCategory={item.label} price={item.price}  category="income"/>
                ))}
            </div>
            <Button type="primary" onClick={props.addButtonClick} className="income-add-btn" block>
                + Add income
            </Button>
        </Card>
    );
};

export default DisplayExpenses;
