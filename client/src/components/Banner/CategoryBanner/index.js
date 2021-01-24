import React from 'react';
import {Link} from "react-router-dom";
import './styles.less';

const CategoryBanner = ({category: {imgUrl, name, price, url}}) => {
    return (
        <Link to={url}>
            <div className="category-banner">
                <img className='category-banner-img' src={imgUrl} alt='Category 1'/>
                <div className="category-info category-banner-info">
                    <p className="category-info-title">
                        {name}
                    </p>
                    <p className="category-info-price">
                        from ${price}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CategoryBanner;

