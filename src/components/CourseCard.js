import React from 'react'
function CourseCard(props) {
  return (
    <div className='course-card'>
        <img src={props.src} alt='Course' className='course-card-img'/>
        <h3>{props.title}</h3>
        <h6>{props.instructor}</h6>
        <div className='rate'>
            <label>{props.rate}</label>
            <img src="images/4_5_StarRating.png" className="stars_rate" alt='stars rate'/>
        </div>
        <h4>{props.price}</h4>
    </div>
  )
}

export default CourseCard