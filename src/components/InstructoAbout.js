import React, { useState } from 'react'
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons'

function InstructorAbout(props) {
    const [more,setMore]=useState(false);

  return (
    <>
        <p>{more?props.content:(props.content.substring(0,400)+'...')}</p>
        
        
        <button class="toggles" onClick={()=>setMore(!more)}>{more?"Show less":"Show more"} {more?<ArrowUpCircleFill/>:<ArrowDownCircleFill/>}</button>
    </>

  )
}

export default InstructorAbout