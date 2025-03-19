import React from "react";
import { Card, Table } from "antd";
import "./transactiontable.css"

const TransactionTable: React.FC = (props: any) => {

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            className: "columnDate",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            className: "columnDescription",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            className: "columnCategory",
        },
        {
            title: "Amount ($)",
            dataIndex: "amount",
            key: "amount",
            className: "columnAmount",
            render: (amount: number) => <span className="amount">{amount.toFixed(2)}</span>,
        },
    ];

    return (
        <>
            <Card
                style={{ width: '100%' }}
                tabList={props.tabList}
                activeTabKey={props.transactionHistoryRange}
                onTabChange={props.onTransactionHistoryRangeChange}
            >
                <div className="tableContainer">
                    <Table
                        columns={columns}
                        dataSource={props.data}
                        pagination={{ pageSize: 5 }}
                        className="transactionsTable"
                        rowClassName={(record) => {
                            if (record.type === "expense") return "expenserecord";
                            if (record.type === "income") return "incomerecord";
                            return "";
                          }}
                    />
                </div>
            </Card>
        </>
    );
};

export default TransactionTable;