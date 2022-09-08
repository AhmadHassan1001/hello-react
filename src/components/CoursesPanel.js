import React, { useContext } from 'react'
import CourseCard from './CourseCard'
import { DataContext } from '../contexts/dataContext';
import { Link } from 'react-router-dom';
function CoursesPanel() {
  let ListCards=[];
  let data=useContext(DataContext);
  console.log('childContext');
  
  
  for(let i in data["data"][0]["items"]){
    let course=data["data"][0]["items"][i];
    ListCards.push(<Link to={`/courses/${data["data"][0]["items"][i]["id"]}` } style={{ textDecoration: 'none',color:"black" }}><CourseCard key={i} title={course["title"]} src={course["cover"]} instructor={course["visible_instructors"]} rate={course["rating"].toFixed(1)} price={course["price"]} /></Link>);
  }
  return (
    <div className='course-panel'>
        <h2>{data["data"][0]["header"]}</h2>
        <p>
            {data["data"][0]["description"]}
        </p>
        <button className="explore-btn nav-btn">Explore python</button>
        <div className='courses-cards-panel'>
            {ListCards}
        </div>
    </div>
  )
}

export default CoursesPanel