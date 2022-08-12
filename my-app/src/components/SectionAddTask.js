import React from "react";
import Button from '@mui/material/Button';
import LocalstorageDB from '../Classes/LocalstorageDB';

class SectionAddTask extends React.Component {
    mainText = "Task Add"
    buttonAddClick(){
        console.log('Button click!')

        const nameOfTask = document.querySelector('#new-task').value
        LocalstorageDB.save(nameOfTask)

       //  let newData = {'id': new Date().getUTCMilliseconds(), 'value': nameOfTask, 'timeAdd': new Date().toLocaleTimeString(), 'dateAdd': new Date().toLocaleDateString('en-GB')}
       //  let localStorageData = []
       //  if (JSON.parse(localStorage.getItem('listTask')) !== null) {
       //      localStorageData = (JSON.parse(localStorage.getItem('listTask')))
       //     console.log(localStorageData)
       // }
       //  localStorageData.push(newData)
       //
       //  localStorage.setItem('listTask',JSON.stringify(localStorageData))
    }
    render (){
        return (
            <div className="section-add-task">
                <h1>{this.mainText}</h1>
                <input id="new-task" placeholder="Enter new Task Name"/>
                <Button className="btn-add" variant="contained"  size="small" onClick={this.buttonAddClick} >Add New Task</Button>
            </div>)
    }

}

export default SectionAddTask