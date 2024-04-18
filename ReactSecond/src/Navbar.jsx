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

            <div className="form">
                <form action="">
                    <input placeholder="What are you looking for?" type="text" />
                    <input placeholder="Search Location" type="text" />
                    <input placeholder="All categories" type="text" />
                    <button>
                        <img src="" alt="" />
                        <p>Search</p>
                    </button>
                </form>
            </div>





            </div>
            </>
        )
    }
}
export default Navbar