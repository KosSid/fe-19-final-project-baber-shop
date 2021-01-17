import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from 'antd';
import './App.less';

const { Option } = Select;
const { Title } = Typography;

const App = () => (
  <>
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{ marginBottom: 0 }}>
          Ant Design
        </Title>
      </Space>
    </section>

  </>
);

export default App;