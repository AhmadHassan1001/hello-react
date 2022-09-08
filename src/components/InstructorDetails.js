import React from 'react'
import DescriptionCourse from './DescriptionCourse'
import InstructorAbout from './InstructoAbout'
import {StarFill,PeopleFill,PlayCircleFill,Award} from 'react-bootstrap-icons';

function InstructorDetails(props) {
  return (
    <div className='instructor-details'>
        <h4>{props.data["title"]}</h4>
        <h6>{props.data["job_title"]}</h6>
        <div className='summary d-flex'>
            <img className="profile" src={props.data["image_100x100"]}/> 
            <ul>
                <li><span><StarFill/></span>{props.data["rate"]} Instructor Rating</li>
                <li><span><Award/></span>{props.data["reviews"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Reviews</li>
                <li><span><PeopleFill/></span>{props.data["students"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Students</li>
                <li><span><PlayCircleFill/></span>{props.data["courses"]} Courses</li>
            </ul>
        </div>
        <div><InstructorAbout content={props.data["about"]}/></div>
    
    </div>
  )
}

export default InstructorDetails