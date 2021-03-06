import React, {useEffect, useState} from 'react'
import {Card, Result} from 'antd'
import {SyncOutlined} from '@ant-design/icons'
import Ajax from "../../services/Ajax";
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';
import './styles.less';

const FilteredProducts = ({queryString, onLoadMore}) => {
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showLoading, setShow] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const data = await Ajax.get(`/products/filter?${queryString}`);
      setFilteredProducts(data.products);
      setLoading(false);
      if (data.products.length === data.productsQuantity) {
        setShow(false);
      } else {
        setShow(true)
      }
    }

    fetch()
  }, [queryString])

  const showLoadingContainer = {
    display: showLoading ? 'flex' : 'none'
  }

  const showNoItemsContainer = {
    display: filteredProducts.length === 0 ? 'block' : 'none'
  }

  return (
    <>
      <div className='filtered-products-container'>
        {filteredProducts.map(item =>
          <ProductCard key={item._id} product={item}/>
        )}
        <Card
          className='load-more-btn'
          bordered={true}
          style={showLoadingContainer}
          hoverable={true}
          onClick={onLoadMore}
        >
          <SyncOutlined className='load-more-spinner' spin={!!loading}/>
          <p className='load-more-text'>Load More...</p>
        </Card>
        <div className='no-items-text-container' style={showNoItemsContainer}>
          <Result
            status="404"
            title="Nothing to show"
            subTitle="There are no items per your filters."
          />
        </div>
      </div>
    </>

  )
}

export default FilteredProducts;
FilteredProducts.propTypes = {
  queryString: PropTypes.string
}