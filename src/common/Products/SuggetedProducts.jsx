import Product from './Product'
import React, { Component } from 'react'
import Slider from "react-slick";
import { settings } from 'common/Slider';

export class SuggestedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    this.setState({ products: json });
                })
        } catch (err) {
            throw err;
        }

    }
    render() {
        return (
            <div className='products-container'>
                <h3>you may also like</h3>
                <Slider {...settings} >
                    {
                        this.state.products.map(product => (
                            <Product productData={product} key={`product_${product.id}`} />
                        ))
                    }
                </Slider>
            </div>

        )
    }
}

export default SuggestedProducts