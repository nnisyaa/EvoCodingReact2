import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <>
            <div className="bkgimg">
            <nav>
                <div>
                    <img className="logo" src="" alt="" />
                    <h2>Directone</h2>
                    <p>DIRECTORY AND LISTENING</p>
                </div>
                <ul className="navList">
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
            <div className="header">
            <h1><span>Let's Explore Your </span><span className="awersome">Awesome City</span></h1>
            <p>Find great places to stay, eat, shop, or visit from local experts.</p>
            </div>
            </div>
            </>
        )
    }
}
export default Navbar