import React from 'react'
import { useState } from 'react';
import apiFacade from "../apiFacade.js";
import "../styles/Bored.css";
const Bored = () => {
    const [activity, setActivity] = useState("");


    function getActivity() {
        apiFacade.fetchActivity().then(data => setActivity(data));
    }

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    {activity != "" ?
                        <>
                        
                            <div className='column'>
                                <div className='bored-fact-section section-bored'>
                                    <h2 className='center-text bored-text'>Bored no more!!</h2>
                                    <h3 className='center-text bored-text'>Activity: {activity.activity}</h3>
                                    <h3 className='center-text bored-text'>Type: {activity.type}</h3>
                                    <h3 className='center-text bored-text'>Participants: {activity.participants}</h3>
                                    <h3 className='center-text bored-text'>Price: {activity.price}</h3>
                                    <a className='center-text bored-text'  href={activity.link}><h3>Link: {activity.link}</h3></a>
                                    <h3 className='center-text bored-text'>Accessibility: {activity.accessibility}</h3>
                                    <button onClick={getActivity}>Generate</button>
                                </div>
                            </div>
                        </> : <>
                            <div className='column'>
                                <div className='bored-fact-section section-bored'>
                                    <h2 className='center bored-text'>bored?!</h2><br/>
                                    <h3 className='center bored-text'>Then click below and receive an activity</h3>
                                    <button onClick={getActivity}>Generate</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    )
}

export default Bored