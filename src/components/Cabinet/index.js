import React, { useState } from "react";

import { Form, Row, Col, Input, Button, Select, Table, Tag } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import "./index.css";

const { Option } = Select;

const columns = [
  {
    title: "Specs",
    key: "specs",
    dataIndex: "specs",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          return (
            <Tag color="geekblue" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Program Path",
    dataIndex: "programPath",
    key: "programPath",
  },
  {
    title: "LPX",
    dataIndex: "width",
    key: "width",
  },
  {
    title: "LPY",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Rotation",
    dataIndex: "rotation",
    key: "rotation",
  },
  {
    title: "Program variables",
    dataIndex: "programVariables",
    key: "programVariables",
  },
  {
    title: "Grain",
    dataIndex: "grain",
    key: "grain",
  },
  {
    title: "Offset",
    dataIndex: "offset",
    key: "offset",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <a>Delete</a>,
  },
];

const mockData = [
  {
    key: "1",
    width: "1",
    height: "1",
    quantity: "1",
    programPath: "D:\\\\asdf-asdf-adf.bpp",
    specs: ["PVC", "GLASS"],
  },
  {
    key: "2",
    width: "1",
    height: "1",
    quantity: "1",
    programPath: "D:\\\\asdf-asdf-adf.bpp",
    specs: ["喷油", "GLASS"],
  },
  {
    key: "3",
    width: "1",
    height: "1",
    quantity: "1",
    programPath: "D:\\\\asdf-asdf-adf.bpp",
    specs: ["PVC", "SHAKER", "GLASS"],
  },
];

export default () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const [data, setData] = useState(mockData);

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
                message: "Input something!",
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">123</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      );
    }

    return children;
  };

  const onFinish = (values) => {
    const { type, door, glass, width, height, quantity } = values;
    data.push({
      key: data.length + 1,
      programPath:'D:\\asdf-asdf-adf.bpp',
      width,
      height,
      quantity,
      specs: [type, door, glass],
    });
    setData([...data]);
    // console.log("Received values of form: ", data);
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
              name={`type`}
              label={`Type`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="PVC">PVC</Option>
                <Option value="喷油">喷油</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`door`}
              label={`Door`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="SHAKER">SHAKER</Option>
                <Option value="1/8 DOOR">1/8 DOOR</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`glass`}
              label={`Glass`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="YES">Yes</Option>
                <Option value="NO">No</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`width`}
              label={`Width`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`height`}
              label={`Height`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={`quantity`}
              label={`Quantity`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            {/* <Button
              style={{
                margin: "0 8px",
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
      <div className="search-result-list" style={{ padding: 24 }}>
        <Button style={{ marginBottom: 24 }}>Download TXT</Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
