import React from 'react'
import StareRate from './StareRate';

function FeedBack(props) {

    let reviews_count = [0, 0, 0, 0, 0, 0];

    for (let i in props.coursedata["reviews"]) {
        reviews_count[parseInt(props.coursedata["reviews"][i]["rating"])]++;
    }
    console.log(reviews_count);
    let ListRates = [];
    for (let i = 5; i >= 1; i--) {
        ListRates.push(<div className='d-flex w-100'>
            <div className='rate-slider'>
                <div className='rate-slider-result' style={{ width: parseInt(100 * reviews_count[i] / props.coursedata["reviews"].length) + '%' }}>
                </div>
            </div>
            <StareRate value={i} color={"#e59819"} />
            <span>{parseInt(100 * reviews_count[i] / props.coursedata["reviews"].length)}%</span>
        </div>)
    }
    return (
        <div className='feedback'>
            <div className='summary'>
                <h1>{props.coursedata["rating"].toFixed(1)}</h1>
                <span className='size-rate'><StareRate value={props.coursedata["rating"].toFixed(1)} color={"#e59819"} /></span>
                <h6>Course Rating</h6>
            </div>
            <div className='rates w-100'>
                {ListRates}
            </div>

        </div>
    )
}

export default FeedBack