import React, { useContext } from 'react'
import CourseCard from './CourseCard'
import { DataContext } from '../contexts/dataContext';

function CoursePanelSearch(props) {
    let ListCards=[];
    let data=useContext(DataContext);
    
    
    for(let i in data["data"][0]["items"]){
      let course=data["data"][0]["items"][i];
      console.log(course["title"].toLowerCase().indexOf(props.query.toLowerCase()));

      if(course["title"].toLowerCase().indexOf(props.query.toLowerCase())!==-1)
        ListCards.push(<CourseCard key={course["id"]} title={course["title"]} src={course["cover"]} instructor={course["visible_instructors"]} rate={course["rating"].toFixed(1)} price={course["price"]} students={course["num_subscribers"]} />);
    }
    return (
      <div className='course-panel'>
          <h2>Results:</h2>
          <div className='courses-cards-panel d-flex flex-wrap'>
              {ListCards}
          </div>
      </div>
    )
  }

export default CoursePanelSearch