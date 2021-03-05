import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Breadcrumb, Typography} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import './styles.less';

const BreadCrumbs = () => {
    const pageFromDispatch = useSelector(state => state.showSomething.page);
    const {pathname} = useLocation();
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        pathname === '/' || pathname === '/error' ? setDisplay('none') : setDisplay('block');
    }, [pathname])

    const toUpper = (word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1)).replaceAll('-', ' ');
    }

    return (
        <Breadcrumb separator=">" className="breadcrumbs" style={{display}}>
            {pageFromDispatch
                ? <>
                    <Breadcrumb.Item key={"home"} href="/" className="breadcrumb-item">
                        <HomeOutlined className='homepage-img'/>
                    </Breadcrumb.Item>
                    {pageFromDispatch.parentPages
                        ? pageFromDispatch.parentPages.map((page, i) => {
                            return (
                                <Breadcrumb.Item key={pageFromDispatch.key}
                                                 href={pageFromDispatch.pathNames[i]}
                                                 className="breadcrumb-item">
                                    <span>{toUpper(page)}</span>
                                </Breadcrumb.Item>
                            )
                        })
                        : ''}
                    <Breadcrumb.Item key={'key'}
                                     className="breadcrumb-item">
                        <Typography>{toUpper(pageFromDispatch.pageName)}</Typography>
                    </Breadcrumb.Item>
                </>
                : ''}
        </Breadcrumb>
    )
}

export default BreadCrumbs