import React from 'react';
import {PlayBtn,CardText,Phone,Infinity,Download,FileEarmark} from 'react-bootstrap-icons';


function CourseDetailsCard(props) {
  return (
    <div className='course-details-card-comp'>
        <img src={props.coursedata["cover"]} alt='Course' className='course-details-card-comp-img'/>
        
        <div className='money'>
            
            <h3>E£{props.coursedata["price"]}</h3>
            <button className='add-cart-btn'>Add to cart</button>
            <button className='buy-btn'>Buy now</button>
            <div className='d-flex justify-content-center'>
                <h6>30-Day Money-Back Guarantee</h6>
            </div>
            <div className='p-3'>
            <h4>This course includes:</h4>
            <div className='detail-el'><PlayBtn/> {props.coursedata["content_info_short"]+' on-demand video'}</div>
            <div className='detail-el'><FileEarmark/> {props.coursedata["num_articles"]+' articles'} </div>
            <div className='detail-el'><Download/> {props.coursedata["num_recources"]+' downloadable resources'}</div>
            <div className='detail-el'><Infinity/> Full lifetime access</div>
            <div className='detail-el'><Phone/> Access on mobile and TV</div>
            <div className='detail-el'><CardText/> Certificate of completion</div>

            <div className='actions d-flex justify-content-between'><span>Share</span><span>Gift this course</span><span>Apply Coupon</span></div>



            </div>
        </div>
        <hr></hr>
        
        <div className='more-training'>
            
            <h3>Training 5 or more people?</h3>
            <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
            
            <button className='buy-btn'>Try Udemy Business</button>

        </div>

    </div>
  )
}

export default CourseDetailsCard