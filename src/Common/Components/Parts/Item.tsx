import React from "react";
import { Card, Row, Col } from 'antd';

const Item = (props: any) => {

    return (
        <Card
            title={props.itemName}
            variant="borderless"
            style={{
                width: 150, margin: 100
            }}
        >
            <p>{props.price}</p>
        </Card>
    );
}

export default Item;