import React from "react";
import './CSS/subheader.css';

const SubHeader =()=> {


    return(
        <>
            <div className="sub_Header_div">
                <div className="sub_Header_Logo">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>
                        <a className="Main_routing" href="http://localhost:3000/">HONGSI</a>
                </div>

                <div className="sub_Header_routing">
                    <a className="sub_Header_Posting" href="http://localhost:3000/Main2">Gallery</a>
                </div>

                <div className="sub_Header_routing">
                    <a className="sub_Header_Posting" href="http://localhost:3000/Posting">Posting</a>
                </div>
                    
                <div className="sub_Header_routing">
                    <a className="sub_Header_Logout" href="http://localhost:4000/logout">Logout</a>   
                </div>
            </div>
        </>
    );
}

export default SubHeader;