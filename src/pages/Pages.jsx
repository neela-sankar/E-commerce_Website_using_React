import React from 'react'
import Home from '../components/mainpage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCat from '../components/top/TopCat'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annu from '../components/announcements/Annu'
import Wrapper from '../components/wrapper/Wrapper'
import Footer from '../common/footer/Footer'

const Pages = ({productItems, addToCart, cartItem, shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCat />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annu />
        <Wrapper />
        <Footer />
    </>
  )
}

export default Pages