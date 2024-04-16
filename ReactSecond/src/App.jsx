import { Component} from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import './App.css'

class App extends Component{
  render(){
    return (
      <>
        <Header />
        <Navbar />
      </>
    )
  }
}

export default App
