import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState,useEffect } from 'react';
import './Ekevents.css';


function ResponsiveCarousel({ children }) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [responsive, setResponsive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setShowCarousel(true);
        setResponsive(true);
      } else {
        setShowCarousel(false);
        setResponsive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return showCarousel ? (
    <Carousel>{children}</Carousel>
  ) : (
    <div className="Benefits_Media">
      {React.Children.map(children, (child) => (
        <div>{child.props.children}</div>
      ))}
    </div>
  );
}
export function Ekevents() {
  return (
    <div className='Ekevents_Page'>
      <h1 className='EkPhotos_heading1'>eK EVENTS</h1>.

       <div className="MediaGallery_Upcoming">
          <h4>eK Update</h4>
          <Carousel className="MediaGallery_Carousel">
            <Carousel.Item>
              Traditional Art Performance on Climate Change is Scheduled in
              Bhubhneshwar on 8-10 Aug 2023
            </Carousel.Item>
            <Carousel.Item>
              Traditional Art performance on Handloom will be held in Delhi on 8
              September 2023
            </Carousel.Item>
          </Carousel>
        </div>
      <div className='Ekevents_events'>
        <ul>
          <span>
            <li>Traditional Art Performance on Climate Change is scheduled in Bhubaneswar on 8-10 Aug 2023</li><br></br>
            <li>Traditional Art Performance on Handloom will be held in Delhi on 8 September 2023</li><br></br>
          </span>
          <li>Odissi and Sambalpuri dance held on Sanitation for UNICEF and Pantiss in Dhenkanal, Odisha
            on 2 June 2023</li><br></br>
          <li>Traditional Mayurbhanj Chau performance held on Aquaculture for GIZ in Mayfair Hotel,
            Bhubaneswar on 25 May 2023</li><br></br>
        </ul>
      </div>
    </div>
  )
}
