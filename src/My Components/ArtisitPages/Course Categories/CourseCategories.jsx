import AllCourses from "./CCComponents/All Courses/AllCourses";
import Categories from "./CCComponents/Categories Section/Categories";
import Footer from "../../Footer/Footer";
import "./CourseCategories.css"
import Artist_navbar from "../Artist_navbar";


const CourseCategories = () =>{
    return (
        <>
        <Artist_navbar/>
        <div id="complete-course-categories-section">
            <Categories />
            <AllCourses />
            <Footer />
        </div>
        </>
    )
}

export default CourseCategories;