import React from "react"
import Button from '@mui/material/Button';



const contentData = JSON.parse(localStorage.getItem('listTask'))

class TaskRow extends React.Component {
    render() {
        const taskName = this.props.taskName;
        console.log(taskName)
        const dataAdd = this.props.dataAdd;
        const timeAdd = this.props.timeAdd;
        const id = this.props.id;

        return (
            <div id={id}>
                <p><span>{dataAdd}</span><span>{timeAdd}</span></p>
                <p>{taskName}</p>

                <div>
                    <Button size="small">Edit</Button>
                    <Button size="small">Remove</Button>
                </div>
            </div>
        );
    }
}

class SectionAllTasks extends React.Component{
    render(){
        let contentElements = []
        console.log(contentData)
        if (contentData !== null) {
            contentData.forEach((task) => {
                console.log(task.value)
                contentElements.push(
                    <TaskRow
                        taskName={task.value}
                        dataAdd={task.dateAdd}
                        timeAdd={task.timeAdd}
                        id={task.id}
                    />
                )
            })
        }
        return (
            <div>
                    <div>{contentElements}</div>
            </div>
        );
    }

}

export default SectionAllTasks
