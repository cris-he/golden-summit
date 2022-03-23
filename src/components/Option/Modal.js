import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';


const OPTIONS = ['SHAKER', '1/8 Door', 'MANHAT SHAKER', 'GS V','P 100','0.125'];


export default (props) => {

    const [selectedItems, setSelectedItems] = useState([])

    const [form] = Form.useForm();

    // const [variable name, the function to trigger re render the page ] = useState( init value )
    const handleChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    }

    // onFinish()
    const onFinish = (values) => {
        console.log(values);
    };


    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return (
        <>
            <Modal title="Basic Modal" visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
                <Form form={form} name="control-hooks" onFinish={onFinish}>
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