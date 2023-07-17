import React, { useEffect, useState } from "react";
import './CSS/getData.css';


const GetData =()=> {
    const [dogData, setDogData] = useState();

    useEffect(() => {
        fetch("/api/dogData")
        .then((res) => res.json())
        .then((json)=> {
            console.log(json);
            setDogData(json);
        })
    },[])

   
    return (
        <>
            
            <div className="get_Data_div">
            {
                dogData && dogData.map((data,i) =>(
                    <div key={i} className="get_Data">
                        <div className="get_Data_in">
                            <div className="get_Data_username">{data.username}</div>
                            <img src={data.dogPic} className="get_Data_dogPic"/>
                            <div>{data.age}살 , {data.name} , {data.sex}</div>
                            <div className="get_Data_Text">{data.dogText}</div>

                        </div>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default GetData;