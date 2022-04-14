import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button } from "antd";
import Modal from "./Modal";

export default () => {
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
          <a onClick={showModal}>Edit</a>
          <a onClick={async (e) => {await deleteRecord(record);}}>Delete</a>
        </Space>
      ),
    },
  ];


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
    setIsLoaded(false);  
    try{
        const response = await fetch('https://gs-app-config-service.herokuapp.com/api/options');
        const resData = await response.json();
        //console.log("resData",resData);
        // await new Promise((resolve, reject)=> {
        //   setTimeout(()=> {
        //     console.log('timer end');
        //     resolve();
        //   }, 5000)
        // })
        setItems(resData);
      }catch(error){
        setError(error);
      }
      setIsLoaded(true);
  }

  const deleteRecord = async (record) => {
    try{
      await fetch("https://gs-app-config-service.herokuapp.com/api/options/"+record._id, {method: 'DELETE'});
      setItems(items.filter(item => item._id !== record._id))
    }catch(error){
      setError(error);
    }
  }

  useEffect(async () => {
    await fetchData();
  },[])

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
        <Modal visible={isModalVisible} onCancel={handleCancel} onOk={async ()=> {setIsModalVisible(false); await fetchData();}} />
        <Table columns={columns} dataSource={items} />
      </>
    );
  }
};
