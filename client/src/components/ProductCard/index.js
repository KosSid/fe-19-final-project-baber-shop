import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Button, Image} from 'antd';
import {StarFilled, StarOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Ajax from "../../services/Ajax";
import WishListService from '../../services/WishListServise'
import './styles.less';
import {addToCart} from "../../store/cart/actionCart";

const {put, deleteRequest} = Ajax;
const {checkIfProductInWishList} = WishListService


const ProductCard = ({product, refresh}) => {

    const {name, currentPrice, imageUrls, _id} = product;
    const {exp, isAuthenticated, isAdmin} = useSelector(state => ({...state.user}));
    const history = useHistory();
    const dispatch = useDispatch();
    const [inWishlist, setInWishlist] = useState(false);

    const onAddToCart = (e) => {
        e.preventDefault();
        if(isAuthenticated){
            put('/cart/',_id)
        }else {
            const newProduct = {...product, cartQuantity: + 1}
            dispatch(addToCart(newProduct));
        }
    }

    const addToWishlist = async () => {
        if (!(isAuthenticated && !isAdmin && localStorage.token && exp && (exp > Date.now() / 1000))) {
            history.push('/login');
        } else {
            if (!inWishlist) {
                await put(`/wishlist/`, _id)
                setInWishlist(true)
                if (typeof (refresh) === 'function') refresh(_id)

            } else {
                await deleteRequest(`/wishlist/`, _id)
                setInWishlist(false)
                if (typeof (refresh) === 'function') refresh(_id)
            }
        }
    }


    useEffect(() => {
        if ((isAuthenticated && !isAdmin && localStorage.token && exp && (exp > Date.now() / 1000))) {
            return checkIfProductInWishList(_id, setInWishlist, true);
        }
    }, [_id, isAuthenticated, isAdmin, exp]);

    const inWishlistIcon = inWishlist
        ? <StarFilled className='favourite-icon'/>
        : <StarOutlined className='favourite-icon'/>;

    return (
        <>
            <div className='productCard'>
                <Link to={'/'}>
                    <div className='productCard-title'>{name}</div>
                    <div className='productCard-picture'>
                        <Image src={imageUrls[0]} preview={false}/>
                        <div className='productCard-price'>{currentPrice}$</div>
                    </div>
                </Link>
                <div className='productCard-buttons'>
                    <Button className='btn-favourite' onClick={addToWishlist}>
                        {inWishlistIcon}
                    </Button>
                    <Button className='btn-addToCard' onClick={onAddToCart}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;