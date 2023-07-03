import React, { useState } from "react";

const Dog_Pic_Data =()=>{
    
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState("");
    const [dogSex, setDogSex] = useState("");
    const [id, setId] = useState("");
    const [dogPic, setDogPic] = useState({
        file : "",
        fileName:"",
    });

    const handleFormSubmit =(e) =>{
        e.preventDefault()
        addDogData()
    }

    const handleFileChange =(e) =>{//file[0]이게 아니라 files[0] 이거임
        setDogPic({
            file:e.target.files[0],
            fileName:e.target.value
        })
        
    }

  const addDogData =(e)=>{
    console.log(dogPic)
    const formData = new FormData();
    formData.append('name', dogName);
    formData.append('age', dogAge);
    formData.append('sex', dogSex);
    formData.append('username', id);
    formData.append('dogPic', dogPic);
    
    for( let key of formData.keys()){
        console.log(JSON.stringify(`${key} : ${formData.get(key)}`))
    }
    
    fetch('/dogData', formData, {
        method : "post",
        headers :{
            'content-type': 'multipart/form-data',
        },
        data : formData,
    })
    .then((response) => {
        console.log({ response });
      
      });
   
 
    
  }

 
    return (
        <>
            <form onSubmit={handleFormSubmit}>
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
                    <input className="dog_data" type="text" placeholder="반려인 아이디" onChange={event => {setId(event.target.value);}} />
                </p>
                <p>
                    <input className="dog_data" type="file" onChange={handleFileChange} />
                </p>
                {/* <button onClick={()=>Img_upload()}>123</button> */}
                <p><button className="btn" type="submit">추가하기</button></p>
                <button onClick={()=> console.log(dogAge)}>123</button>
            </form>
        </>

    )
};


export default Dog_Pic_Data;