import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { getProgramPath } from "../../api/config";

const columns = [
  {
    title: "Program Path",
    dataIndex: "path",
    key: "path",
  },
  {
    title: "Options",
    key: "key",
    dataIndex: "key",
    render: (tags) => (
      <>
        {tags.split("-").map((tag) => {
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

export default () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('https://gs-app-config-service.herokuapp.com/api/programPaths')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  useEffect(async() => {
    try{
      const result  = await getProgramPath();
      setIsLoaded(true);
      setItems(result);
    }catch(error){
      setIsLoaded(true);
      setError(error);
    }
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return(
      <div>
        <Table columns={columns} dataSource={items} />
      </div>
    )
  }
};
