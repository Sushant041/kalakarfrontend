import React from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import "./Artist_OpportunitiesMoreInfo.css";
import { Navbar_frontpage } from "../../FrontPage/Navbar";
import { useState } from 'react';
import Artist_navbar from '../Artist_navbar';

export function Artist_OpportunitiesMoreInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const job = location.state.job;
    const [OpportunityapplynowPopup, setOpportunityapplynowPopup] = useState(null);

    return (
        <>
            <Artist_navbar />
            <div className='OpportunitiesMoreInfoPage'>
                <div className='OpportunitiesMoreInfoPage_Topbox'>
                    <h1>{job.title}</h1>
                    <div className='OpportunitiesMoreInfoPage_Topboxcontent'>
                        <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                            <p>Category :&emsp;<span>{job.category}</span></p>
                            <p>Posted on :&emsp;<span>{job.postedondate}</span></p>
                            <p>Due Date :&emsp; <span>{job.applicationDueDate}</span></p>
                            <p> Opening :&emsp;  <span>{job.opening}</span></p>
                        </div>
                        <div className='OpportunitiesMoreInfoPage_Topboxbtns'>
                            <button className='btnone'>Share</button>
                            <button className='btntwo'>Save</button>
                        </div>
                    </div>
                </div>

                <div className='OpportunitiesMoreInfoPage_bottombox'>
                    <h1>Description</h1>
                    <p>{job.description}</p>
                    <h1>Other Details</h1>
                    <div className="OpportunitiesMoreInfoPage_bottombox_RSO">
                        <div>
                            <p>Role :  </p>
                            <p>Expertise :</p>
                            <p>Location : </p>
                            <p>Language :  </p>
                            <p>Amount : </p>
                            <p>Theme : </p>
                            <p>Performance Time : </p>
                            <p>Duration of Performance : </p>
                            <p>Nature of Art : </p>
                            <p>Performance Type : </p>
                            <p>Live / Recorded :</p>
                            <p>Level of Artist : </p>
                            <p>Artist Location :</p>
                            <p>Posted By : </p>
                        </div>
                        <div>
                            <p><span>{job.role}</span></p>
                            <p><span>{job.expertise}</span></p>
                            <p><span>{job.location}</span></p>
                            <p><span>{job.language}</span></p>
                            <p><span>{job.amount}</span></p>
                            <p><span>{job.theme}</span></p>
                            <p><span>{job.performancetime}</span></p>
                            <p><span>{job.durationofperformance}</span></p>
                            <p><span>{job.natureofart}</span></p>
                            <p><span>{job.performancetype}</span></p>
                            <p><span>{job.liveorrecorded}</span></p>
                            <p><span>{job.levelofartist}</span></p>
                            <p><span>{job.artistlocation}</span></p>
                            <p><span>{job.postedby}</span></p>
                        </div>
                    </div>
                    <h1>Perks and Benefits</h1>
                    <div className='OpportunitiesMoreInfoPage_bottombox_PB'>
                        <p>{job.perk1}</p>
                        <p>{job.perk2}</p>
                        <p>{job.perk3}</p>
                    </div>
                    <div className='OpportunitiesMoreInfoPage_bottombox_btns'>
                        <button className='btnone' onClick={() => navigate(-1)}>Back</button>
                        <button className='btntwo' onClick={() => setOpportunityapplynowPopup(true)}>Apply Now</button>
                    </div>
                </div>
                {OpportunityapplynowPopup && (
                    <div className="Opportunityapplynowpopup_fullscreen">
                        <div className="Opportunityapplynowpopup">
                            <button onClick={() => setOpportunityapplynowPopup(false)}>X</button>
                            <div className="Opportunityapplynowpopup_content">
                                <h4>{job.title}</h4>
                                <div className="Opportunityapplynowpopup_contentone">
                                    <p>Posted on: <span>{job.postedondate}</span></p>
                                    <p>Last Date to apply: <span>{job.applicationDueDate}</span></p>
                                </div>
                            </div>
                            <h1>Description</h1>
                            <p>{job.description}</p>
                            <div className="Opportunityapplynowpopup_contentone">
                                <h1>Other Details</h1>
                                <a href="#" style={{ color: "#AD2F3B" }}>View all info</a>
                            </div>
                            <div className="OpportunitiesPage_displayonejob_contentdetailsone">
                                <p>Role : &emsp;&emsp;&emsp;&emsp; <span>{job.role}</span></p>
                                <p>Expertise :&emsp;&emsp;<span>{job.expertise}</span></p>
                                <p>Location :&emsp;&emsp; <span>{job.location}</span></p>
                                <p>Language : &emsp;  <span>{job.language}</span></p>
                                <p>Amount : &emsp; &emsp;<span>{job.amount}</span></p>
                                <p> Opening :&emsp;&emsp; <span>{job.opening}</span></p>
                            </div>
                            <h1>Why do you want ot Apply for this Role?</h1>
                            <div className="Opportunityapplynowpopup_contentform">
                                <form>
                                    <input type="text"></input>
                                    <button type="submit">Submit</button>
                                    <button onClick={() => setOpportunityapplynowPopup(false)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
