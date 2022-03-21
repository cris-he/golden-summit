import React, { useState } from 'react';

import { Form, Row, Col, Input, Button, Select, Table, Tag } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import './index.css'

const { Option } = Select;

const columns = [
    {
        title: 'Width',
        dataIndex: 'width',
        key: 'width',
    },
    {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Specs',
        key: 'specs',
        dataIndex: 'specs',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'PVC') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
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
            <a>Delete</a>
        ),
    },
];

const data = [
    {
        key: '1',
        width: '1',
        height: '1',
        quantity: '1',
        specs: ['PVC', 'GLASS'],
    },
    {
        key: '2',
        width: '1',
        height: '1',
        quantity: '1',
        specs: ['喷油', 'GLASS'],
    },
    {
        key: '3',
        width: '1',
        height: '1',
        quantity: '1',
        specs: ['PVC', 'SHAKER', 'GLASS'],
    },
];


export default () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    const getFields = () => {
        const count = expand ? 10 : 6;
        const children = [];

        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={8} key={i}>
                    <Form.Item
                        name={`field-${i}`}
                        label={`Field ${i}`}
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        {i % 3 !== 1 ? (
                            <Input placeholder="placeholder" />
                        ) : (
                            <Select defaultValue="2">
                                <Option value="1">1</Option>
                                <Option value="2">
                                    123
                                </Option>
                            </Select>
                        )}
                    </Form.Item>
                </Col>,
            );
        }

        return children;
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
                style={{ padding: 24 }}
            >
                {/* <Row gutter={24}>{getFields()}</Row> */}
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item
                            name={`Type`}
                            label={`Type`}
                        >
                            <Select defaultValue="2">
                                <Option value="1">PVC</Option>
                                <Option value="2">
                                    喷油
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={`Door`}
                            label={`Door`}
                        >
                            <Select defaultValue="2">
                                <Option value="1">SHAKER</Option>
                                <Option value="2">
                                    1/8 DOOR
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={`Glass`}
                            label={`Glass`}
                        >
                            <Select defaultValue="2">
                                <Option value="1">Yes</Option>
                                <Option value="2">
                                    No
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={`Width`}
                            label={`Width`}
                        >
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={`Height`}
                            label={`Height`}
                        >
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name={`Quantity`}
                            label={`Quantity`}
                        >
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col
                        span={24}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                        {/* <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            Clear
                        </Button> */}
                        {/* <a
                            style={{
                                fontSize: 12,
                            }}
                            onClick={() => {
                                setExpand(!expand);
                            }}
                        >
                            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
                        </a> */}
                    </Col>
                </Row>
            </Form>
            <div className="search-result-list" style={{ padding: 24 }}><Table columns={columns} dataSource={data} /></div>
        </div>
    )
}