import './App.css';
import React from "react"
import Header from "./components/Нeader"
import SectionAddTask from "./components/SectionAddTask"
import SectionAllTasks from "./components/SectionAllTasks"
class App extends React.Component {
  render(){
    return (<div className="container">
      <Header />
      <SectionAddTask />
      <SectionAllTasks />
    </div>)
  }
}

export default App;
