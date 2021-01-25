import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, } from "antd";
import {tailFormItemLayout} from './collectionItems'

export const FormItemTitle = () => {
  return (
    <Form.Item {...tailFormItemLayout}>
      Register Title
    </Form.Item>
  )
}
export const FormItemSubmit = () => {
  return (
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
  );
};

export const FormItemLink = () => {
  return (
    <Form.Item {...tailFormItemLayout}>
      <Link to="/login">Already registered?(link to Login Form)</Link>
    </Form.Item>
  );
};

