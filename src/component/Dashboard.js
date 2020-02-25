import React, { Component } from 'react'
import FilterTasks from './FilterTasks'
import InputTasks from './InputTasks'
import ShowTime from './ShowTime'
import RadioTasks from './RadioTasks'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            currentDate: new Date(),
            tasks: [],
            showlist: 'All'
        }

        this.newinput = React.createRef();
        this.editinput = React.createRef();

    }
    createTaskDate(date) {
        const createdate = String(date.getFullYear()) + "/" +
            +String(date.getMonth()).padStart(2, '0') + "/" +
            String(date.getDate()).padStart(2, '0') + " " +
            String(date.getHours()).padStart(2, '0') + ":" +
            String(date.getMinutes()).padStart(2, '0')
        return createdate


    }
    addTask = () => {
        const val = this.newinput.current.value;
        console.log(val);
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: new Date().getTime(),
                    title: val,
                    done: false,
                    editflg: false,
                    createDate: this.createTaskDate(new Date()),
                }
            ],
            text: ""
        })
    }
    changeInput = (e)=>{
console.log(e.current.value);

    }
    searchTask = () => {
        const val = this.newinput.current.value;
        console.log(val);
        // <SearchTask/>
    }
    editTask = (id) => {
        this.setState(state => {
            tasks: state.tasks.map(todo => {
                if (todo.id == id) {
                    todo.editflg = !todo.editflg
                }
                return todo
            })
        })
        console.log('edited');
        console.log(this.state.tasks);

    }
    deleteTask(id) {
        console.log(id);

    }
    doneTask = (id) => {
        this.setState(state => {
            tasks: state.tasks.map(todo => {
                if (todo.id == id) {
                    todo.done = !todo.done
                }
                return todo
            })
        })
        console.log('edited');
        console.log(this.state.tasks);
    }
    newEditInput() {
        console.log('edit');

    }
    updateTask = (e, id) => {
        const val = e.current.value;
        console.log(val);
        console.log(id);

        this.setState(state => {
            tasks: state.tasks.map(todo => {
                if (todo.id == id) {
                    todo.title = val;
                    todo.createDate = this.createTaskDate(new Date());
                    todo.editflg = !todo.editflg

                }
                return todo
            })
        })
        console.log(this.state.tasks);

    }
    ChangeOption = (e) => {
        this.setState({
            showlist: e.target.value
        })
    }
    searchTask() {
        const val = this.newinput.current.value;
        console.log(val);
        
    }
    render() {
        console.log('render');

        return (
            <>
                <div className='row h1'>
                    <>
                        TodoList
                   </>
                </div>
                <div className='row'>
                   <InputTasks 
                   data={this.state} 
                   handleAddTask={(e)=>this.addTask(e)}
                   handleSearchTask={(e)=>this.searchTask(e)}
                   handleChangeEvent={this.changeInput}
                   />
                    <ShowTime />

                </div>
                <RadioTasks handleChangeOption={this.ChangeOption} />
                <div className='row h2 d-flex flex-column p-3'>

                    <FilterTasks data={this.state}
                        handledoneindex={this.doneTask}
                        handledelindex={this.deleteTask}
                        handleeditindex={this.editTask}
                        handleupdateindex={this.updateTask}
                    />
                </div>

            </>
        )
    }
}
