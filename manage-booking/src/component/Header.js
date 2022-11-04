import React from "react";
import logo from '../../src/asset/img/logo.svg';
import './Header.scss';


class Header extends React.Component{
    render(){
        return(
            <>
                <img src={logo} className="logo" alt="logo"/>
                <p>Header</p>
            </>
        )
    }
}
export default Header;