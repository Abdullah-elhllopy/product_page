import React, { Component } from 'react'
import Slider from "react-slick";
export class ImagesData extends Component {
    constructor() {
        super();
        this.state = {
            sliders: [
                'http://img.nowrunning.com/content/movie/2014/Jagga-Jaso/wall_1024x768_01.jpg',
                'https://alchetron.com/cdn/Cocktail-2012-film-images-6dbd0ec2-2ea4-47aa-88fd-388cabed7f8.jpg',
                'http://media.glamsham.com/download/wallpaper/movies/images/z/zindagi-na-milegi-dobara-wallpaper-03-12x9.jpg']
        }
    }

    sliders() {
        return this.props.images.map((data, index) => {
            return (
                <div key={data}>
                    <img className='product_image' alt={"image" + index} src={data} />
                </div>
            )
        });
    }

    render() {
        const settings = {
            dots: false,
            lazyLoad: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
        };
        return (
            <>
                <div className='images_container'>
                    <div className='images_list'>
                        {
                            this.props.images.map((image, index) => {
                                return (
                                    <div className='img-container'>
                                        <img className='product_image' src={image} alt='product_image' />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='fully_image'>
                        <div className='img-container'>
                            <img className='product_image' src={this.props.thumbnail} alt='product_image' />
                            <div className='trade_off'>
                                10% off
                            </div>
                        </div>
                    </div>


                </div>
                <div className='slider_banner'>
                    <Slider {...settings}>
                        {this.sliders()}
                    </Slider>
                </div>
            </>
        )
    }
}

export default ImagesData