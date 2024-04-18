import { Component} from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import './App.css'
import List from './List.jsx'
class App extends Component{
  render(){
    return (
      <>
        <Header />
        <Navbar />
        <List />
      </>
    )
  }
}

export default App
