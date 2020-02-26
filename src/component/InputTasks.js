import React, { useRef } from 'react'

export default function InputTasks(props) {
    const newinput = useRef()

    return (
        <div>
            <div className="input-group ">
                
                <input type="text" className="form-control border-success pr-5 pl-5"
                    value={props.data.text} ref={newinput} aria-label="Recipient's username"
                    onChange={() => props.handleChangeEvent(newinput)} aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-success pr-5 pl-5" type="button" onClick={() => props.handleAddTask(newinput)}>Add</button>
                    <button className="btn btn-success pr-5 pl-5" type="button" onClick={() => props.handleSearchTask(newinput)}>Search</button>
                </div>
            </div>
        </div>
    )
}
