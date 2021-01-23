import React from 'react'
import { Layout, Menu } from 'antd'
import './styles.less'
import { Link } from 'react-router-dom'
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import PopoverBasket from '../PopoverBasket/index'
import LiveSearch from './LiveSearch'



const {Header} = Layout
const {Item} = Menu

function SiteHeader() {
    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Item key="home" icon={<AppstoreOutlined/>}>
                    <Link to="/home">Home</Link>
                </Item>

                <Item key="plp" icon={<ShoppingOutlined/>}>
                    <Link to="/shop">Shop</Link>
                </Item>

        <Item key="cart" className='basket-iconn' icon={<ShoppingCartOutlined />}>
          <PopoverBasket className='basket-icon'/>
        </Item>

                <Item key="register" icon={<UserAddOutlined/>}>
                    <Link to="/register">Register</Link>
                </Item>

                <Item key="login" icon={<UserOutlined/>}>
                    <Link to='/login'>LogIn</Link>
                </Item>

              <Item key="error-page">
                <Link to="/error">404 page</Link>
              </Item>

              <Item key="pdp">
                <Link to="/product-details">Product Details</Link>
              </Item>

               <Item key="admin-dashboard" icon={<SettingOutlined/>}>
                  <Link to="/admin/dashboard">Admin dashboard</Link>
               </Item>
      </Menu>
      <LiveSearch/>
    </Header>
  )
}

export default SiteHeader;
