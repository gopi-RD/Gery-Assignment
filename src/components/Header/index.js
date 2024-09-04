


import {HeaderContainer,NavContainer,WebsiteLogo,NavLinksItems,NavLinkItem,NavLink} from "./styledComponent"

const Header=()=>(
        <HeaderContainer > 
            <NavContainer >
                <WebsiteLogo>Calender</WebsiteLogo>
                <NavLinksItems>
                    <NavLinkItem>  <NavLink to="/">Calender</NavLink></NavLinkItem>
                    <NavLinkItem>  <NavLink to="/events">Events</NavLink></NavLinkItem>
                    
                </NavLinksItems>
            </NavContainer>
        </HeaderContainer>
)

export default Header;
