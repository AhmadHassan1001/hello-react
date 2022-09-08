import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';

import CoursesPanel from '../components/CoursesPanel';

import { DataContext } from '../contexts/dataContext';
import CoursePanelSearch from './CoursePanelSearch';

function Home() {
    let data = useContext(DataContext);
    let [searchParams, setSearchParams] = useSearchParams();
    let content=<CoursesPanel />;
    console.log("#######################");
    console.log(data);

    if(searchParams.get("query")&&searchParams.get("query")!=""){
        content=<CoursePanelSearch query={searchParams.get("query")}/>
    }else{
        content=<CoursesPanel />;
    }


    if (data["isloading"]) {
        console.log("loading");
        return (
            <>
                <div className="header-container-big justify-content-center">

                    <img className="header-big-img" src="/images/fallback.jpg" />

                    <article className="bg-white d-inline-block catching-article">
                        <h1>New to Udemy? Lucky you.</h1>
                        <p>Courses start at E£169.99. Get your new-student offer before
                            it expires.</p>
                    </article>



                </div>
                <div className="header-container-small">
                    <img className="header-small-img" src="/images/fallback.jpg" />
                    <article className="bg-white d-inline-block catching-article">
                        <h1>New to Udemy? Lucky you.</h1>
                        <p>Courses start at E£169.99. Get your new-student offer before
                            it expires.</p>
                    </article>

                </div>

                <div className="courses-catching">
                    <h1>A broad selection of courses</h1>
                    <h5>Choose from 185,000 online video courses with new additions published every month
                    </h5>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="spinner-border text-primary courses-spinner" role="status">
                    </div>
                </div>

            </>
        );
    } else {
        return (
            <>
                <div className="header-container-big justify-content-center">

                    <img className="header-big-img" src="/images/fallback.jpg" />

                    <article className="bg-white d-inline-block catching-article">
                        <h1>New to Udemy? Lucky you.</h1>
                        <p>Courses start at E£169.99. Get your new-student offer before
                            it expires.</p>
                    </article>



                </div>
                <div className="header-container-small">
                    <img className="header-small-img" src="/images/fallback.jpg" />
                    <article className="bg-white d-inline-block catching-article">
                        <h1>New to Udemy? Lucky you.</h1>
                        <p>Courses start at E£169.99. Get your new-student offer before
                            it expires.</p>
                    </article>

                </div>

                <div className="courses-catching">
                    <h1>A broad selection of courses</h1>
                    <h5>Choose from 185,000 online video courses with new additions published every month
                    </h5>
                </div>

                
                {content}
            </>

        );

    }
}

export default Home