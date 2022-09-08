import React from 'react'
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
        <img src={props.src} alt='Course' className='course-card-img'/>
        <h3>{props.title}</h3>
        <h7>{instructor}</h7>
        <div className='rate'>
            <label>{props.rate}</label>
            <img src="images/4_5_StarRating.png" className="stars_rate" alt='stars rate'/>
        </div>
        <h4>E£{props.price}</h4>
    </div>
  )
}

export default CourseCard