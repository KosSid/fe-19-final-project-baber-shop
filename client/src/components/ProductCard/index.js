import React from 'react';
import { useDispatch } from "react-redux";
import './styles.less';
import { Card, Button } from 'antd';
import {cartAction} from "../../store/cart/cartAction";

const ProductCard = ({ product }) => {

    const {name, currentPrice, itemNo, categories} = product;
    const dispatch = useDispatch();

    const onAddToCart = (e) => {
        e.preventDefault();
        dispatch(cartAction(product));
    }

    return (
        <>
            <li className='product-card-container'>
                    <Card data-category={categories} src='google.com' data-itemno={itemNo} bordered={true} style={{ width: 305, height: 272, position: 'relative' }} hoverable={true} cover={
                        <img
                            className='product-card-img'
                            alt="product-item"
                            src={'https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg'}
                        />
                    }
                    >
                        <div className='product-heading-wrapper'>
                            <p className='product-heading'>{name}</p>
                            <p className='product-price'>{currentPrice}$</p>
                        </div>
                        <div className='button-container'>
                            <Button type="primary" className='product-card-btn' onClick={onAddToCart}>Add to cart</Button>
                        </div>
                    </Card>
            </li>
        </>
    )
}

export default ProductCard;