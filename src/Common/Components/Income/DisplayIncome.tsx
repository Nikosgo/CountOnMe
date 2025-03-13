import React from "react";
import { Card, Row, Col } from 'antd';
import { IoGameControllerOutline, IoFastFoodOutline } from "react-icons/io5";
import Item from "../Parts/Item.tsx";


const DisplayIncome: React.FC = (props:any) => {
    return (
        <Card title="Income" loading={props.isLoading} variant="borderless" style={{ width: 600 }} headStyle={{ backgroundColor: '#c8f3cd', color: '#ffffff' }} bodyStyle={{ backgroundColor: '#c8f3cd' }}>
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

export default DisplayIncome;
