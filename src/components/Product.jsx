import React from 'react'
import Headline from './Headline'
import ProductBlock from './ProductBlock'

const Product = () => {
  return (
    <section id="product" className=' mx-auto p-4 py-12 bg-slate-300 mt-10 mb-7 lg:mb-2'>
        <Headline title="Products"/>
        <div className='lg:px-40'>
            <ProductBlock/>
        </div>
    </section >
  )
}

export default Product