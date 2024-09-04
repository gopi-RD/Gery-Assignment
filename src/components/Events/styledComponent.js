
import styled from "styled-components"

import {Link} from "react-router-dom"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color:#000;
  height: 100vh;
  ` 
  
  export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #4CAF50;
    ` 

export const EventListItems=styled.ul`
list-style-type: none;
padding-left:0px;
padding:40px;
border-radius:10px;
width:40%;


`
export const EventItem=styled.li`
 background-color:#fff;
 border-radius:8px;
 padding-left:20px;
 padding-right:20px;
 font-size:20px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-bottom:10px;
`

export const EventTitle=styled.h2`
 font-size:30px;
 color:#4CAF50;
 padding:0px;
 `
export const EventDate=styled.p`
 font-size:20px;
 color:#88f;
 padding:0;

`
export const Heading=styled.h1`
color:blue;
font-size:34px;
font-weight:500;
font-family:"Roboto";
margin-bottom:0px;
color:white;
margin-bottom:20px;
`
export const LoadingContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EventLink=styled(Link)`
text-decoration: none;

`