import React from "react";
import { Table } from "antd";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: {
        compare: (a, b) => a.quantity - b.quantity,
        multiple: 3,
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 1,
      },
    },
  ];
  
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      quantity: 98,
      price: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      quantity: 98,
      price: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      quantity: 98,
      price: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      quantity: 88,
      price: 89,
    },
  ];

export default () => {
    return (
      <>
        <h1>Home</h1>
        <Table columns={columns} dataSource={dataSource} />
      </>
    );
  };