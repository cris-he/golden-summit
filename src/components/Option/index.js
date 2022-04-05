import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button } from "antd";
import Modal from "./Modal";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
   },
  {
    title: "Options",
    key: "options",
    dataIndex: "options",
    render: (tags) => (
      <>
        {tags?.map((tag) => {
          return (
            <Tag color={"geekblue"} key={tag}>
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
  const [openModal, setOpenModal] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);   
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const fetchData = async () =>{
    await fetch('https://gs-app-config-service.herokuapp.com/api/options')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(error){
    return <div>Error: {error.message}</div>;
  } else if(!isLoaded){
    return <div>Loading...</div>;
  } else{
    return (
      <>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Button onClick={showModal}>Add</Button>
        </div>
        <Modal visible={isModalVisible} onCancel={handleCancel} onOk={()=> {setIsModalVisible(false); fetchData();}} />
        <Table columns={columns} dataSource={items} />
      </>
    );
  }
};
