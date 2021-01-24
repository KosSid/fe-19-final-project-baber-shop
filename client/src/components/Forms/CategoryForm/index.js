import React, {useState, useEffect} from "react";
import './style.less';
import { Form, Input, Button, message, Select} from 'antd';
import {createCategory, getCatalog} from "./functions";

const {Option} = Select;
// token will be taaken from local storage
const Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDM3ZmU5YjQ5NzkzNWIzOGE4YTlhYiIsImZpcnN0TmFtZSI6IkVtaWxpZW4iLCJsYXN0TmFtZSI6IlNpZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMTM1MDQzNywiZXhwIjoxNjExMzg2NDM3fQ.gkZtfCfy0UtOBq1ddplXydHYaCqhUVgCwhOFaIUktmI'


const CategoryForm = () => {
  const [form] = Form.useForm();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabledParentCategory, setDisabledParentCategory] = useState(true);
  const [levels] = useState(3);
  const [parentCategories, setParentCategories] = useState(["cat1", "cat2", "cat3"]);

  useEffect(() => {
    // logic will be added later
  }, [])

  // Create-Form Schema and controls rules
  const rules = [{required: true, message: 'field is required'}];
  const fieldsSetArr = [
    ['select-level', {label:"Level", name:"level", rules}],
    ['select-parentCategory', {label:"Parent ID", name:"parentId", rules}],
    ['input', {label: "Category ID", name: "id", rules}],
    ['input', {label: "Category Name", name: "name", rules}],
    ['input', {label: "Category Description", name: "description"}]
  ]

  // form layout settings
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };

  // function to create form input fields based on constants
  const setUpFormFields = () => fieldsSetArr.map(category => {
    let element = '';
    const [fieldType, settings] = category;
    switch (fieldType) {
      case 'input':
        element = (
          <Form.Item key={settings.name} {...settings}>
            <Input placeholder={`input ${settings.label}`} />
          </Form.Item>
        )
        break;
      case 'select-level':
        element = (
          <Form.Item key={settings.name} {...settings}>
            <Select onChange={handleLevelChange} placeholder={`input ${settings.label}`}>
              {[...Array(levels).keys()].map(level => (<Option key={`levelKeys${level+1}`} value={`${level+1}`}>{`level ${level+1}`}</Option>))}
            </Select>
          </Form.Item>
        )
        break;
      case 'select-parentCategory':
        element = (
          <Form.Item key={settings.name} {...settings}>
            <Select placeholder={`input ${settings.label}`} disabled={disabledParentCategory}>
              {parentCategories.map(category => (<Option key={category} value={category}>{category}</Option>))}
            </Select>
          </Form.Item>
        )
        break;
      default:
        element = null
    }
    return element
  })

  // function get parent Categories ID based on selected Level
  const handleLevelChange = (level) => {
    // Logic below helps to build Levels structure for categories; you can't create next level id parent of previous level is not specified
    if (level.replace(/\D/g, '') * 1 === 1) {
      setParentCategories(['null'])
    } else {
      const parentLevel = (level * 1 - 1).toString();
      getCatalog(Authorization)
        .then(res => {
          const uniqParentForCategory = res.data
            .filter(cat => cat.level === parentLevel)
            .map(cat => cat.id);
          setParentCategories([...new Set(uniqParentForCategory)])
        })
        .catch(err => console.log('GET CATALOG ERR (CATEGORY FORM) ==>', err))
    }
    setDisabledParentCategory(false);
  }

  // handle form on a successfully submit
  const onFinish = (values) => {
    // will be changed with common Ajax
    createCategory(values, Authorization)
      .then(res => {
        console.log(res.data);
        message.success(`new Category ${res.data.name} was created`, 1.5);
        form.resetFields();
      })
      .catch(err => {
        message.error(`${err}`, 1.5);
      });

  };

  // handle form on faild submit
  const onFinishFailed = (errorInfo) => {
    console.log('Form Failed on submit:', errorInfo);
    message.error('Form Failed on submit', 1.5);
  };

  // Activate Submit button once form is filled handleOnFieldsChange
  const handleOnFieldsChange = (e) => {
    // handleSubmitButtonDisable
    setDisabledBtn(!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0);
  }

  return (
    <Form
      name='admin-category-form'
      form={form}
      {...layout}
      layout='vertical'
      initialValues={{
        id: '',
        name: '',
        description: '',
        imgUrl: '',
        level: '',
        parentId: '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={handleOnFieldsChange}
    >
      {setUpFormFields()}
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={disabledBtn}>
          Submit
        </Button>
        <Button htmlType="button" onClick={() => form.resetFields()} style={{marginLeft: '20px'}}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;