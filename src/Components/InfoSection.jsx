import React from "react";

function InfoSection(){
    return(
        <div className="info-section">
            <div className="profileImg">
                <img src="/images/she.png" alt="" />
            </div>          
            <h2 className="Infosection-name">Nsikak Akpan</h2>
            <h2 className="Infosection-job_title">Frontend Developer</h2>
            <p className="Infosection-website">nsikakakpan.website</p>
            <div className="Infosection-btns">
                <button className="emailBtn"><i class="fa-solid fa-envelope"></i><span>Email</span></button>
                <button className="linkedinBtn"><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></button>
            </div>
        </div>
    )
}

export default InfoSection;