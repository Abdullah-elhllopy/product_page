
import StarRating from 'common/Rate/StarRating'
import React, { Component } from 'react'
const colors = [
    "white",
    "black",
    "red",
    "orange"
]
const sizes = [
    "2*3 M",
    "2*1 M",
    "2*2 M"
]
export default class ProductInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColor: 0,
            activeSize: 0,
        }
    }
    render() {
        const { id, title, description, price, rating, discountPercentage } = this.props.product
        return (
            <div className='product_info' >
                <div className="header">
                    <div className='data'>
                        <h4>{title}</h4>
                        {/* <div className="rate">
                            <input type="radio" checked={true} disabled id="star5" name="rate" defaultValue={5} />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" checked={true} disabled id="star4" name="rate" defaultValue={5} />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" checked={true} disabled id="star3" name="rate" defaultValue={5} />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" checked={true} disabled id="star2" name="rate" defaultValue={5} />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" checked={true} disabled id="star1" name="rate" defaultValue={5} />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div> */}
                        <StarRating rate={rating} disabled={true} />
                        <div className='price'>
                            <span className='real_price'>{price} EGP </span>
                            <h4 className='muted_price'>{Number(price) - ((Number(price) * Number(discountPercentage)) / 100)} EGP</h4>
                        </div>
                    </div>
                    <div className='360_icon'>
                        <img src='./Group 14419.svg' alt='360' />
                    </div>
                </div>
                <div className='description'>
                    {description}
                </div>

                <div className='sizes'>
                    <span className='title'>size </span>
                    <div className='size_options'>
                        {
                            sizes.map((size, index) => (
                                <span
                                    key={`active_${size}_${index}`}
                                    onClick={() => {
                                        this.setState({ activeSize: index })
                                    }}
                                    className={this.state.activeSize === index ? 'active' : null}>{size}</span>
                            ))
                        }
                    </div>
                </div>
                <div className='colors'>
                    <span className='title'>color </span>
                    <div className='color_options'>
                        {colors.map((color, index) => (
                            <div key={`active_${color}_${index}`} onClick={() => {
                                this.setState({ activeColor: index })
                            }} className={this.state.activeColor === index ? 'active' : null}>
                                <span className={`color_pick ${color} `} data-color-primary="#000" />
                            </div>
                        ))}


                    </div>
                </div>
                <div className='buy_container'>
                    <div className='counter'>
                        <img src='./Group 9062.svg' alt='minus' />
                        <span>1</span>
                        <img src='./Group 9063.svg' alt='plus' />
                    </div>
                    <button className='buy'>
                        Buy Now
                    </button>
                </div>
                <div className='actions'>
                    <div className='action'>
                        <div className="icon">
                            <img src='./Icon.svg' alt='widget' />
                        </div>
                        <span>add to wishlist</span>
                    </div>
                    <div className='action'>
                        <div className="icon">
                            <img src='./video.svg' alt='widget' />

                        </div>
                        <span>video call</span>
                    </div>
                    <div className='action'>
                        {/* <div className="icon"> */}
                        <img src='./Group 8892.svg' alt='widget' />
                        {/* </div> */}
                        <span>share</span>
                    </div>
                </div>
            </div>
        )
    }
}
