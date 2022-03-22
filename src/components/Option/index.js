import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Options',
        key: 'options',
        dataIndex: 'options',
        render: tags => (
            <>
                {tags.map(tag => {
                    return (
                        <Tag color={'geekblue'} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'Type',
        options: ['PVC', '喷油'],
    },
    {
        key: '2',
        name: 'Door',
        options: ['SHAKER', '1/8 DOOR', 'MANHAT SHAKER', 'GS V', 'P 100', '0.125 MDF'],
    },
    {
        key: '3',
        name: 'Glass',
        options: ['YES', 'NO'],
    },
];


export default () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Button>Modal</Button>
            <Table columns={columns} dataSource={data} />
        </>
    )
}