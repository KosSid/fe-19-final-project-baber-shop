import React, { useState, useEffect } from 'react'
import './style.less'
import { Input, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { getSearchedProducts } from '../../../functions/products/product'

const prefix = <SearchOutlined/>

const LiveSearch = () => {
  const [items, setItems] = useState([])
  const [filteredItem, setFilteredItem] = useState("")

  const findItem = (event) => {
    setFilteredItem(event.target.value)
  }


  const products = items.map((el,index) =>
    <Menu.Item key={index}>
      <Link to={`/${el.id}`}>{el.name}</Link>
    </Menu.Item>
  )
  const menu = (<Menu>
    {items.length ?
      products.slice(0, 10) :
      <Menu.Item>There's no corresponding item</Menu.Item>}
  </Menu>)

  useEffect(() => {
    if(!filteredItem){
      return setItems([])
    }
     getSearchedProducts({query: filteredItem})
        .then(products => setItems(products.data.filter(item => {
         return item.name.toLowerCase().match(filteredItem)
        })))
      .catch(err => console.log(err))
  }, [filteredItem])



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