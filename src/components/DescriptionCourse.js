import React, { useState } from 'react'
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons'

function DescriptionCourse(props) {
    const [more,setMore]=useState(false);
    function htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      console.log("doc");
      console.log(doc);
      console.log(input);
      return doc.documentElement.textContent;
    }
    console.log('props.content["description_html"]');
    console.log(props.content["description_html"]);
  return (
    <>
        <p dangerouslySetInnerHTML={{ __html: htmlDecode(more?props.content["description_html"]:(props.content["description"].substring(0,400)+'...'))}}></p>
        
        
        <button class="toggles" onClick={()=>setMore(!more)}>{more?"Show less":"Show more"} {more?<ArrowUpCircleFill/>:<ArrowDownCircleFill/>}</button>
    </>

  )
}

export default DescriptionCourse