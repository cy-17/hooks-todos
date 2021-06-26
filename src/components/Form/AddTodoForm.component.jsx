import React from 'react'
import { Button, Form, Row, Typography } from 'antd';

const { Title } = Typography;

export const AddTodoForm=()=>{
    return(
        <>
            <Form >
                <Title>添加新的计划事项</Title>
                <Row>
                    <Button>点击添加</Button>
                </Row>
            </Form>
        </>
    )
}