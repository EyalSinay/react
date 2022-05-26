import './to-do-list.style.css';
import React from "react";
import ItemConst from "./ItemConst";
import ItemEditable from "./ItemEditable";
import CreateItem from "./CreateItem";

const date = new Date();

const exampleList = [
    { title: "To wake up", id: 1, date: date.toDateString(), lastUpdate: 'never', priority: 2 },
    { title: "Go to sleep", id: 2, date: date.toDateString(), lastUpdate: 'never', priority: 3 }
];

class ToDoListApp extends React.Component {
    state = { toDoList: exampleList, onEditId: null };

    componentDidMount() {
        if (localStorage.hasOwnProperty('toDoList')) {
            this.setState({ toDoList: JSON.parse(localStorage.getItem('toDoList')) })
        }
    }
    componentDidUpdate() {
        localStorage.setItem('toDoList', JSON.stringify(this.state.toDoList));
    }

    getList = () => {
        return this.state.toDoList.map(todo => {
            if (todo.id !== this.state.onEditId) {
                return (<ItemConst
                    key={todo.id}
                    {...todo}
                    getPriority={this.getPriority}
                    deleteItem={this.deleteItem}
                    editItem={this.editItem}
                />);
            } else {
                return (<ItemEditable
                    key={todo.id}
                    {...todo}
                    getPriority={this.getPriority}
                    cancelEdit={() => this.setState({ onEditId: null })}
                    confirmEdit={this.updateItem}
                />);
            }
        });
    }

    getNewItem = (newItemTitle, newItemDate, newItemPriority) => {
        const newToDoList = [...this.state.toDoList];
        newToDoList.push({ title: newItemTitle, id: newToDoList.length + 1, date: newItemDate, lastUpdate: null, priority: newItemPriority });
        this.setState({ toDoList: newToDoList });
    }

    updateItem = (idToUpdate, newName, dateLastUpdate, newPriority) => {
        const newToDoList = [...this.state.toDoList];
        const indexId = newToDoList.findIndex(todo => todo.id === idToUpdate);
        newToDoList[indexId].title = newName;
        newToDoList[indexId].lastUpdate = dateLastUpdate;
        newToDoList[indexId].priority = newPriority;
        this.setState({ toDoList: newToDoList, onEditId: null });
    }

    getPriority = (newPriority, id) => {
        const newToDoList = [...this.state.toDoList];
        const indexId = newToDoList.findIndex(todo => todo.id === id);
        newToDoList[indexId].priority = newPriority;
        this.setState({ toDoList: newToDoList });
    }

    deleteItem = (idToDelete) => {
        const areYouShoer = window.confirm("Are you shoer that you wont to delete that task?");
        if (areYouShoer) {
            const newToDoList = [...this.state.toDoList];
            const indexId = newToDoList.findIndex(todo => todo.id === idToDelete);
            newToDoList.splice(indexId, 1);
            this.setState({ toDoList: newToDoList });
        }
    }

    editItem = (idToEdit) => {
        //! if on add item - cancel
        this.setState({ onEditId: idToEdit });
    }

    render() {
        return (
            <div className="todo-list-container">
                <h1>To Do List</h1>

                <div className="item-titles-container-container item-container">
                    <span className="title-item titles-container">Task</span>
                    <span className="date-item titles-container">Created</span>
                    <span className="date-item titles-container">Modify</span>
                    <span className="priority titles-container">Priority (1-3)</span>
                    <div className="edit-delete-btn-co titles-container">
                        <span>Edit</span>
                        <span>Delete</span>
                    </div>
                </div>

                {this.getList()}
                <CreateItem getNewItem={this.getNewItem} onAdd={() => this.setState({ onEditId: null })} />
            </div>
        );
    }
}

export default ToDoListApp;