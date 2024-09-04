import styled from "styled-components"

import { Link } from "react-router-dom"

export const HeaderContainer=styled.header`
background-color: #f5f5f5;
margin:0px;
position:fixed;
width:100%;
top:0;
`
export const NavContainer=styled.nav`
   display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
`

export const WebsiteLogo=styled.h1`
    font-family:monoton;
    font-size:24px;
    color: #333;
`
export const NavLinksItems=styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    align-items: center;
`

export const NavLinkItem=styled.li`
margin-left: 20px;
`

export const NavLink=styled(Link)`
    color: #333;
    text-decoration: none;
`
