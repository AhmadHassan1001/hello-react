import React from 'react'

import {Star,StarFill,StarHalf} from "react-bootstrap-icons";

function StareRate(props) {
    let ListStars=[];
    for(let i=1;i<=parseInt(props.value);i++){
        ListStars.push(<StarFill color={(props.color!=null)?props.color:'#f3ca8c'}/>);
    }
    if(props.value-parseInt(props.value)>=0.3&&props.value-parseInt(props.value)<=0.7){
        
        ListStars.push(<StarHalf color={(props.color!=null)?props.color:'#f3ca8c'}/>);
    }
    while(ListStars.length<5)ListStars.push(<Star color={(props.color!=null)?props.color:'#f3ca8c'}/>);
  return (
    <div className='d-flex stars'>{ListStars}</div>
  )
}

export default StareRate