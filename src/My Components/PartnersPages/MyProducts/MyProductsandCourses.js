import React from 'react';
import Partner_Navbar from '../Partner_Navbar';
import "./MyProductsandCourses.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductcarouselImageData = [
    ['assets/Products/Rectangle22147.png', 'assets/Products/Rectangle22125.png'],
    ['assets/Products/Rectangle22148.png'],
    ['assets/Products/Rectangle22149.png'],
    ['assets/Products/Rectangle22150.png'],
    ['assets/Products/Rectangle22151.png'],
    ['assets/Products/Rectangle22152.png'],
    ['assets/Products/Rectangle22153.png'],
    ['assets/Products/Rectangle22154.png'],
];


const CoursesImageData=[
    {
        src:"assets/Products/Rectangle22029.png",
        btntext:"View Details"
    },
    {
        src:"assets/Products/Rectangle22030.png",
        btntext:"View Details"
    },
    {
        src:"assets/Products/Rectangle22031.png",
        btntext:"View Details"
    }
];

export default function MyProductsandCourses() {
    return (
        <>
            <Partner_Navbar />
            <div className='MyProductsandCourses_Page'>
                <div className='MyProductsandCourses_Top'>
                    <div className='MyProductsandCourses_Content'>
                        <p>My Products and courses</p>
                    </div>
                </div>
                <div className='MyProductsandCourses_MainContent'>
                    {ProductcarouselImageData.map((imageGroup, index) => (
                        <div className='MyProductsandCourses_MainContent_one' key={index}>
                            <Carousel>
                                {imageGroup.map((imageSrc, innerIndex) => (
                                    <Carousel.Item key={innerIndex}>
                                        <img src={imageSrc} alt={`Image ${innerIndex}`}/>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <button type='button'>View Details</button>

                        </div>
                    ))}
                </div>
                <h1>Course Categories</h1>
                <div className='MyProductsandCourses_MainContent'>
                {CoursesImageData.map((imageGroup, index) => (
                    <div className='MyProductsandCourses_MainContent_one'>
                        <img src={imageGroup.src}></img>
                        <button>{imageGroup.btntext}</button>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}
