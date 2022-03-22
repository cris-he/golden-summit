import React from 'react';
import { Modal } from 'antd';

export default (props) => {
    return (
        <>
            <Modal title="Basic Modal" visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}