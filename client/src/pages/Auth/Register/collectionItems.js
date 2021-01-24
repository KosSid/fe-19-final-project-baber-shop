export const collectionItemsForm = [
  { name: "firstName", label: "First Name", required: true, message: 'Please input your First Name!'},
  { name: "lastName", label: "Last Name", required: true, message: 'Please input your Last Name!'},
  { name: "login", label: "Login", required: true, message: 'Please input your Login'},
  { name: "email", label: "E-mail", required: true, message: 'Please input your E-mail!', type: "email", messageType: 'The input is not valid E-mail!', },
  { name: "password", label: "Password", required: true, message: 'Please input your password!'},
  { name: "phone", label: "Phone Number", required: true, message: 'Please input your phone number!'}
];

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

export const formItemLayout2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}



