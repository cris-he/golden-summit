import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';


const OPTIONS = ['SHAKER', '1/8 Door', 'MANHAT SHAKER', 'GS V', 'P 100', '0.125'];


export default (props) => {

    const [selectedItems, setSelectedItems] = useState([])


    const [form] = Form.useForm();

    // const [variable name, the function to trigger re render the page ] = useState( init value )
    const handleChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    }

    const postForm = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: e.name, options: e.options })
        };
        fetch('https://gs-app-config-service.herokuapp.com/api/options', requestOptions)
            .then(response => response.json())
            .then(()=> {props.onOk()});
    }

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return (
        <>
            <Modal title="Basic Modal" visible={props.visible} onCancel={props.onCancel} onOk={() => {
                form.validateFields()
                    .then((values) => {
                        postForm(values);
                    }).catch((info) => {
                        console.log("validate failed: ", info);
                    });
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