import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Program Path",
    dataIndex: "programPath",
    key: "programPath",
  },
  {
    title: "Options",
    key: "options",
    dataIndex: "options",
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
    title: "Action",
    key: "action",
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
    key: "1",
    programPath: "D:\\\\good1.bp",
    options: ["PVC", "GlASS"],
  },
  {
    key: "2",
    programPath: "D:\\\\good2.bpp",
    options: ["PVC", "SHAKER"],
  },
  {
    key: "3",
    programPath: "D:\\\\good3.bpp",
    options: ["PVC", "1/8 DOOR"],
  },
];

export default () => {
  return <Table columns={columns} dataSource={data} />;
};
