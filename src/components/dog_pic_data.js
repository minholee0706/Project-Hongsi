import React, { useState } from "react";
import './CSS/dog_pic_data.css';
import { useSelector } from "react-redux/es/hooks/useSelector";

const Dog_Pic_Data =()=>{
    const state_userId = useSelector( (state) => state);    
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState("");
    const [dogSex, setDogSex] = useState("");
    const [dogText, setDogText] = useState("");
    const [dogPic, setDogPic] = useState({
        file : "",
    });
    const [dogPicPreview, setDogPicPreview] = useState("");

    const handleFormSubmit =(e) =>{
        e.preventDefault()
        addDogData();
        alertSubmit();
    }

    const handleFileChange =(e) =>{//file[0]이게 아니라 files[0] 이거임
        setDogPic( e.target.files[0]
            // file:
            // fileName:e.target.value
        )
        encodeFileToBase64(e.target.files[0]);
    }

    const alertSubmit =()=>{
        alert("포스팅이 완료되었어요!")
    }

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setDogPicPreview(reader.result);
            resolve();
          };
        });
      };

  const addDogData =(e)=>{
    console.log(dogPic)
    const formData = new FormData();
    formData.append('name', dogName);
    formData.append('age', dogAge);
    formData.append('sex', dogSex);
    formData.append('username', state_userId.user.loginSuccess.userId);
    formData.append('dogText', dogText);
    formData.append('file', dogPic);
    
    for( let key of formData.keys()){
        console.log(JSON.stringify(`${key} : ${formData.get(key)}`))
    }
    
    fetch('/dogData', {
        method : "post",
        cache : 'no-cache',
        body : formData,
    })
    .then((response) => {
        console.log({ response });
        console.log(dogPic)
      });
    
  }
    
    
    return (
        <>
            <div className="dogData_DIV">
                <div className="dogData_info">
                 
                    <form className="dogData_submit" onSubmit={handleFormSubmit}>
                    <h1>Posting</h1>
                        <p>
                            <input className="dog_data" type="text" placeholder="반려동물 이름" onChange={event => {setDogName(event.target.value);}} />
                        </p>
                        <p>
                            <input className="dog_data" type="text" placeholder="반려동물 나이" onChange={event => {setDogAge(event.target.value);}} />
                        </p>
                        <p>
                            <input className="dog_data" type="text" placeholder="반려동물 성별" onChange={event => {setDogSex(event.target.value);}} />
                        </p>
                        <p>
                            <input className="dog_data" type="text" placeholder="반려인 ID" value={state_userId.user.loginSuccess.userId} />
                        </p>
                        <p>
                            <input className="dog_data" type="text" placeholder="반려동물 소개" onChange={event => {setDogText(event.target.value);}} />
                        </p>
                        <p>
                            <input className="dog_data" type="file" name="file" onChange={handleFileChange} />
                        </p>
                        
                        <p><button className="btn" type="submit" >포스팅하기!</button></p>
                    </form>
                </div>

                <div className="dogData_preview">
                
                    <div className="dogData_preview_box">
                    <div className="dogData_preview_h1"><h1>PreView</h1></div>
                        <div className="get_Data_username">
                          { state_userId.user.loginSuccess.userId }
                        </div>
                        <img src={dogPicPreview} className="get_Data_dogPic"/>
                        <div>
                            {dogName && dogName ? dogName : "이름" }, 
                            {dogAge && dogAge ? dogAge + "살" : "나이" }, 
                            {dogSex && dogSex ? dogSex : "성별" }    
                        </div>
                        <div className="get_Data_Text">
                            {dogText && dogText ? dogText : "소개" }
                        </div>
                        </div>
                </div>
            </div>
        </>

    )
};


export default Dog_Pic_Data;