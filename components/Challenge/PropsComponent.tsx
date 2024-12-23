import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Cat from '../../assets/images/cat2.jpg'
import Product from '../Product'


const PropsComponent = () => {
    const product = [
        {productName: 'Product A', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product A', isFeatured: true},
        {productName: 'Product B', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product B', isFeatured: true},
        {productName: 'Product C', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product C', isFeatured: true},
        {productName: 'Product D', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product D', isFeatured: true},
        {productName: 'Product E', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product E', isFeatured: true},
        {productName: 'Product F', productImg: Cat, productPrices: 2999, productDescription: 'Description of Product F', isFeatured: true},
    ]

  return (
    <FlatList
        data={product}
        renderItem={({item}) => (
          <Product
            name={item.productName}     
            price={item.productPrices} 
            description={item.productDescription}
            image={item.productImg}
            isFeatured={item.isFeatured}    
          />

        )}
    
    />
  )
}

export default PropsComponent