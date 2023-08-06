export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: 'slides',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 912,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false

            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};