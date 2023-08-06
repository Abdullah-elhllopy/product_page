import React, { Component } from 'react'
import ImagesData from './components/ImagesData'
import ProductInfo from './components/ProductInfo'
import SuggestedProducts from 'common/Products/SuggetedProducts'
import BreadCrumb from 'common/BreadCrumbs/BreadCrumb'

export class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        this.getProduct()
    }
    getProduct() {
        fetch('https://dummyjson.com/products/2')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    product: data
                })
            }).catch(err => {
                throw err
            });
    }
    render() {
        if (this.state.product) {
            const { images, thumbnail, ...rest } = this.state.product;
            return (
                <>
                    <BreadCrumb />
                    <div className='product_page'>
                        <div className='product_container'>
                            {
                                this.state.product ?
                                    <>
                                        <ImagesData images={this.state.product.images} thumbnail={this.state.product.thumbnail} />
                                        <ProductInfo product={rest} />
                                    </> : null
                            }

                        </div>
                        <SuggestedProducts />
                    </div>
                </>
            )
        } else {
            return <></>
        }

    }
}

export default Product