import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';


const OPTIONS = ['SHAKER', '1/8 Door', 'MANHAT SHAKER', 'GS V', 'P 100', '0.125'];


export default (props) => {

    const [selectedItems, setSelectedItems] = useState([])
    const [error, setError] = useState(null);

    const [form] = Form.useForm();

    // const [variable name, the function to trigger re render the page ] = useState( init value )
    const handleChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    }

    const postForm = async (e) => {
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: e.name, options: e.options })
            };    
            await fetch('https://gs-app-config-service.herokuapp.com/api/options', requestOptions);
            props.onOk();
        }catch(error){
            setError(error);
        }
    }

    const submitForm = async () => {
        try{
            const values = await form.validateFields();
            await postForm(values);
        }catch(error){
            setError(error);
        }
    }

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return (
        <>
            <Modal title="Basic Modal" visible={props.visible} onCancel={props.onCancel} onOk={async () => {
                await submitForm();
            }} >
                <Form form={form} name="add-options">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="options"
                        label="Options">
                        <Select
                            mode="multiple"
                            placeholder="Inserted are removed"
                            value={selectedItems}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        >
                            {filteredOptions.map(item => (
                                <Select.Option key={item} value={item}>
                                    {item}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}