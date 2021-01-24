import React from "react";
import "./styles.less";
import axios from "axios";
import { collectionItemsForm, formItemLayout2 } from "./collectionItems";
import { Form, Input } from "antd";
import { FormItemTitle ,FormItemSubmit, FormItemLink } from "./otherItemsForm";

const Register = (props) => {
  const [form] = Form.useForm();
  console.log(props.onOk);

  const onFinish = (values) => {
    const newCustomer = { ...values, isAdmin: false };
    axios.post(`${process.env.REACT_APP_API}/customers`, newCustomer)
      .then(savedCustomer => {
        console.log(savedCustomer);
      })
      .catch(err => {
        console.log(err);
      });
    props.onOk()
  };

  console.log();

  return (
    <Form
      {...formItemLayout2}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        phone: 380
      }}
      scrollToFirstError
    >
      <FormItemTitle/>
      {collectionItemsForm.map(formItem =>
        <Form.Item name={formItem.name}
                   label={formItem.label}
                   rules={[{
                     required: formItem.required,
                     message: formItem.message }, {
                     type: formItem.type,
                     message: formItem.messageType
                   }]}
                   key={formItem.name}>
          {formItem.name === "password"
            ? <Input.Password/>
            : <Input/>
          }
        </Form.Item>
      )}
      <FormItemSubmit/>
      <FormItemLink/>
    </Form>
  );
};

export default Register;