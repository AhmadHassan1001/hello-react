import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../contexts/dataContext';
import CourseContent from './CourseContent';
import CourseDetailsCard from './CourseDetailsCard';
import FeedBack from './FeedBack';
import InstructorDetails from './InstructorDetails';
import Review from './Review';
import {InfoCircleFill,Globe,BadgeCcFill, Search, CheckLg} from 'react-bootstrap-icons';
import StareRate from './StareRate';
import DescriptionCourse from './DescriptionCourse';
import Reviews from './Reviews';
function CoursePage() {
    let params=useParams();
    let data=useContext(DataContext);
    let coursedata,sections;
    
    if(data["isloading"]){
        return(
            
            <div className='d-flex justify-content-center'>
            <div className="spinner-border text-primary courses-spinner" role="status">
            </div>
        </div>
        );
    }else{
        for(let i in data["data"][0]["items"]){
            if(data["data"][0]["items"][i]["id"]==params.courseId){
                coursedata=data["data"][0]["items"][i];
                break;
            }
            
        }
        console.log(data["data"][1]);
        for(let i in data["data"][1]){
            if(i==params.courseId){
                sections=data["data"][1][i];
                console.log('data["data"][1][i]');
                console.log(data["data"][1][i]);
                break;
            }
            
        }
        let instructor="";
        for(let i in coursedata["visible_instructors"]){
            if(i>0){
            instructor+=',';
            }
            instructor+=coursedata["visible_instructors"][i]["title"];
            console.log("*********");
            console.log(coursedata["visible_instructors"][i]["title"]);
        }

        let ListRequirements=[];

        for(let i in sections["details"]["Requirements"]){
            ListRequirements.push(<li>{sections["details"]["Requirements"][i]}</li>)
        }
        let ListInstructors=[];
        for(let i in coursedata["visible_instructors"]){
            ListInstructors.push(
                <InstructorDetails data={coursedata["visible_instructors"][i]}/>);
        }
        let LearnItems=[];
        
        for(let i in coursedata["objectives_summary"]){
            LearnItems.push(<p><CheckLg/><span className='ms-2'>{coursedata["objectives_summary"][i]}</span></p>);
        }

      return (
        <>
        
            <div className="course-details-card">
                <CourseDetailsCard coursedata={coursedata}/>

            </div>
            <div className='course-header'>
                <h5 className='path'>{coursedata["context_info"]["category"]["title"]+' > '+ coursedata["context_info"]["label"]["title"]}</h5>
                <img className="course-header-img" src={coursedata["cover"]}/>
                <h3>{coursedata["title"]}</h3>
                <h5>{coursedata["headline"]}</h5>
                <p className='d-flex'><span className='rate-value d-flex'><span className='me-2'>{coursedata["rating"].toFixed(1)}</span> <StareRate value={coursedata["rating"].toFixed(1)}/></span>   {coursedata["num_subscribers"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} students</p>
                <p className='instructors'>Created by <span>{instructor}</span></p>
                <div className='meta-data'><p><InfoCircleFill/> Last updated {coursedata["last_update_date"]}</p> <p><Globe/> {coursedata["locale"]["title"]}</p> <p><BadgeCcFill/> {coursedata["caption_languages"][0]}</p></div>
                
                <div className='money-small'>
                    <h3>E£{coursedata["price"]}</h3>
            
                    <button className='add-cart-btn'>Add to cart</button>

                    <h6 className='text-center'>30-Day Money-Back Guarantee</h6>
                    <h6 className='text-center'>Full Lifetime Access</h6>
                    <div className='actions d-flex justify-content-around mt-3'><span>Share</span><span>Gift this course</span><span>Apply Coupon</span></div>

                </div>
                
            </div>


            <div className='course-body'>
                <div className='will-learn'>
                    <h2>What you'll learn</h2>
                    <div className='learn-items'>
                        {LearnItems}
                    </div>
                </div>
                <h3>Course content</h3>
                
                
                <CourseContent sections={sections}/>
                <h3>Requirements</h3>

                <ul>
                {ListRequirements}
                </ul>
                <h3>Description</h3>

                <DescriptionCourse content={sections["details"]}/>
                
                <h3>Instructors</h3>
                {ListInstructors}
                <h3>Student feedback</h3>
                <FeedBack coursedata={coursedata}/>
                <h3>Reviews</h3>
                <Reviews reviews={coursedata["reviews"]}/>
                
            </div>

        
        </>
        
      )

    }

    
}

export default CoursePage;