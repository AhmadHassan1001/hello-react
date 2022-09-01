import React from 'react'
import CourseCard from './CourseCard'
function CoursesPanel(props) {
  let ListCards=[];

  return (
    <div className='course-panel'>
        <h2>{props.title}</h2>
        <p>
            {props.description}
        </p>
        <button className="explore-btn nav-btn">Explore python</button>
        <div className='courses-cards-panel'>
            {props.data.map((course)=><CourseCard key={course.id} title={course.title} src={course.image} instructor={course.instructor} rate={course.stars} price={course.price} />
            )}
        </div>
    </div>
  )
}

export default CoursesPanel