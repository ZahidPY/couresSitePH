import React from 'react';
import './CourseReview.css';



const CourseReview = (props) => {
    const enroll = props.courseEnroll;

    let totalCourseFee = 0;
    for (let i = 0; i < enroll.length; i++) {
        const enrollFee = enroll[i].courseFee;
        totalCourseFee = totalCourseFee + enrollFee;
    }

    let lastEnrolled = "";
    for (let i = 0; i < enroll.length; i++) {
        const lastEnroll = enroll[i];
        lastEnrolled = { name: lastEnroll.name, image: lastEnroll.image, enroll: lastEnroll.enroll, instructor: lastEnroll.instructor };
    }

    return (
        <div className="review">
            <h3 className="course-review text-center pt-3">Your Cart</h3>
            <div className="total-enroll-course ">
                <h5> Total Enrolled Course : {enroll.length} </h5>
                <h5> Cost : {totalCourseFee} </h5>
            </div> <br/> <br/>
                <h3 className="course-review text-center ">Recently Added</h3>
                <div className="row total-enroll-course">
                
                <div className="col-md-12">
                    <h5> {lastEnrolled.name} </h5>
                    <p> {lastEnrolled.instructor}</p>
                </div>
                </div>
                
                
        
            
        </div>
    );
};

export default CourseReview;