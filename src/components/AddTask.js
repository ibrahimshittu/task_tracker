import React from 'react'
import { useState } from 'react'

const AddTask = () => {

    const [task, setTask] =  useState("");
    const [description, setDescription] =  useState("");
    const [reminder, setReminder] =  useState("");

    return (
        <form>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task"></input>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="add description"></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" ></input>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"></input>
        </form>
    )
}

export default AddTask
