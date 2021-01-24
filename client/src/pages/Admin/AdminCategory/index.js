import React, {useEffect} from "react";
import { Layout, Row, Col, Divider } from "antd";
import "./styles.less";
import AdminSider from "../../../components/AdminSider";
import CategoryForm from "../../../components/Forms/CategoryForm";


const { Content} = Layout;

const AdminCatergory = (props) => {

  useEffect(() => {
    console.log('AdminCategory did Mount');

  }, [])

  return (
    <Layout className="admin-category-container">
      <AdminSider/>
        <Content className="category-content-container">
          <Divider orientation="left">Create Category</Divider>
          <Row gutter={16}>
            <Col span={24}>
              <CategoryForm/>
            </Col>
          </Row>
        </Content>

    </Layout>
  );
};

export default AdminCatergory;