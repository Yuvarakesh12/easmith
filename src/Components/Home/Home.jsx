import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';

const ItemsDetails = [
    {   
        id: "1",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729269626/Ellipse_68_lwutdq.png",
        heading: (
            <>
                Lorem ipsum dolor sit amet.<br />
                Aut ipsam illum et nostrum.<br />
                Et necessitatibus enim ut 
            </>
        )
    },
    {   
        id: "2",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729273315/Ellipse_69_h2vonh.png",
        heading: (
            <>
                Sed do eiusmod tempor.<br />
                Et dolore magna aliqua.<br />
                Ut enim ad minim veniam.
            </>
        )
    },
    {   
        id: "3",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729273323/Ellipse_70_c4sep4.png",
        heading: (
            <>
                Ut enim ad minim veniam,<br />
                quis nostrud exercitation.<br />
                Ullamco laboris nisi ut aliquip.
            </>
        )
    },
    {   
        id: "4",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729273342/Ellipse_63_piukvh.png",
        heading: (
            <>
                Duis aute irure dolor in reprehenderit.<br />
                In voluptate velit esse cillum.<br />
                Dolore eu fugiat nulla pariatur.
            </>
        )
    },
    {   
        id: "5",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729273347/Ellipse_62_uyjyb5.png",
        heading: (
            <>
                Excepteur sint occaecat.<br />
                Sunt in culpa qui officia.<br />
                Id est laborum.
            </>
        )
    },
    {   
        id: "6",
        img: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729273473/Ellipse_71_e0vpcp.png",
        heading: (
            <>
                Lorem ipsum dolor sit amet,<br />
                Consectetur adipiscing elit.<br />
                Sed do eiusmod tempor 
            </>
        )
    },
];

const Home = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '30px',
                },
            },
        ],
    };

    return (
        <div>
            <div className="buttons-container">
                <button className="button-plants">Plants</button>
                <button className="button-posts">Posts</button>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>

            <div>
                <p className="Nursery">Nursery</p>
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {ItemsDetails.map(item => (
                            <div key={item.id} className="item">
                                <img 
                                    src={item.img} 
                                    className="image" 
                                    alt={item.heading}
                                />
                                <p className="text">{item.heading}</p>
                            </div>
                        ))}
                    </Slider>
                    <button className="slider-button left" onClick={() => sliderRef.current.slickPrev()}>
                        &#8249;
                    </button>
                    <button className="slider-button right" onClick={() => sliderRef.current.slickNext()}>
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
