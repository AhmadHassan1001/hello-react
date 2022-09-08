import React, { useEffect, useState } from 'react'

import { PlayCircleFill } from 'react-bootstrap-icons';
import Collapse from 'react-bootstrap/Collapse';
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons'

function CourseContentElement(props) {
    const [open, setOpen] = useState(props.default);
    console.log(open);
    function sectionContent() {
        let ListLectures = [];

        for (let i in props.data["items"]) {
            ListLectures.push(<div className='content-el'><span><PlayCircleFill /><span className='content-title'>{props.data["items"][i]["title"]}</span></span><span className='content-duration'>{props.data["items"][i]["content_summary"]}</span></div>);
        }

        return ListLectures;
    }
    useEffect(() => {
        setOpen(props.default);
    }, [props.default])
    return (
        <>
            <button className='section-btn' onClick={() => setOpen(!open)}><span>
                {!open ? <ArrowDownCircleFill /> : <ArrowUpCircleFill />}<span className='section-btn-title'>{props.data["title"]}</span>
            </span>
                <span className='section-summary'>{props.data["lecture_count"]} lectures • {props.data["content_length_text"]}</span></button>

            <Collapse in={open}>
                <div className="section-content">
                    {sectionContent()}
                </div>
            </Collapse>
        </>
    )
}

export default CourseContentElement