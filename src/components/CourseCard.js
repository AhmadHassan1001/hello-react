import React from 'react'
import StareRate from './StareRate';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function CourseCard(props) {
  let instructor="";
  for(let i in props.instructor){
    if(i>0){
      instructor+=',';
    }
    instructor+=props.instructor[i]["title"];
    console.log("*********");
    console.log(props.instructor[i]["title"]);
  }

  console.log(props.instructor);
  return (
    <div className='course-card'>
        <div className='img-bg'>
        <img src={props.src} alt='Course' className='course-card-img'/>
        
        </div>
        <h3>{props.title}</h3>
        <h7>{instructor}</h7>
        <div className='rate'>
            <label>{props.rate}</label>
            <StareRate value={props.rate} color="#e59819"/>
            <span className='students'>({props.students.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</span>
        </div>
        <h4>E£{props.price}</h4>
    </div>
  )
}

export default CourseCard