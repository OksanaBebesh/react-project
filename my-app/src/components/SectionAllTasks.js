import React from "react"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LocalstorageDB from '../Classes/LocalstorageDB';
const contentData = LocalstorageDB.getLocalstorageData()

class TaskRow extends React.Component {
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
    render(){

        let contentElements = []
        if (contentData !== null) {
            contentData.forEach((task) => {
                contentElements.push(
                    <TaskRow
                        taskName={task.value}
                        dataAdd={task.dateAdd}
                        timeAdd={task.timeAdd}
                        key={task.id}
                        id={task.id}
                    />
                )
            })
        }
        return (
            <div>
                <Box sx={{ minWidth: 275, maxWidth: 500 }}>
                    <Card variant="outlined">{contentElements}</Card>
                </Box>
            </div>
        );
    }

}

export default SectionAllTasks
