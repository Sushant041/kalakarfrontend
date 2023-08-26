// import React from "react";

import './SkillDevelopment.css';

import CourseCategories from "./SDComponents/Course Categories/CourseCategories";
import UpperSection from "./SDComponents/Upper Section/UpperSection";
import WhyUs from "./SDComponents/Why Us/WhyUs";
import TPaidCourses from './SDComponents/Courses Paid&Free/Trending Paid Courses/TPaidCourses';
import TFreeCourses from './SDComponents/Courses Paid&Free/Trending Free Courses/TFreeCourses';
import AllReviews from './SDComponents/User Review/AllReviews';
import CourseSubscription from './SDComponents/Course Subscription/CourseSubscription';
import Footer from '../Footer/Footer';




const SkillDevelopment = () =>{
  return (
    <div id="complete-skill-development">
      <UpperSection />
      <WhyUs />
      <CourseCategories />
      <TPaidCourses />
      <TFreeCourses />
      <AllReviews />
      <CourseSubscription />
      <div id="sd-footer">
      <Footer />
      </div>
    </div>
  )
}

export default SkillDevelopment;