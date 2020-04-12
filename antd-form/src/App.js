import React, { Component } from 'react'

import { 
  Form, 
  Input, 
  Button 
} from 'antd';

import { UserOutlined } from '@ant-design/icons';

export default class App extends Component {
  render() {
     const onFinish = values => {
          console.log('Received values of form: ', values);
        }
        return (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                      { required: true,
                        message: 'Please input your Username!' 
                      }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
          
          
      
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
          </Form>
        );
  }
}
