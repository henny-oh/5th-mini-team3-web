import React from 'react';


const login = () =>(
         

    
      
      <><div style={{ textAlign: "center" }}>
          <label style={{
            fontsize:"40px",
            color:"#767676",
            font: "normal normal 900 40px/59px Noto Sans CJK KR",
            letterspacing: "-1px",
            opacity: 1,
            }}>
              로그인 
          </label>
          <div style={{
            fontsize:"22px",
            marginTop: "75px"}}>
            <div style={{
              color: "#BBBBBB",
              }}>
              <input style={{
                    border: "none",
                    borderBottom: "1px solid #767676",
                    font: "normal normal normal 22px/33px Noto Sans CJK KR",
                    letterspacing: "-0.55px",
                    width: "575px",
                    height: "75px",}} 
                type="text" 
                placeholder="아이디"
                name="id" 
                id="id" /> <br />
              <input style={{
                    border: "none",
                    borderBottom: "1px solid #767676",
                    font: "normal normal normal 22px/33px Noto Sans CJK KR",
                    letterspacing: "-0.55px",
                    width: "575px",
                    height: "75px",}}
                type="password" 
                placeholder="비밀번호" 
                name="pw" 
                id="pw" /> <br />
          </div>
          <button style={{
            width: "575px",
            height: " 75px",
            backgroundColor: "#767676",
            border: "none",
            borderRadius: "10px",
            opacity:1,
            color: "#FFFFFF",
            font: "normal normal bold 22px/33px Noto Sans CJK KR",
            marginTop: "75px"
            }}> 
            로그인
            </button>
          </div>
          <p style={{
                fontsize:"18px",
                font: "normal normal normal 18px/27px Noto Sans CJK KR",
                marginTop: "75px"
                }}>
            <span style={{
                letterspacing: "-0.45px",
                color: "#BBBBBB"}}> 
                아직 회원이 아니신가요? 
            </span>
            <span style={{
              letterspacing: "-0.45px",
              color: "#707070"}}>
              회원가입
            </span>
          </p>
      </div>
    </>
  
);


export default login;