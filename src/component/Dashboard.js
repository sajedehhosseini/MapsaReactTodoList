import React, { Component } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import FilterTasks from './FilterTasks'
import InputTasks from './InputTasks'
import ShowTime from './ShowTime'
import RadioTasks from './RadioTasks'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     text: '',
        //     currentDate: new Date(),
        //     tasks: [],
        //     showlist: 'All',
        //     searchin: ''
        // }
        this.getFromLocalStorage()
        this.newinput = React.createRef();
        this.editinput = React.createRef();
        this.currentTime()

        
    }
    // componentDidMount(){
    //     reactLocalStorage.setObject('todolist', this.state);
    // }
    componentDidUpdate(){
        reactLocalStorage.setObject('todolist', this.state);

    }
    getFromLocalStorage(){
        const obj= reactLocalStorage.getObject('todolist');
        console.log(obj);
        if(Object.keys(obj).length === 0 && obj.constructor === Object) {
            this.state = {
                text: '',
                currentDate: new Date(),
                tasks: [],
                showlist: 'All',
                searchin: ''
            }
        }
        else {
            this.state=obj

        }
    }
    createTaskDate(date) {
        const createdate = String(date.getFullYear()) + "/" +
            +String(date.getMonth()).padStart(2, '0') + "/" +
            String(date.getDate()).padStart(2, '0') + " " +
            String(date.getHours()).padStart(2, '0') + ":" +
            String(date.getMinutes()).padStart(2, '0')
        return createdate


    }
    addTask = (e) => {
        const val = e.current.value;
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
            text: "",
            searchin: ''

        })
        // this.setToLocalStorage()

    }
    changeInput = (e) => {
        this.setState({ text: e.current.value })
    }
    searchTask = (e) => {
        this.setState({ searchin: e.current.value })

    }
    editTask = (id) => {
        this.setState(state => {
          return{
            tasks: state.tasks.map(todo => {
                if (todo.id == id) {
                    todo.editflg = !todo.editflg
                }
                return todo
            })
          }   
        })
        console.log('edited');
        console.log(this.state.tasks);

    }
    deleteTask = (id) => {
        console.log(id);
        this.setState(state => {
            return {
                tasks: this.state.tasks.filter(todo => {
                    if (todo.id !== id) {
                        return todo
                    }
                    return null
                }).map(todo => {
                    console.log(todo);

                    return todo

                })
            }
        })
        console.log(this.state);

    }
    doneTask = (id) => {
        this.setState(state => {
          return{
            tasks: state.tasks.map(todo => {
                if (todo.id == id) {
                    todo.done = !todo.done
                }
                return todo
            })
          }  
        })
        console.log('edited');
        console.log(this.state.tasks);
    }
    updateTask = (e, id) => {
        const val = e.current.value;
        console.log(val);
        console.log(id);

        this.setState(state => {
            return{
                tasks: state.tasks.map(todo => {
                    if (todo.id == id) {
                        todo.title = val;
                        todo.createDate = this.createTaskDate(new Date());
                        todo.editflg = !todo.editflg
    
                    }
                    return todo
                })
            }
        })
        console.log(this.state.tasks);

    }
    ChangeOption = (e) => {
        this.setState({
            showlist: e.target.value
        })
    }
    currentTime() {

            this.setState({ currentDate: this.createTaskDate(new Date()) })

// return this.currentTime(date)
    }
    render() {
        
        return (
            <>
                <div className='row h1'>
                    <>
                        TodoList
                   </>
                </div>
                <div className='row'>
                    <div className='col-10'>

                        <InputTasks
                            data={this.state}
                            handleAddTask={this.addTask}
                            handleSearchTask={this.searchTask}
                            handleChangeEvent={(e) => this.changeInput(e)}
                            
                        />
                    </div>
                    <div className='col-2'>

                        <ShowTime time={()=>this.currentTime()} nowTime={this.state} />
                    </div>
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
