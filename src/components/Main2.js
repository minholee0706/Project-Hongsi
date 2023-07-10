import React from "react";
import './CSS/Main2.css';
import Dog_Pic_Data from "./dog_pic_data";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SubHeader from "./subheader";
import GetData from "./getData";


const Main2 =()=>{


    return(

        <>
          <SubHeader />
          <GetData />
        </>
    )
}


export default Main2;