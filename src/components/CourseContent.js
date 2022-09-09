import React, { useEffect, useState } from 'react';
import CourseContentElement from './CourseContentElement';
import { Collapse } from 'react-bootstrap';

function CourseContent(props) {

    let sections = props.sections;

    const [toggles, setToggles] = useState(false);
    const [moreSections, setMore] = useState(false);
    console.log(toggles);
    
    useEffect(() => {
        if(toggles)
        setMore(true);
    }, [toggles]);


    let ListSections = [], ListSections2 = [];

    function contentItem(index) {
        console.log("props2.index");
        console.log(index);
        return (
            <CourseContentElement data={sections["curriculum_context"]["data"]["sections"][index]} default={toggles}/>
        )
    }
    for (let i in sections["curriculum_context"]["data"]["sections"]) {

        console.log(i);
        if (i < 10)
            ListSections.push(contentItem(i));
        else {
            ListSections2.push(contentItem(i));

        }
    }
    console.log("moreSections");
    console.log(moreSections);


    return (
        <>
        <div className='d-md-flex justify-content-between'>

        <p>{sections["curriculum_context"]["data"]["sections"].length} sections • {sections["curriculum_context"]["data"]["num_of_published_lectures"]} lectures • {sections["curriculum_context"]["data"]["estimated_content_length_text"]} total length</p>
        <button className='toggles' onClick={()=>setToggles(!toggles)}>
            {!toggles?"Expand all sections":"Collapse all sections"}</button>
        </div>  
        <div className='sections'>
            {ListSections}
            <Collapse in={moreSections}>
            
                <div className="more-section">

                    {ListSections2}
                </div>
            </Collapse>
            {sections["curriculum_context"]["data"]["sections"].length - 10>0?<button className={moreSections?'more-btn-unvisible':'more-btn'} onClick={()=>setMore(!moreSections)}>
                {sections["curriculum_context"]["data"]["sections"].length - 10} more sections</button>
        :<></>}
            </div>
        </>
    )
}

export default CourseContent