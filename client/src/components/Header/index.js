import React from "react";
import { Layout, Menu, Badge } from "antd";
import "./styles.less";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import PopoverBasket from '../PopoverBasket/index'
//import LiveSearch from './LiveSearch'


const {Header} = Layout
const {Item} = Menu

function SiteHeader() {
    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Item key="home" icon={<AppstoreOutlined/>}>
                    <Link to="/">Home</Link>
                </Item>
                <Item key="plp" icon={<ShoppingOutlined/>}>
                    <Link to="/shop">Shop</Link>
                </Item>
        <Item key="cart" className='basket-iconn' icon={<ShoppingCartOutlined />}>
          <PopoverBasket className='basket-icon'/>
        </Item>

        <Item key="shop" icon={<ShoppingOutlined />}>
          <Link to="/shop">Shop</Link>
        </Item>

        <Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">
            <Badge count={2} offset={[9, 0]}>
              <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>Cart</span>
            </Badge>
          </Link>
        </Item>

        <Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Register</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />}>
          <Link to="/login">Login</Link>
        </Item>

        <Item key="pdp">
          <Link to="/product-details">Product Details</Link>
        </Item>

        <Item key="admin-category" icon={<SettingOutlined />}>
          <Link to="/admin/category">Admin add category</Link>
        </Item>
      </Menu>
    </Header>
  );
}

export default SiteHeader;
