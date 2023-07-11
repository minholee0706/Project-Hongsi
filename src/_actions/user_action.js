
import { LOGIN_USER } from "../_actions/types.js";




export function loginUser(dataTosubmit, props){
    const request = 
        fetch("/login", { //auth 주소에서 받을 예정
        method: "post", // method :통신방법
        headers: {      // headers: API 응답에 대한 정보를 담음
          "content-type": "application/json",
        },
        body: JSON.stringify(dataTosubmit), //userData라는 객체를 보냄
      })
      
        // .then((res) => res.data)
        .then((res) => {return res.json()})
        
        .then((json) => {        
            
            console.log(json)
          if(json.isLogin==="True"){
            props.setMode("WELCOME");
              
          }
          else {
            alert(json.isLogin)
          }

        });
    
        return {
            type : LOGIN_USER,
            payload : request
        }
}