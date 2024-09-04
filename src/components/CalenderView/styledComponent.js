import styled from "styled-components"

export const BgContainer=styled.div`
background-image:linear-gradient(#ffafbd,#ffc3a0);
height:90vh;
margin:0px;
padding-top:60px;
`
export const Container=styled.div`
width:90%;
margin:auto;
display:flex;
justify-content:center;
`
export const Heading=styled.h1`
color:#000000;
font-size:34px;
font-weight:500;
font-family:"Roboto";
margin-bottom:0px;
`
export const SelectedDate=styled.p`
color:#000000;
font-size:24px;
font-weight:400;
font-family:"Roboto";
`
export const FormContainer=styled.form`
background-color:#ffffff;
padding:20px;
border-radius:12px;
box-shadow:4px 4px 4px 4px #f22fff;
display:flex;
flex-direction:column;
width:300px;
`
export const LabelText=styled.label`
 font-size:18px;
 font-weight:500;
 font-family:"Roboto";
 margin-bottom:10px;    
 color:#333;

`
export const CustomInput=styled.input`
 padding:10px;
 margin-bottom:20px;
 border:1px solid #ccc;
 border-radius:8px;
 font-size:16px;
 font-family:"Roboto";

 `
 export const Textarea=styled.textarea`
padding:10px;
 margin-bottom:20px;
 border:1px solid #ccc;
 border-radius:8px;
 font-size:16px;
 font-family:"Roboto";
 `

 export const CustomButton=styled.button`
 background-color:blue;
 border:none;
 color:#fff;
 padding:10px 20px;
 border-radius:8px;
 margin:10px;

 `
 export const ErrorMessage=styled.p`
 color:red;
 font-size:14px;
 font-weight:400;
 font-family:"Roboto";
 `
export const PopupContainer=styled.div`
background-color: rgba(0,0,0,.5);
margin-top:60px;
 position:fixed; 
 left:0;
 right:0;
 top:0;
 bottom:0;
display:flex;
flex-direction: column;
justify-content:center;
 align-items:center;
`

export const EventListItems=styled.ul`
list-style-type: none;
padding-left:0px;
margin-left:100px;
margin-top:100px;
width:460px;
max-height:600px;
overflow:auto;
padding:20px;
`
export const EventList=styled.li`
 margin-bottom:10px;
 background-color:#fff;
 border-radius:8px;
 padding:10px;
 font-size:16px;

`
export const CalenderContainer=styled.div`
display:flex;
flex-direction:column;
`
export const ButtonsContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
`