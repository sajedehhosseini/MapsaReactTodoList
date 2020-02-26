import React, { useRef } from 'react'

export default function ShowTask(props) {
    const editinput = useRef()
   

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-success border-success">
                        <input type="checkbox" aria-label="Checkbox for following text input" onClick={props.handledone} 
                        checked={props.todo.done?'checked':'' } />
                    </div>
                </div>
                {
                    props.todo.editflg &&
                    <>
                        <input type="text" className="form-control border-right-0 border-success border-left-0 pl-5" aria-label="Text input with checkbox" placeholder={props.todo.title} ref={editinput} />
                        <div className="input-group-prepend">
                            <button className="btn btn-success pr-4 pl-4" type="button" onClick={() => props.handleupdate(editinput)}>
                                <i className='fa fa-send'></i>
                            </button>
                            <button className="btn btn-success pr-4 pl-4" type="button" onClick={props.handleedit}>
                                <i className='fa fa-times'></i>
                            </button>
                        </div>
                    </>
                }
                {
                    props.todo.editflg ||
                    <>
                    <label className="form-control border-right-0 border-success border-left-0 pl-5" aria-label="Text input with checkbox" >
                        {props.todo.title}
                    </label>
                    <div className="input-group-prepend">
                    <span className="input-group-text bg-light border-top border-bottom  border-left-0 border-success pl-5 pr-5">
                        create time : {props.todo.createDate} , dead time : {props.todo.createDate}
                    </span>
                    <button className="btn btn-success pr-4 pl-4" type="button" onClick={props.handleedit}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className="btn btn-success pr-4 pl-4 rounded-right" type="button" onClick={props.handledel}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
                    </>
                }
               
            </div>

        </div>
    )
}
