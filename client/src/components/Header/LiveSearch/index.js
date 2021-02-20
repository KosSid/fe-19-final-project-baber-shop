import React, { useState, useEffect, useCallback } from 'react'
import './style.less'
import { Input, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { getSearchedProducts } from '../../../functions/products/product'
import {debounce} from 'lodash'

const prefix = <SearchOutlined/>

const LiveSearch = () => {
  const [items, setItems] = useState([])
  const [filteredItem, setFilteredItem] = useState("")

  const findItem = (event) => {
    setFilteredItem(event.target.value.toLowerCase())
  }

  const filterData = (products) =>{
    setItems(products.data.filter(item => {
      return item.name.toLowerCase().match(filteredItem)
    }))
  }

  const updateQuery = () =>{
    if(!filteredItem){
      return setItems([])
    }
    getSearchedProducts({query: filteredItem})
      .then(products => filterData(products))
      .catch(err => console.log(err))
  }
  const delayedQuery = useCallback(debounce(updateQuery, 500),[filteredItem])


  const products = items.map((el,index) =>
    <Menu.Item key={index}>
      <Link to={`/product/${el.itemNo}`}>
        <div className='search-product'>
          <img className='search-product-logo' src={el.imageUrls[0]} alt="product logo"/>
          <p className='search-product-name'>{el.name.toUpperCase()}</p>
          <p className='search-product-price'>{el.currentPrice} $</p>
        </div></Link>
    </Menu.Item>
  )
  const menu = (<Menu>
    {items.length ?
      products.slice(0, 10) :
      <Menu.Item>There's no corresponding item</Menu.Item>}
  </Menu>)

  useEffect(() => {
    delayedQuery()
    return delayedQuery.cancel
  }, [delayedQuery])



  return (
    <div className='search-container'>
      <Dropdown
        overlay={menu}
        onClick={e => e.preventDefault()}
      >
        <Input
          className="search-input"
          placeholder="I search..."
          value={filteredItem}
          allowClear
          size="small"
          onChange={event => findItem(event)}
          prefix={prefix}
        />
      </Dropdown>
    </div>
  )
}

export default LiveSearch