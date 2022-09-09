import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { DataContext } from '../contexts/dataContext';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

function CoursesPanel() {
  let ListCards=[];
  let data=useContext(DataContext);
  console.log('childContext');
  const [current,setCurrent]=useState(0);
  let ListCarousel=[];

  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
function get_num(){
  if(windowSize.innerWidth<700){
    return 1;
  }
  if(windowSize.innerWidth<1000){
    return 2;
  }
  if(windowSize.innerWidth<1800){
    return 4;
  }
  return 5;
}

  const [num_courses_per_panel,setNum]=useState(get_num());
  
  useEffect(()=>{
      setNum(get_num());
  },[windowSize])

  
  console.log("windowSize.innerWidth");
  console.log(windowSize.innerWidth);
  console.log(current);
  for(let i in data["data"][0]["items"]){
    let course=data["data"][0]["items"][i];
    ListCards.push(<Link to={`/courses/${data["data"][0]["items"][i]["id"]}` } style={{ textDecoration: 'none',color:"black" }}><CourseCard key={i} title={course["title"]} src={course["cover"]} instructor={course["visible_instructors"]} rate={course["rating"].toFixed(1)} price={course["price"]} students={course["num_subscribers"]} /></Link>);
    if(i%num_courses_per_panel==num_courses_per_panel-1){
      ListCarousel.push(<Carousel.Item><div className='courses-cards-panel'>{ListCards}</div></Carousel.Item>);
      ListCards=[];
    }
  }
  if(ListCards.length>0){
    ListCarousel.push(<Carousel.Item><div className='courses-cards-panel'>{ListCards}</div></Carousel.Item>);
    ListCards=[];
    
  }
  return (
    <div className='course-panel'>
        <h2>{data["data"][0]["header"]}</h2>
        <p>
            {data["data"][0]["description"]}
        </p>
        <button className="explore-btn nav-btn">Explore python</button>
        
            <Carousel
            >
            {ListCarousel}
            
            </Carousel>
    </div>
  )
}

export default CoursesPanel