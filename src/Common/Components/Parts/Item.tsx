import React from "react";
import { Card, Row, Col } from 'antd';
import "./itemStyle.css"

const Item = (props: any) => {

    return (
        <Card className={`${props.category}-category-card`}>
          <p>{props.itemCategory}</p>
          <p className="amount">${props.price}</p>
        </Card>
    );
}

export default Item;