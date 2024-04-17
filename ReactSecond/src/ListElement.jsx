import { Component } from "react";



class ListElement extends Component{
    render(){
        const {src, title, amount} = this.props 
        return(
            <>
            <div style={
                {
                    height : "218px",
                    width : "205px",
                    backgroundColor : "white",
                    borderRadius : "5px",
                }
            }>
                <div className="icon-container"><img className="icon" src={src} alt="" /></div>
                <p className="cartText">{title}</p>
                <div className="spans">
                    <span>{amount}</span>
                    <span>LISTINGS</span>
                </div>
            </div>
            </>
        )
    }
}
export default ListElement