import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <>
            <nav>
                <div></div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>LISTING</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
                <button>
                    <p>+ADD LISTING</p>
                </button>
            </nav>
            </>
        )
    }
}
export default Navbar