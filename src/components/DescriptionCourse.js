import React, { useState } from 'react'
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons'

function DescriptionCourse(props) {
    const [more,setMore]=useState(false);

  return (
    <>
        <p>{more?props.content["description"]:(props.content["description"].substring(0,400)+'...')}</p>
        {
            more?<><h3>Who this course is for:</h3>
            <p>{props.content["for_who"]}</p></>:<></>
        }
        
        <button class="toggles" onClick={()=>setMore(!more)}>{more?"Show less":"Show more"} {more?<ArrowUpCircleFill/>:<ArrowDownCircleFill/>}</button>
    </>

  )
}

export default DescriptionCourse