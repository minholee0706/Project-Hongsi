import React, { useEffect, useState } from "react";
import SubHeader from "./subheader";
import { useSelector } from "react-redux/es/hooks/useSelector";


const MyPage =()=>{
    const [myDogData, setMyDogData] = useState("");
    const state_userId = useSelector( (state) => state);    
    const userId = state_userId.user.loginSuccess.userId;

      useEffect(() => {
          fetch("/api/dogData")
          .then((res) => res.json())
          .then((json)=> {
              console.log(json);
              setMyDogData(json);
          })
      },[])
      

    return(
        <>
            <SubHeader />
            {
                myDogData && myDogData.filter(data => data.username === userId).map((data,i) =>(
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
        </>
    )
}

export default MyPage;