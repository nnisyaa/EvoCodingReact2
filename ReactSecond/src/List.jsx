import { Component } from "react";
import ListElement from "./ListElement";
class List extends Component{
    render(){
        return(
            <>
            <div className="list">
            <ListElement src = "https://cdn1.vectorstock.com/i/thumb-large/58/05/burger-silhouette-glyph-fast-food-icon-vector-38185805.jpg"title = "Food & Drink" amount = "103"/>
            <ListElement src = "https://media.istockphoto.com/id/1248653394/vector/hotel-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hSpVdqErnXGMwbre7A_UUaeV_qU8L0THnme9Dm5Lsdk=" title = "Hotels" amount = "40"/>
            <ListElement src = "https://th.bing.com/th/id/OIP.ZfEkLmO8m_NWqZOo5TssZgHaHa?w=1253&h=1253&rs=1&pid=ImgDetMain" title = "Shopping" amount = "100"/>
            <ListElement src = "https://i.etsystatic.com/21818719/r/il/5564f5/2311615041/il_fullxfull.2311615041_1wtc.jpg" title = "Beaty" amount = "36"/>
            <ListElement src = "https://th.bing.com/th/id/OIP.Lg9XG43grw1vb90lTi3VowHaHa?rs=1&pid=ImgDetMain" title = "Fitness" amount = "30"/>
            <ListElement src = "https://thumbs.dreamstime.com/b/bar-counter-interior-icon-outline-vector-cafe-table-beer-food-bar-counter-interior-icon-outline-vector-cafe-table-281661187.jpg" title = "Bar & Club" amount = "12"/>
            </div>


            <div className="list second-line">
            <ListElement src = "https://cdn.vectorstock.com/i/preview-1x/35/31/game-console-icon-vector-38303531.jpg"title = "Games" amount = "103"/>
            <ListElement src = "https://static-m2-prod.aaw.com/media/wysiwyg/assets/jysk/2022/jysk-kw-stores.png" title = "Places" amount = "40"/>
            <ListElement src = "https://media.istockphoto.com/id/1345985705/vector/circus-tent-with-flag-amusement-park-concept-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=yafq6txB935VjGS95bLiPCPF9cKktpFOXOIBnZ1JNrQ=" title = "Circus" amount = "100"/>
            <ListElement src = "https://as1.ftcdn.net/jpg/01/58/81/24/220_F_158812481_io4ZzMAjzM19tRX8RhE4Wxq0y765Cq1l.jpg" title = "Theater" amount = "36"/>
            <ListElement src = "https://vidamedicalclinic.org/wp-content/uploads/2023/07/Vida-Sports-Physicals-_-Icon-e1689185063527.png" title = "Sports" amount = "30"/>
            <ListElement src = "https://greenteacher.com/wp-content/uploads/2022/01/Health-150x150.png" title = "Health" amount = "12"/>
            </div>
            </>
        )
    }
}
export default List

