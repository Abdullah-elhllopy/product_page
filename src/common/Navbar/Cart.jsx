import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from 'store/actions/cartActions';
import { bindActionCreators } from 'redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProducts: [],
            subTotal: 0
        }
    }
    componentDidMount() {
        this.setState({ cartProducts: this.props.cart });
        this.calculateTotalPrice()
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.cart.length !== prevProps.cart.length) {
            this.setState({ cartProducts: this.props.cart });
            this.calculateTotalPrice()
        }
    }

    calculateTotalPrice() {
        const totalPrice = this.props.cart.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.product.price;
        }, 0);
        this.setState({
            subTotal: totalPrice
        })
    }
    render() {
        return (
            <>
                <div className='cart-container' onClick={() => this.props.closeChart()} />
                <div className='cart'>
                    <div className="header">
                        <span>my cart ({this.state.cartProducts.length})</span>
                        <img onClick={() => this.props.closeChart()} src={require("../../utils/images/Clear Circle.svg").default} alt="close" />
                    </div>
                    <div className="products">
                        {
                            this.state.cartProducts.map(item => {
                                const { product } = item;
                                return (
                                    <div className="product" key={product.id}>
                                        <img className='product_img' src={product.image} alt='info' />
                                        <div className="info">
                                            <div className='text_info'>
                                                <span className='name'>{product.title}</span>
                                                <span className='size'>size : 2*3 M</span>
                                                <span className='color'>color : black</span>
                                                <span className='price'>{product.price} EGP</span>
                                            </div>
                                            <img src="./vuesax-linear-trash 1.svg" alt='trash' onClick={() => this.props.actions.removeFromCart(product.id)} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="total_submit">
                        <div className="sub_total">
                            <span className='title'>sub total</span>
                            <span className='total'>{this.state.subTotal} EGP</span>
                        </div>
                        <button className='go_cart'>go to cart</button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart)