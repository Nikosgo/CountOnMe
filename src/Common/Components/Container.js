import { Card, Col, Row } from 'antd';
import Item from './Item';

const Container = () => {

    return (
        <Row gutter={100}>
            <Col span={12}>
                <Card title="Expenses" variant="borderless" headStyle={{ backgroundColor: '#f3c8c8', color: '#ffffff' }} bodyStyle={{ backgroundColor: '#f3c8c8' }}>
                    <Item/>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Income" variant="borderless" headStyle={{ backgroundColor: '#c8f3cd', color: '#ffffff' }} bodyStyle={{ backgroundColor: '#c8f3cd' }}>
                    <Item/>
                </Card>
            </Col>
        </Row>
    );
}

export default Container;