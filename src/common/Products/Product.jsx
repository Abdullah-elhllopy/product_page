import StarRating from 'common/Rate/StarRating';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'store/actions/cartActions';
class Product extends Component {
    constructor(props) {
        super(props)
    }
    addToCart = (e) => {
        e.preventDefault();
        this.props.actions.addToCart(this.props.productData)
    }

    render() {
        const { productData } = this.props;
        const { title, image, description, rating, price } = productData
        return (
            <div className='product'>
                <div className='product_img'>
                    <img className='main_img' src={image} alt='product_image' />
                    <div className='deg'>
                        <img src={require('../../utils/images/hover.svg').default} alt='product_image' />
                    </div>
                </div>
                <div className='product_data'>
                    <span className="title">
                        {title}
                    </span>
                    <span className="description">
                        {description}
                    </span>
                    <StarRating rate={rating.count} disabled={true} />
                    <span className="price">
                        {price} EGP
                    </span>
                    <div className='cart_line'>
                        <button onClick={this.addToCart} className='add_to_cart'>
                            add to cart
                        </button>
                        <div className='icon'>
                            <img src={require('../../utils/images/vuesax-linear-heart 1.svg').default} alt='heart_image' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            actions,
            dispatch
        ),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)