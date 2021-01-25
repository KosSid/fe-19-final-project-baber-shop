import React from 'react';
import ProductCard from "../../ProductCard";
import './styles.less';
import {Col, Row} from "antd";

const ProductBanner = ({products}) => {

// Temporary array with products, which is not yet in the DB
//     const products = [
//         {
//             enabled: true,
//             imageUrls: [
//                 "https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg",
//                 "img/products/men/002.png",
//                 "img/products/men/003.png",
//                 "img/products/men/004.png"
//             ],
//             quantity: 156,
//             _id: "5da463678cca382250dd7bc7",
//             name: "Andis Blocking UltraEdge",
//             currentPrice: 100,
//             previousPrice: 250,
//             categories: "men",
//             color: "red",
//             productUrl: "/men",
//             brand: "braaaand",
//             myCustomParam: "some string or json for custom param",
//             itemNo: 291759,
//             date: "2019-10-14T12:00:39.679Z",
//             __v: 0,
//             oneMoreCustomParam: {
//                 description: "blablabla",
//                 rate: 4.8,
//                 likes: 20
//             }
//         },
//         {
//             enabled: true,
//             imageUrls: [
//                 "https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg",
//                 "img/products/men/002.png",
//                 "img/products/men/003.png",
//                 "img/products/men/004.png"
//             ],
//             quantity: 156,
//             _id: "5da463678cca382250dd7bc7",
//             name: "Bla Bla Bla",
//             currentPrice: 10,
//             previousPrice: 250,
//             categories: "men",
//             color: "red",
//             productUrl: "/men",
//             brand: "braaaand",
//             myCustomParam: "some string or json for custom param",
//             itemNo: 11213,
//             date: "2019-10-14T12:00:39.679Z",
//             __v: 0,
//             oneMoreCustomParam: {
//                 description: "blablabla",
//                 rate: 4.8,
//                 likes: 20
//             }
//         },
//         {
//             enabled: true,
//             imageUrls: [
//                 "https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg",
//                 "img/products/men/002.png",
//                 "img/products/men/003.png",
//                 "img/products/men/004.png"
//             ],
//             quantity: 156,
//             _id: "5da463678cca382250dd7bc7",
//             name: "Bla Bla Bla Bla Bla",
//             currentPrice: 10,
//             previousPrice: 250,
//             categories: "men",
//             color: "red",
//             productUrl: "/men",
//             brand: "braaaand",
//             myCustomParam: "some string or json for custom param",
//             itemNo: 1234213,
//             date: "2019-10-14T12:00:39.679Z",
//             __v: 0,
//             oneMoreCustomParam: {
//                 description: "blablabla",
//                 rate: 4.8,
//                 likes: 20
//             }
//         },
//         {
//             enabled: true,
//             imageUrls: [
//                 "https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg",
//                 "img/products/men/002.png",
//                 "img/products/men/003.png",
//                 "img/products/men/004.png"
//             ],
//             quantity: 156,
//             _id: "5da463678cca382250dd7bc7",
//             name: "Bla Bla Bla Bl",
//             currentPrice: 10,
//             previousPrice: 250,
//             categories: "men",
//             color: "red",
//             productUrl: "/men",
//             brand: "braaaand",
//             myCustomParam: "some string or json for custom param",
//             itemNo: 12113,
//             date: "2019-10-14T12:00:39.679Z",
//             __v: 0,
//             oneMoreCustomParam: {
//                 description: "blablabla",
//                 rate: 4.8,
//                 likes: 20
//             }
//         }
//     ]

    return (
        <>
            <Row gutter={[20, 20]} justify="space-around">
                {products.map(product => {
                    return (
                        <Col span={12} key={product.itemNo}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default ProductBanner;