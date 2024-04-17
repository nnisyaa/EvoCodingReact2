import { Component} from 'react'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import './App.css'
import List from './List.jsx'
import H1 from './H1.jsx'
class App extends Component{
  render(){
    return (
      <>
        <Header />
        <Navbar />
        <H1 />
        <List />
      </>
    )
  }
}

export default App
