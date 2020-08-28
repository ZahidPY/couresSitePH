import React from 'react';
import './CourseList.css';
import { Button } from 'react-bootstrap';


const CourseList = (props) => {
    const { name, image,  instructor, courseFee } = props.passCourse;
    return (
        <div className="course mb-3 p-3">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="text-center course-head">
                        <img className="list-image img-fluid img-thumbnail" src={image} alt="course img" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="course-details mt-3">
                        <h4 className="course-name mt-3">{name}</h4>
                        <h5>Mentor : {instructor}</h5>
                        <h6>Course Fee : {courseFee} Tk</h6> <br/>
                        <Button className="enroll-button" onClick={() => props.enrollHandler(props.passCourse)}> Enroll Now</Button>
                    </div>
                </div>
            </div> <br />
        </div>
    );
};

export default CourseList;