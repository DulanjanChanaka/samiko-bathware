import React from 'react'
import Headline from './Headline'
import ProductBlock from './ProductBlock'

const Product = () => {
  return (
    <section id="product" className='max-w-[1640px] mx-auto p-4 py-12'>
        <Headline title="Products"/>
        <div >
            <ProductBlock/>
        </div>
    </section >
  )
}

export default Product