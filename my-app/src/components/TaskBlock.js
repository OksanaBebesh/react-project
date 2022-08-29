import React, {useState} from 'react'

import LocalstorageDB from "../Classes/LocalstorageDB";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            localstorageData:LocalstorageDB.getLocalstorageData(),
            isEdit:false,
            idEditRow:''
        }
    }
    refreshLocalstorageData(){
        this.setState(
            {localstorageData: LocalstorageDB.getLocalstorageData()}
        )
    }
    addNewTask(){
        console.log('add new task')
        const nameOfTask = document.querySelector('#new-task').value
        LocalstorageDB.setNewDataRow(nameOfTask)
        LocalstorageDB.save()
        this.refreshLocalstorageData()
        document.querySelector('#new-task').value = ''
    }
    readmeTask(id){
        console.log('readme Task')
    }
    removeTask(id){
        console.log('Remove Item')
        LocalstorageDB.deleteItem(id)
        this.refreshLocalstorageData()
    }
    confirmEdit(id){
        const newData =  document.querySelector(".task-edit-input").value
        LocalstorageDB.updateData(id, newData)
        this.setState({
            localstorageData:LocalstorageDB.getLocalstorageData(),
            isEdit:false,
            idEditRow:''
        })
        this.hideEditTask()
    }
    editTask(id){
        this.setState({
            isEdit: true,
            idEditRow: id
        })
    }
    renderTaskNewBlock(){
        return(<TaskNew onClick={()=> this.addNewTask()} />)
    }
    hideEditTask(){
        this.setState({
            isEdit: false,
            idEditRow: ''
        })
    }
    generateUniqueKey(id, text){
        return text.concat('-',id);
    }
    renderAllTaskBlock(){
        let content = []

        LocalstorageDB.hasLocalStorageData() &&
        this.state.localstorageData.forEach((task) => {

            content.push(<TaskRow data={task} key={task.id} id={task.id} onEdit={()=> this.confirmEdit(task.id)} onCancel={() => this.hideEditTask()} isEdit={ task.id === this.state.idEditRow ? this.state.isEdit : null} />)
            content.push(<BtnRow key={this.generateUniqueKey(task.id,'Readme')} idtask={task.id} onClick={()=>this.readmeTask(task.id)} value="Readme" />)
            content.push(<BtnRow key={this.generateUniqueKey(task.id,'Remove')} idtask={task.id} onClick={()=>this.removeTask(task.id)} value="Remove" />)
            content.push(<BtnRow key={this.generateUniqueKey(task.id,'Edit')} idtask={task.id} onClick={()=> this.editTask(task.id)} value="Edit" />)

        })
        return(
            <div className="tasks-all-block">
                {content}
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.renderTaskNewBlock()}
                {this.renderAllTaskBlock()}
            </div>
        )
    }

}
const TaskNew = ({mainLabelText, taskName, mainLabelBtnValue, onClick}) => {
    return(
        <div className="section-add-task">
            <h1>{mainLabelText}</h1>
            <textarea id="new-task" placeholder="Enter new Task Name" title={taskName}/>
            <Button className="btn-add" variant="contained"  size="small" onClick={onClick} >{mainLabelBtnValue}</Button>
        </div>
    )
}

TaskNew.defaultProps = {
    mainLabelText: "Add new Task",
    mainLabelBtnValue:"Add New Task"
}
function TaskRow(props){
    const {data: {value}} = props
    const [taskName, setTaskName] = useState(value)
    const dateAdd = props.data.dateAdd
    const timeAdd = props.data.timeAdd
    const changeValue = (inputValue) => {
        setTaskName(inputValue)
    }
    const isEdit = props.isEdit
    if (isEdit)
    return (
        <div className="task-row" >
            <CardContent>
                <Typography variant="h5" component="div">{dateAdd}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{timeAdd}</Typography>
                <div className="block-edit">
                    <textarea id={props.data.id} className="task-edit-input" value={taskName} onChange={(event)=>changeValue(event.target.value)}/>
                    <div className="btn-row-direction">
                        <Button  variant="contained" size="small" onClick={ props.onEdit }>Ok</Button>
                        <Button  variant="contained"  size="small" onClick = { props.onCancel }>Cancel</Button>
                    </div>
                </div>
            </CardContent>
        </div>
    )
    else return (
        <div className="task-row" >
            <CardContent>
                <Typography variant="h5" component="div">{dateAdd}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{timeAdd}</Typography>
                <Typography variant="body2">{taskName}</Typography>
            </CardContent>
        </div>

    )
}
function BtnRow(props){
    return(
        <Button idtask={props.idtask} onClick={props.onClick} size="small">{props.value}</Button>
    )
}

export default TaskBlock