import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './CSS/dbLogin.css'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';

// import './CSS/dbLogin.css';

function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  return <>

    <div className="form">
      <p><input className="login" type="text" name="username" placeholder="아이디를 입력해주세요." onChange={event => {
        setId(event.target.value);
      }} /></p>
      <p><input className="login" type="password" name="pwd" placeholder="비밀번호를 입력해주세요" onChange={event => {
        setPassword(event.target.value);
      }} /></p>

      <p><input className="btn" type="submit" value="로그인" onClick={() => {
        const userData = {
          userId: id,
          userPassword: password,
        };
        dispatch(loginUser(userData, props));
        
        
      }} />
      <button className="btn_makeID" onClick={() => {props.setMode("SIGNIN");}}>회원가입</button>
      </p>
      
    </div>

    {/* <p><button onClick={() => {
      props.setMode("SIGNIN");
    }}>회원가입</button></p> */}
  </> 
}


function Signin(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return <>

    <div className="form">
      <p><input className="login" type="text" placeholder="아이디를 입력해주세요" onChange={event => {
        setId(event.target.value);
      }} /></p>
      <p><input className="login" type="password" placeholder="비밀번호" onChange={event => {
        setPassword(event.target.value);
      }} /></p>
      <p><input className="login" type="password" placeholder="비밀번호 확인" onChange={event => {
        setPassword2(event.target.value);
      }} /></p>

      <p><input className="btn" type="submit" value="회원가입" onClick={() => {
        const userData = {
          userId: id,
          userPassword: password,
          userPassword2: password2,
        };
        fetch("/signin", { //signin 주소에서 받을 예정
          method: "post", // method :통신방법
          headers: {      // headers: API 응답에 대한 정보를 담음
            "content-type": "application/json",
          },
          body: JSON.stringify(userData), //userData라는 객체를 보냄
        })
          .then((res) => res.json())
          .then((json) => {
            if(json.isSuccess==="True"){
              alert('회원가입이 완료되었습니다!')
              props.setMode("LOGIN");
            }
            else{
              alert(json.isSuccess)
            }
          });
      }} /></p>
    </div>

    <p>로그인화면으로 돌아가기  <button className='btn_makeID' onClick={() => {
      props.setMode("LOGIN");
    }}>로그인</button></p>
  </> 
}

function DB_Login() {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("/authcheck")
      .then((res) => res.json())
      .then((json) => {        
        if (json.isLogin === "True") {
          setMode("WELCOME");
        }
        else {
          setMode("LOGIN");
        }
      });
  }, []); 

  let content = null;  

  if(mode==="LOGIN"){
    content = <Login setMode={setMode}></Login> 
  }
  else if (mode === 'SIGNIN') {
    content = <Signin setMode={setMode}></Signin> 
  }
  else if (mode === 'WELCOME') {
    navigate("/Main2");
    // content =<>
    // <h2>메인 페이지에 오신 것을 환영합니다</h2>
    // <p>로그인에 성공하셨습니다.</p>
    // <div><a href="http://localhost:3000/Main2">구경하러가기</a> </div>
    // <a href="http://localhost:4000/logout">로그아웃</a>   
    // </>
  }

  return (
    <>
      <div className="background">
        {content}
      </div>
    </>
  );
}

export default DB_Login;