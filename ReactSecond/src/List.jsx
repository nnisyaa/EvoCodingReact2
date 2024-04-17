import { Component } from "react";
import ListElement from "./ListElement";
class List extends Component{
    render(){
        return(
            <>
            <div className="list">

            <ListElement src = "https://th.bing.com/th/id/OIP.LiVOAhIwMVkwLe3y_0z4FgHaHK?rs=1&pid=ImgDetMain "title = "Food & Drink" amount = "103"/>
            <ListElement src = "https://cdn-icons-png.flaticon.com/512/244/244989.png" title = "Hotels" amount = "40"/>
            <ListElement src = "" title = "Shopping" amount = "100"/>
            <ListElement src = "" title = "Beaty" amount = "36"/>
            <ListElement src = "" title = "Fitness" amount = "30"/>
            <ListElement src = "" title = "Bar & Club" amount = "12"/>
            </div>
            </>
        )
    }
}
export default List

