import React from "react";
import { Card, Row, Col } from 'antd';
import "./expensesStyle.css";
import Item from "../Parts/Item.tsx";


const DisplayExpenses: React.FC = (props: any) => {
    return (
        <Card title="Expenses" loading={props.isLoading} variant="borderless" style={{ width: 600 }} headStyle={{ backgroundColor: '#f3c8c8', color: '#ffffff' }} bodyStyle={{ backgroundColor: '#f3c8c8' }}>
            <Row gutter={100}>
                {props.data.map((item, index) => (
                    <Col span={4}>
                        <Item key={index} itemName={item.value} price={item.price} />
                    </Col>
                ))}
            </Row>
        </Card>

    );
};

export default DisplayExpenses;
