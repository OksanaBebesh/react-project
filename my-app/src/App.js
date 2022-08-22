import './App.css';
import React from "react"
import Header from "./components/Нeader"
import TaskBlock from "./components/TaskBlock";


class App extends React.Component {

  render(){
    return (<div className="container">
      <Header />
      <TaskBlock />
    </div>)
  }
}

export default App;
