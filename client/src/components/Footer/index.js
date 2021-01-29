import React from "react";
import {Col, Input, Image, Layout, Row} from 'antd';
import Ajax from "../../services/Ajax";
import './styles.less'
import {Link} from "react-router-dom";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from '@ant-design/icons';

const {Search} = Input;

const {get} = Ajax;
const {Footer: AntFooter} = Layout;

// Footer: The bottom layout with the default style,
// in which any element can be nested, and must be placed in Layout.


function Footer() {
    //
    // const newLinks = [
    //     {
    //         title: "About us",
    //         links: [
    //             {
    //                 description: "Store",
    //                 url: "/about-us/store"
    //             },
    //             {
    //                 description: "News",
    //                 url: "/about-us/news"
    //             },
    //             {
    //                 description: "Special offers",
    //                 url: "/about-us/special-offers"
    //             }, {
    //                 description: "Policy",
    //                 url: "/about-us/Policy"
    //             }]
    //     },
    //     {
    //         title: "Contacts",
    //         links: [
    //             {
    //                 description: "Map of stores",
    //                 url: "/contacts/map-of-stores"
    //             },
    //             {
    //                 description: "Call us",
    //                 url: "/contacts/call-us"
    //             }]
    //     },
    //     {
    //         title: "Items",
    //         links: [
    //             {
    //                 description: "Payment",
    //                 url: "/items/payment"
    //             },
    //             {
    //                 description: "Shipment",
    //                 url: "/items/shipment"
    //             },
    //             {
    //                 description: "Find your parcel",
    //                 url: "/items/find-your-parcel"
    //             }]
    //     }]
    get('/links');

    return (

        <AntFooter className='footer'>
            <Row gutter={[5,20]}>
                <Col xs={24} sm={24} lg={5}>
                    <div className='footer-logo'>
                        <Link to="/home">
                            < Image src="footerLogo/logo_white.png" alt="logo-white" className='imgTestRespons'/>
                        </Link>
                    </div>
                </Col>
                <Col className="footer-nav" xs={24} sm={8} lg={4}>
                    <Link className='footer-header_link' to="/home">
                        About Us
                    </Link>
                    <Link className='footer-link' to="/home">
                        Store
                    </Link>
                    <Link className='footer-link' to="/home">
                        News
                    </Link>
                    <Link className='footer-link' to="/home">
                        Special offers
                    </Link>
                    <Link className='footer-link' to="/home">
                        Policy
                    </Link>
                </Col>
                <Col className="footer-nav" xs={24} sm={8} lg={4}>
                    <Link className='footer-header_link' to="/home">
                        Contacts
                    </Link>
                    <Link className='footer-link' to="/home">
                        Store
                    </Link>
                    <Link className='footer-link' to="/home">
                        Call us
                    </Link>
                </Col>
                <Col className="footer-nav" xs={24} sm={8} lg={4}>
                    <Link className='footer-header_link' to="/home">
                        Items
                    </Link>
                    <Link className='footer-link' to="/home">
                        Store
                    </Link>
                    <Link className='footer-link' to="/home">
                        News
                    </Link>
                    <Link className='footer-link' to="/home">
                        Store
                    </Link>
                </Col>
                <Col className="footer-socials" xs={24} sm={18} lg={7}>
                    <Search
                        className='footer-socials_subscribePanel'
                        placeholder='Enter your email'
                        prefix={<MailOutlined/>}
                        allowClear
                        enterButton="Subscribe"
                        size="small"
                        color='yellow'
                        onSearch={() => alert('Success')}
                    />
                    <Link to="/home">
                        <InstagramOutlined className='footer-socials_icons'/>
                    </Link>
                    <Link to="/home">
                        <FacebookOutlined className='footer-socials_icons'/>
                    </Link>
                    <Link to="/home">
                        <YoutubeOutlined className='footer-socials_icons'/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className='footer-copyright'>Copyright © Barber All Rights Reserved 2021</Col>
            </Row>
        </AntFooter>
    )
}

export default Footer;