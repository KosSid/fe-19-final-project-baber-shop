import React from 'react'
import './style.less'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export const TotalAmount = (props) => {

  const products = useSelector(state => state.cart.products.products)
  const shippingPrice = useSelector(state => state.checkout.shipping.price)

  const sumArray = []
  products.forEach(product => sumArray.push(Number(product.product.currentPrice) * Number(product.cartQuantity)))
  const totalMoney = Number(sumArray.reduce((a, b) => a + b, 0).toFixed(2))

  return (
    <>{props.total
      ? <div className="cart-total-wrapper">
        <p className="cart-total_header">total</p>
        <div>
          <div className="cart-total_main">
            <div>
              <span>{products.length} item(s)</span>
              <span>${totalMoney}</span>
            </div>
            <div>
              <span>Shipment</span>
              <span>${shippingPrice}</span>
            </div>
          </div>
          <div className="cart-total_footer">
            <p>Order total</p>
            <p>${shippingPrice + totalMoney}</p>
          </div>
        </div>
      </div>
      : <div className='popover-basket-wrapper'>
        {products.length
          ? <>
            <p>You have <span className="popover-basket-span">{products.length}</span> goods in the basket</p>
            <p>For a total amount <span className="popover-basket-span">${totalMoney}</span></p>
            <div className="basket-buttons-wrapper">
              <Button className='make-order-button'>Make an order</Button>
              <Link to="/cart">
                <Button className='to-basket-button' type={"primary"}>Go to Basket</Button>
              </Link>
            </div>
          </>
          : <p className="popover-basket-empty">You don't have any products in the Cart</p>
        }
      </div>
    }</>
  )
}