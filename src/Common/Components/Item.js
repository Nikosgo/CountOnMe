import { Card, Col, Row } from 'antd';

const Item = () => {

    return (
        <Card
            title="Card title"
            variant="borderless"
            style={{
                width: 300,
            }}
        >
            <p>Card content</p>
        </Card>
    );
}

export default Item;