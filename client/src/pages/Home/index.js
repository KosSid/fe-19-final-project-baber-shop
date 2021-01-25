
import React from 'react'
import './styles.less'
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";

const Home = (props) => {
    return (
        <div>
        <h2>This is Home Page</h2>
        <Slider/>
        <Banner title={'Best sellers'} config='cp'/>
        <Banner title={'One more  thing'} config='cc'/>
  </div>
    )
}

export default Home;