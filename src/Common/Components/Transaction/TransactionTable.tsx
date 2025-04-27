import React from "react";
import { Card, Table } from "antd";
import "./transactiontable.css"

const TransactionTable: React.FC = (props: any) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);  // Create a Date object from the ISO string
        const day = String(date.getDate()).padStart(2, '0');  // Get day and pad with leading zero if needed
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Get month and pad with leading zero if needed
        const year = date.getFullYear();  // Get the full year
        
        return `${day}-${month}-${year}`;  // Return the formatted date
    };

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            className: "columnDate",
            render: (date: string) => <span>{formatDate(date)}</span>,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            className: "columnCategory",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            className: "columnDescription",
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
                style={{ width: '100%', margin: 'auto', minHeight: '730px', maxHeight: '730px', minWidth: '900px', maxWidth: '900px' }}
                tabList={props.tabList}
                activeTabKey={props.activeTab}
                onTabChange={props.changeTab}
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