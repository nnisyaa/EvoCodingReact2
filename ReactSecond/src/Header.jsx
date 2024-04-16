import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <>
            <header>
                <div><span>FreeCall</span><span> +1 234 456 78910</span></div>
                <ul>
                    <li>FACEBOOK</li>
                    <li>TWITTER</li>
                    <li>DRIBBBLE</li>
                </ul>
            </header>
            </>
        )
    }
}
export default Header