import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [task, setTask] =  useState("");
    const [description, setDescription] =  useState("");
    const [reminder, setReminder] =  useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task) {
            alert("Please enter a task");
            return;
        }

        onAdd({
            task,
            description,
            reminder
        });
        setTask("");
        setDescription("");
        setReminder(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control" >
                <label>Task</label>
                <input type="text" placeholder="add task" value={task} onChange={(e) => setTask(e.target.value)} ></input>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="add description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"></input>
        </form>
    )
}

export default AddTask
