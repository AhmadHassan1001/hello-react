import React from 'react'
import { HandThumbsUp,HandThumbsDown } from 'react-bootstrap-icons';
import StareRate from './StareRate';

function Review(props) {
    console.log(props.review);
    return (
        <>
            <div className='review d-flex'>
                <div className='review-avatar'>{props.review["user"]["initials"]}</div>
                <div className='review-details'>
                    <h6>{props.review["user"]["public_display_name"]}</h6>
                    <StareRate value={props.review["rating"]} color="#e59819"/>
                    <div class="content" dangerouslySetInnerHTML={{ __html: props.review["content_html"] }}></div>
                    <h7>Was this review helpful?</h7>
                    <div className='review-actions'>
                        <button className='like'><HandThumbsUp/></button>
                        <button className='dis-like'><HandThumbsDown/></button>
                        <span>Report</span>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Review