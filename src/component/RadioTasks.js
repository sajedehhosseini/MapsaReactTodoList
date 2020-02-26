import React from 'react'

export default function RadioTasks(props) {
    return (
        <>
            <div className=" input-group p-3">
                <div className="input-group-prepend ">
                    <div className="input-group-text p-0 ml-3 rounded form-check">
                        <input type="radio" className='ml-2' aria-label="Radio button for following text input" name="radioTask"
                            id="alltasks" value="All" onClick={(event) => props.handleChangeOption(event)}  />
                        <label className="form-check-label mr-2 ml-2 bg-transparent border-0"
                            aria-label="Text input with checkbox" htmlFor="alltasks" >All Tasks</label>
                    </div>
                    <div className="input-group-text p-0 ml-3 rounded form-check">
                        <input type="radio" className='ml-2' aria-label="Radio button for following text input" name="radioTask"
                            id="undoneTasks" value="UnDone" onClick={(event) => props.handleChangeOption(event)} />
                        <label className="form-check-label mr-2 ml-2 bg-transparent border-0"
                            aria-label="Text input with checkbox" htmlFor="undoneTasks" >UnDone Tasks</label>
                    </div>
                    <div className="input-group-text p-0 ml-3 rounded form-check">
                        <input type="radio" className='ml-2' aria-label="Radio button for following text input" name="radioTask"
                            id="doneTasks" value="Done" onClick={(event) => props.handleChangeOption(event)} />
                        <label className="form-check-label mr-2 ml-2 bg-transparent border-0"
                            aria-label="Text input with checkbox" htmlFor="doneTasks">Done Tasks</label>
                    </div>
                </div>


            </div>
        </>
    )
}
