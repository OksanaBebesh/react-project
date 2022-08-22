import React  from "react";
import Button from '@mui/material/Button';
import LocalstorageDB from '../Classes/LocalstorageDB';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


class TaskRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: LocalstorageDB.getLocalstorageData()
        }
    }

    render() {
        const taskName = this.props.taskName;
        const dataAdd = this.props.dataAdd;
        const timeAdd = this.props.timeAdd;
        const id = this.props.id;

        return (
            <div className="task" >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {dataAdd}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {timeAdd}
                    </Typography>
                    <Typography variant="body2">
                        {taskName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={LocalstorageDB.showDescriptionBlock} size="small">Learn More</Button>
                    <Button idedit={id} onClick={LocalstorageDB.editItem} size="small">Edit</Button>
                    <Button idremove={id} onClick={LocalstorageDB.deleteItem} size="small">Remove</Button>
                </CardActions>
            </div>
        );
    }


}

class SectionAllTasks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshData: LocalstorageDB.getLocalstorageData()
        }
    }

    handleClick(event){

        console.log('handle click !')
        LocalstorageDB.deleteItem(event)

    }
    renderTaskRow(value, dateAdd, timeAdd, id){
        return (
            <TaskRow
                taskName={value}
                dataAdd={dateAdd}
                timeAdd={timeAdd}
                key={id}
                id={id}

                onClick = {()=> this.handleClick()}
            />
        )
    }

    render(){

        let contentElements = []
        if (this.props.values !== null) {
            this.props.values.forEach((task) => {
                contentElements.push(
                    this.renderTaskRow(task.value, task.dateAdd, task.timeAdd, task.id)
                )
            })
        }

        return (
            <div>
                <Box sx={{ minWidth: 275, maxWidth: 500 }} >
                    <Card variant="outlined" >{contentElements}</Card>
                </Box>
            </div>
        );
    }

}


class SectionAddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: LocalstorageDB.getLocalstorageData()
        }
        this.buttonAddClick = this.buttonAddClick.bind(this)
    }


    mainText = "Task Add"
    buttonAddClick(){
        console.log('Button click!')

        const nameOfTask = document.querySelector('#new-task').value
        LocalstorageDB.setNewDataRow(nameOfTask)
        LocalstorageDB.save()
        this.setState(
            {newTask: LocalstorageDB.getLocalstorageData()}
        )
    }

    render (){
        return (
            <div>
                <div className="section-add-task">
                    <h1>{this.mainText}</h1>
                    <input id="new-task" placeholder="Enter new Task Name"/>
                    <Button className="btn-add" variant="contained"  size="small" onClick={this.buttonAddClick} >Add New Task</Button>
                </div>
                    <SectionAllTasks values={this.state.newTask}  onClick={()=> this.setState(
                        {newTask: LocalstorageDB.getLocalstorageData()}
                    )}/>
            </div>
        )
    }

}



export default SectionAddTask