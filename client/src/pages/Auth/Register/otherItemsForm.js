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



// export const FirstNameForm = (props) => {
//   console.log("props.firstName", props.name,props.label);
//   return (
//     <Form.Item
//       name="firstName"
//       // name={props.name}
//       label="First Name"
//       // label={props.label}
//       rules={[
//         {
//           required: true,
//           message: "Please input your First Name!"
//         }
//       ]}
//     >
//       <Input/>
//     </Form.Item>
//   );
// };
//
//
// export const LastNameForm = (props) => {
//   return (
//     <Form.Item
//       name="lastName"
//       // label={props.label}
//       label="LastName"
//       rules={[
//         {
//           required: true,
//           message: "Please input your First Name!"
//         }
//       ]}
//     >
//       <Input/>
//     </Form.Item>
//   );
// };
//
// export const LoginNameForm = () => {
//   return (
//     <Form.Item
//       name="login"
//       // label={props.label}
//       label="Login"
//       rules={[
//         {
//           required: true,
//           message: "Please input your Login"
//         }
//       ]}
//     >
//       <Input/>
//     </Form.Item>
//   );
// };
//
// export const EmailNameForm = () => {
//   return (
//     <Form.Item
//       name="email"
//       label="E-mail"
//       rules={[
//         {
//           type: "email",
//           message: "The input is not valid E-mail!"
//         },
//         {
//           required: true,
//           message: "Please input your E-mail!"
//         }
//       ]}
//     >
//       <Input/>
//     </Form.Item>
//   );
// };
//
//
// export const PasswordNameForm = () => {
//   return (
//     <Form.Item
//       name="password"
//       label="Password"
//       rules={[
//         {
//           required: true,
//           message: "Please input your password!"
//         }
//       ]}
//       hasFeedback
//     >
//       <Input.Password/>
//     </Form.Item>
//   );
// };
//
// export const PasswordConfirmNameForm = () => {
//   return (
//     <Form.Item
//       name="confirm"
//       label="Confirm Password"
//       dependencies={["password"]}
//       hasFeedback
//       rules={[
//         {
//           required: true,
//           message: "Please confirm your password!"
//         },
//         ({ getFieldValue }) => ({
//           validator(_, value) {
//             if (!value || getFieldValue("password") === value) {
//               return Promise.resolve();
//             }
//             // eslint-disable-next-line prefer-promise-reject-errors
//             return Promise.reject("The two passwords that you entered do not match!");
//           }
//         })
//       ]}
//     >
//       <Input.Password/>
//     </Form.Item>
//   );
// };
//
// export const PhoneNameForm = () => {
//   return (
//
//     <Form.Item
//       name="phone"
//       label="Phone Number"
//       rules={[{
//         required: true,
//         message: "Please input your phone number!"
//       }]}
//     >
//       <Input
//         style={{ width: "100%" }}/>
//     </Form.Item>
//   );
// };
